import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import { styles2 } from '../styles/AppStyles2';

export const ProductComponent = (item) => {
  return (
    <View style={styles2.cardProduct}>
      <View style={styles2.imgProductContainer}>
        <Image source={item.img} style={styles2.imgProduct} />
      </View>
      <View style={styles2.textProductContainer}>
        <Text style={styles2.textTitle}>{item.name}</Text>
        <Text style={{color: 'white'}}>$ {item.price}</Text>
      </View>
      <TouchableOpacity style={styles2.btnPrimary}>
        <Text style={styles2.textBtn}>Agregar al carrito</Text>
      </TouchableOpacity>
    </View>
  );
};
