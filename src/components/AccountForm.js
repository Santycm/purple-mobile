import React from 'react';
import {View, Text, TextInput, Pressable} from 'react-native';
import {styles2} from '../styles/AppStyles2';

export const Accountform = ({userState2, createAccount}) => {
  return (
    <View style={styles2.formSection}>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>Nombres</Text>
        <TextInput
          style={styles2.textInput2}
          value={userState2.name}
          onChangeText={userState2.setName}></TextInput>
      </View>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>Apellidos</Text>
        <TextInput
          style={styles2.textInput2}
          value={userState2.lastName}
          onChangeText={userState2.setLastName}></TextInput>
      </View>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>E-mail</Text>
        <TextInput
          style={styles2.textInput2}
          value={userState2.email}
          onChangeText={userState2.setEmail}></TextInput>
      </View>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>Contraseña</Text>
        <TextInput
          style={styles2.textInput2}
          secureTextEntry={true}
          value={userState2.passwordAccount}
          onChangeText={userState2.setPasswordAccount}
          maxLength={8}></TextInput>
        <Text style={styles2.inputLbl}>
          Máximo 8 caracteres, debe tener una letra máyuscula una minuscula,
          numeros y un caracter especial
        </Text>
      </View>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>Confirmar contraseña</Text>
        <TextInput
          style={styles2.textInput2}
          secureTextEntry={true}
          value={userState2.confirmPasswordAccount}
          onChangeText={userState2.setConfirmPasswordAccount}
          maxLength={8}></TextInput>
        <Text style={styles2.inputLbl}>
          Verifica que sea igual a la que ingresaste anteriormente
        </Text>
      </View>
      <Pressable style={styles2.btnSecondary} onPress={createAccount}>
        <Text style={styles2.textTitle}>Crear cuenta</Text>
      </Pressable>
    </View>
  );
};
