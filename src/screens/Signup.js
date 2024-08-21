import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import { Infouserform } from '../components/Infouserform.js';
import { Accountform } from '../components/Accountform.js';

export const Signup = ({navigation}) => {
  const [ShowAccountForm, setShowAccountForm] = useState(false)

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
        {!ShowAccountForm && <Infouserform nextStep={()=> setShowAccountForm(true)} />}
        {ShowAccountForm && <Accountform/>}
      </ScrollView>
    </View>
  );
};
