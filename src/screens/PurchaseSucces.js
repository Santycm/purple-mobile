import React, {useEffect} from 'react';
import {View, Text, Pressable, Image, Linking} from 'react-native';
import AppStyles from '../styles/AppStyles';

export const PurchaseSuccess = ({navigation}) => {
  
  return (
    <View style={AppStyles.containerConfirm}>
      <Image
        source={require('../assets/confirm/icon.png')}
        style={AppStyles.successImage}
      />
      <View style={AppStyles.innerContainerConfirm}>
        <Text style={AppStyles.successMessageConfirm}>
          Compra finalizada
        </Text>
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
