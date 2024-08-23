import React, {useState} from 'react';
import {View, Text, Touchable, Image} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles2} from '../styles/AppStyles2.js';
import {users} from '../assets/dbUsers.js';

export const SigIn = ({navigation}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles2.bgScreen}>
      <TouchableOpacity
        style={styles2.btnBack}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

      <View style={styles2.sectionContainer}>
        <Image
          source={require('../assets/icon.png')}
          style={styles2.iconApp}></Image>
        <Text style={styles2.textTitle}>Iniciar sesión en Purple Store</Text>
      </View>

      <View style={styles2.signInContainer}>
        <Text style={styles2.textTitle}>Ingresa tu cuenta de Purple Store</Text>
        <View style={styles2.inputSection}>
          <Text style={styles2.textInputLabel}>Usuario</Text>
          <TextInput
            style={styles2.textInput}
            maxLength={10}
            onChangeText={setUser}
            value={user}></TextInput>
        </View>
        <View style={styles2.inputSection}>
          <Text style={styles2.textInputLabel}>Contraseña</Text>
          <TextInput
            secureTextEntry={true}
            style={styles2.textInput}
            onChangeText={setPassword}
            maxLength={8}
            value={password}></TextInput>
        </View>
        <TouchableOpacity
          style={styles2.btnSecondary}
          onPress={() => {
            let userFound = users.find(userItem => {
              return (
                userItem.userName === user && userItem.password === password
              );
            });
            if (userFound) {
              navigation.navigate('MyProfile');
            } else {
              alert('Usuario o contraseña incorrectos');
            }
          }}>
          <Text style={styles2.textTitle}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <View style={styles2.btnSection}>
          <Text>¿No tienes una cuenta?</Text>
          <TouchableOpacity
            style={styles2.btnThird}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles2.textTitle}>Crear cuenta</Text>
            <Icon
              name="arrow-forward-circle-outline"
              size={20}
              color="white"></Icon>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};