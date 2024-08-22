import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import { Infouserform } from '../components/Infouserform.js';
import { Accountform } from '../components/Accountform.js';
import {users} from '../assets/dbUsers.js';

export const Signup = ({navigation}) => {
  const [ShowAccountForm, setShowAccountForm] = useState(false);

  const [userName, setUsername] = useState('');
  const [addres, setAddress] = useState('');
  const [age, setAge] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [email, setEmail] = useState('');
  const [passwordAccount, setPasswordAccount] = useState('');
  const [confirmPasswordAccount, setConfirmPasswordAccount] = useState('');

  const validateFirstForm = ()=>{
    if(userName === '' || addres === '' || age === 0 || selectedCountry === '' || selectedDepartment === '' || selectedCity === ''){
      return false;
    }
    return true;
  }

  const validateFinalForm = ()=>{
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

    users.push({userName:userName, addres:addres, age:age, country:selectedCountry, department:selectedDepartment, city:selectedCity, email:email, password:passwordAccount});

    return true;
  }

  return (
    <View style={styles2.signUpScreen}>
      <TouchableOpacity
        style={styles2.btnBack}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <ScrollView style={styles2.signUpScreenContainer}>
        <Text style={styles2.textPrincipal}>
          ¡VAMOS A CREAR TU CUENTA PURPLE!
        </Text>
        {!ShowAccountForm && <Infouserform userState={{userName, setUsername, addres, setAddress, age, setAge, selectedCountry, setSelectedCountry, selectedCity, setSelectedCity, selectedDepartment, setSelectedDepartment}} nextStep={()=> 
        validateFirstForm()? setShowAccountForm(true): alert('Por favor llena todos los campos')
         } />}
        {ShowAccountForm && <Accountform userState2={{email, setEmail, passwordAccount, setPasswordAccount, confirmPasswordAccount, setConfirmPasswordAccount}} createAccount={()=> validateFinalForm()? navigation.navigate('Login'): alert('Algo salió mal')}/>}
      </ScrollView>
    </View>
  );
};
