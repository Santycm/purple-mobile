import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
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
        {item.offer.isOffer && (
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
          {item.name}
        </Text>
        <Text numberOfLines={3}>
          {item.description}
        </Text>
        <Text style={{color: 'white'}}>
          ${' '}
          {item.price.toString().length > 8
            ? item.price.toString().substring(0, 8) + '...'
            : item.price}
        </Text>
      </View>
      <View style={styles2.containerRow}>
        <Pressable style={styles2.btnPrimary} onPress={handlePress}>
          <Text style={styles2.textBtn}>Ver más</Text>
        </Pressable>
        <Pressable style={styles2.btnFourth}>
          <Icon name="cart" size={25} color="white" />
        </Pressable>
      </View>
    </View>
  );
};
