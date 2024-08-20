import React from 'react';
import {View, Image, Text} from 'react-native';

export const ProductComponent = (key, img, name, price) => {
  return (
    <View style={{color: 'white'}}>
      <Image source={img} />
      <Text style={{color: 'white'}}>{name}</Text>
      <Text style={{color: 'white'}}>{price}</Text>
    </View>
  );
};
