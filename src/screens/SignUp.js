import React, {useState, useContext} from 'react';
import {View, Text, Pressable} from 'react-native';
import {styles2} from '../styles/AppStyles2.js';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import {InfoUserForm} from '../components/InfoUserForm.js';
import {Accountform} from '../components/AccountForm.js';
import {UserContext} from '../context/UserContext';

export const SignUp = ({navigation}) => {
  const [ShowAccountForm, setShowAccountForm] = useState(false);
  const [userState, userDispatch] = useContext(UserContext);

  const [userName, setUsername] = useState('');
  const [addres, setAddress] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [passwordAccount, setPasswordAccount] = useState('');
  const [confirmPasswordAccount, setConfirmPasswordAccount] = useState('');

  const validateFirstForm = () => {
    if (
      userName === '' ||
      addres === '' ||
      selectedCountry === '' ||
      selectedDepartment === '' ||
      selectedCity === ''
    ) {
      return false;
    }
    return true;
  };

  const nameRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ ]+$/;

  const validateFinalForm = () => {
    if (name === '' || lastName === '' || email === '' || passwordAccount === '') {
      alert('Por favor llena todos los campos');
      return false;
    }

    if (!nameRegex.test(name)) {
      alert('El nombre solo puede contener letras');
      return false;
    }

    if (!nameRegex.test(lastName)) {
      alert('El apellido solo puede contener letras');
      return false;
    }

    if (!email.includes('@')) {
      alert('El correo debe contener un "@"');
      return false;
    }

    if (passwordAccount !== confirmPasswordAccount) {
      alert('Las contraseñas no coinciden');
      return false;
    }

    if (passwordAccount.length > 8) {
      alert('La contraseña debe tener un máximo de 8 caracteres');
      return false;
    }

    const hasUpperCase = /[A-Z]/.test(passwordAccount);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(passwordAccount);
    const hasNumber = /\d/.test(passwordAccount);
    const hasLetter = /[a-z]/i.test(passwordAccount);

    if (!hasUpperCase || !hasSpecialChar || !hasNumber || !hasLetter) {
      alert(
        'La contraseña debe incluir una letra mayuscula, un caracter especial, un número y una letra minúscula',
      );
      return false;
    }

    if(userState.dbMarket.find((user) => user.email === email)){
      alert('El correo ya está registrado');
      return false;
    }

    userState.dbMarket.push({
      userName: userName,
      addres: addres,
      birthDate: birthDate,
      country: selectedCountry,
      department: selectedDepartment,
      city: selectedCity,
      email: email,
      password: passwordAccount,
      name: name,
      lastName: lastName,
      products: [],
      purchases: [],
    })

    return true;
  };

  return (
    <View style={styles2.signUpScreen}>
      <Pressable
        style={styles2.btnBack}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="arrow-back" size={30} color="white" />
      </Pressable>
      <ScrollView style={styles2.signUpScreenContainer}>
        <Text style={styles2.textPrincipal}>
          ¡VAMOS A CREAR TU CUENTA PURPLE!
        </Text>
        {!ShowAccountForm && (
          <InfoUserForm
            userState={{
              userName,
              setUsername,
              addres,
              setAddress,
              birthDate,
              setBirthDate,
              selectedCountry,
              setSelectedCountry,
              selectedCity,
              setSelectedCity,
              selectedDepartment,
              setSelectedDepartment,
            }}
            nextStep={() =>
              validateFirstForm()
                ? setShowAccountForm(true)
                : alert('Por favor llena todos los campos')
            }
          />
        )}
        {ShowAccountForm && (
          <Accountform
            userState2={{
              name,
              setName,
              lastName,
              setLastName,
              email,
              setEmail,
              passwordAccount,
              setPasswordAccount,
              confirmPasswordAccount,
              setConfirmPasswordAccount,
            }}
            createAccount={() =>
              validateFinalForm()
                ? navigation.navigate('Login')
                : alert('Algo salió mal')
            }
          />
        )}
      </ScrollView>
    </View>
  );
};
