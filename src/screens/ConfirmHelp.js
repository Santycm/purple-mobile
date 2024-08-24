import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import AppStyles from '../styles/AppStyles';

export const ConfirmHelp = ({ navigation }) => {
  return (
    <View style={AppStyles.containerConfirm}>     
      <Image
        source={require('../assets/confirm/icon.png')} 
        style={AppStyles.successImage}
      />
      <View style={AppStyles.innerContainerConfirm}>
        <Text style={AppStyles.successMessageConfirm}>Su Ayuda o PQRS fue enviada con exito, proximamente nos comunicaremos contigo</Text>
        <Pressable
          style={AppStyles.continueButtonScreen}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={AppStyles.continueButtonTextScreen}>Ir al inicio</Text>
        </Pressable>
      </View>
    </View>
  );
};
