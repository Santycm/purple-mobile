import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export const ProductComponent = item => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProductInfo', {product: item});
  };

  return (
    <View style={styles2.cardProduct}>
      <View style={styles2.imgProductContainer}>
        <Image source={item.img} style={styles2.imgProduct} />
        {item.offer && (
          <View style={styles2.discountContainer}>
            <Text style={styles2.textDiscount}>-{item.offer.discount}%</Text>
          </View>
        )}
        <View style={styles2.categoryContainer}>
          <Text style={styles2.textDiscount}>{item.category}</Text>
        </View>
      </View>
      <View style={styles2.textProductContainer}>
        <Text style={styles2.textTitle} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={{color: 'white'}}>$ {item.price}</Text>
      </View>
      <View style={styles2.containerRow}>
        <TouchableOpacity style={styles2.btnPrimary} onPress={handlePress}>
          <Text style={styles2.textBtn}>Ver más</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles2.btnFourth}>
          <Icon name="cart" size={25} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
