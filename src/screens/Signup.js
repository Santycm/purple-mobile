import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import { Infouserform } from '../components/Infouserform.js';
import { Accountform } from '../components/Accountform.js';

export const Signup = ({navigation}) => {
  const [ShowAccountForm, setShowAccountForm] = useState(false);

  const [userName, setUsername] = useState('');
  const [addres, setAddress] = useState('');
  const [age, setAge] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const validateFirstForm = ()=>{
    if(userName === '' || addres === '' || age === 0 || selectedCountry === '' || selectedDepartment === '' || selectedCity === ''){
      return false;
    }
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
        {ShowAccountForm && <Accountform/>}
      </ScrollView>
    </View>
  );
};
