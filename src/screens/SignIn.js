import React, {useState} from 'react';
import {View, Text, Image, TextInput, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles2} from '../styles/AppStyles2.js';
import {users} from '../assets/dbUsers.js';
import {useNavigation} from '@react-navigation/native';

export const SigIn = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('MyProfile', {user:user});
  };

  return (
    <View style={styles2.bgScreen}>
      <Pressable
        style={styles2.btnBack}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="arrow-back" size={30} color="white" />
      </Pressable>

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
        <Pressable
          style={styles2.btnSecondary}
          onPress={() => {
            let userFound = users.find(userItem => {
              return (
                userItem.userName === user && userItem.password === password
              );
            });
            if (userFound) {
              handlePress();
            } else {
              alert('Usuario o contraseña incorrectos');
            }
          }}>
          <Text style={styles2.textTitle}>Iniciar Sesión</Text>
        </Pressable>
        <View style={styles2.btnSection}>
          <Text>¿No tienes una cuenta?</Text>
          <Pressable
            style={styles2.btnThird}
            onPress={() => {
              navigation.navigate('SignUp');
            }}>
            <Text style={styles2.textTitle}>Crear cuenta</Text>
            <Icon
              name="arrow-forward-circle-outline"
              size={20}
              color="white"></Icon>
          </Pressable>
        </View>
      </View>
    </View>
  );
};
