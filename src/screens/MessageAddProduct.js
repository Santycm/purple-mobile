import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import AppStyles from '../styles/AppStyles';

export const MessageAddProduct = ({navigation}) => {
  return (
    <View style={AppStyles.containerConfirm}>
      <Image
        source={require('../assets/confirm/icon.png')}
        style={AppStyles.successImage}
      />
      <View style={AppStyles.innerContainerConfirm}>
        <Text style={AppStyles.successMessageConfirm}>
          Producto agregado correctamente
        </Text>
        <Pressable
          style={AppStyles.continueButtonScreen}
          onPress={() => {
            navigation.navigate('MyProducts');
          }}>
          <Text style={AppStyles.continueButtonTextScreen}>
            Ir a mis productos
          </Text>
        </Pressable>
      </View>
    </View>
  );
};
