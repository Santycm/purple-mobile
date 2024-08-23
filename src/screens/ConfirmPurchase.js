import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppStyles from '../styles/AppStyles';

export const ConfirmPurchase = ({ navigation }) => {
  return (
    <View style={AppStyles.containerConfirm}>     
      <Image
        source={require('../assets/confirm/icon.png')} 
        style={AppStyles.successImage}
      />
      <View style={AppStyles.innerContainerConfirm}>
        <Text style={AppStyles.successMessageConfirm}>Su compra fue exitosa</Text>
        <TouchableOpacity
          style={AppStyles.continueButtonScreen}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text style={AppStyles.continueButtonTextScreen}>Ir al inicio</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

