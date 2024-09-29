import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppStyles from '../styles/AppStyles.js';


const ProductCartComponent = ({item, dispatch}) => {

  const formatPrice = price => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <View style={AppStyles.cartItem}>
      <View style={AppStyles.imageContainer}>
        <Image source={{uri: item.img}} style={AppStyles.cartItemImage} />
      </View>
      <View style={AppStyles.cartItemDetails}>
        <Text numberOfLines={1} style={AppStyles.cartItemName}>
          {item.name}
        </Text>
        <Text style={AppStyles.cartItemDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={AppStyles.cartItemPrice}>
          {item.offer.isOffer ? formatPrice(item.offer.priceInOffer) : formatPrice(item.price)} x {item.quantity}
        </Text>
        <View style={AppStyles.quantityControls}>
          <Pressable
            onPress={() => dispatch({type: 'DECREMENT_ITEM', payload: item.id})}
            style={AppStyles.quantityButton}>
            <Text style={AppStyles.quantityButtonText}>-</Text>
          </Pressable>
          <Text style={AppStyles.quantityText}>{item.quantity}</Text>
          <Pressable
            onPress={() => dispatch({type: 'INCREMENT_ITEM', payload: item.id})}
            style={AppStyles.quantityButton}>
            <Text style={AppStyles.quantityButtonText}>+</Text>
          </Pressable>
          <Pressable
            onPress={() =>
              dispatch({type: 'REMOVE_FROM_CART', payload: item.id})
            }
            style={AppStyles.deleteButton}>
            <Icon name="trash-outline" size={24} color="#D4A5FF" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProductCartComponent;
