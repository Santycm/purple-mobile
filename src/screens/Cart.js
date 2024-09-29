import React, {useContext} from 'react';
import {View, Text, FlatList, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppStyles from '../styles/AppStyles.js';

import ProductCartComponent from '../components/ProductCartComponent.js';
import { UserContext } from '../context/UserContext.js';

export const Cart = ({navigation}) => {
  const [userState, userDispatch] = useContext(UserContext);

  const getTotalItems = cart => {
    return (
     cart.reduce((total, product) => total + product.quantity, 0)
    );
  };

  const getTotalPrice = cart => {
    return formatPrice(
      cart.reduce((total, product) => {
        const price =
          product.offer ? product.offer.priceInOffer : product.price;
        return total + price * product.quantity;
      }, 0),
    );
  };

  const formatPrice = price => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const renderProductCart = ({item}) => (
    <ProductCartComponent
      item={item}
      state={userState}
      dispatch={userDispatch}
    />
  );

  return (
    <View style={AppStyles.container}>
      <View style={AppStyles.header}>
        <Pressable
          style={AppStyles.backButtoncart}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
        </Pressable>
        <Text style={AppStyles.headerTitle}>Carrito de compra</Text>
      </View>
      <FlatList
        data={userState.cart}
        renderItem={renderProductCart}
        style={AppStyles.cartList}
      />
      <View style={AppStyles.detailsContainer}>
        <Text style={AppStyles.detailsText}>Detalles de compra</Text>
        <Text style={AppStyles.detailsText}>
          Cantidad de productos: {getTotalItems(userState.cart)}
        </Text>
        <Text style={AppStyles.totalText}>
          Total: {getTotalPrice(userState.cart)}
        </Text>
        <Pressable
          style={AppStyles.checkoutButton}
          onPress={() => {
            navigation.navigate('Delivery'); 
          }}
        >
          <Text style={AppStyles.checkoutButtonText}>Continuar compra</Text>
        </Pressable>
      </View>
    </View>
  );
};
