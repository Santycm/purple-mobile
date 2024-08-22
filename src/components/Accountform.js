import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles2} from '../styles/AppStyles2';

export const Accountform = () => {
  return (
    <View style={styles2.formSection}>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>E-mail</Text>
        <TextInput style={styles2.textInput2}></TextInput>
      </View>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>Contraseña</Text>
        <TextInput style={styles2.textInput2}></TextInput>
      </View>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>Confirmar contraseña</Text>
        <TextInput style={styles2.textInput2}></TextInput>
      </View>
      <TouchableOpacity style={styles2.btnSecondary}>
        <Text style={styles2.textTitle}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}
