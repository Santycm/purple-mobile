import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { products } from '../assets/dbProducts.js';
import AppStyles from '../styles/AppStyles.js';

export const Cart = ({ navigation }) => {
  const [cart, setCart] = useState([
    { ...products[0], quantity: 1 },
    { ...products[1], quantity: 2 },
  ]);

  const addToCart = (product) => {
    setCart(cart.map(item =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const removeFromCart = (productId) => {
    setCart(cart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ).filter(item => item.quantity > 0));
  };

  const deleteFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, product) => total + product.quantity, 0);
  };

  const renderCartControls = ({ item }) => (
    <View style={AppStyles.cartItem}>
      <View style={AppStyles.imageContainer}>
        <Image source={item.img} style={AppStyles.cartItemImage} />
      </View>
      <View style={AppStyles.cartItemDetails}>
        <Text style={AppStyles.cartItemName}>{item.description}</Text>
        <Text style={AppStyles.cartItemDescription} numberOfLines={2}>
          {item.characteristics}
        </Text>
        <Text style={AppStyles.cartItemPrice}>{formatPrice(item.price)} x {item.quantity}</Text>
        <View style={AppStyles.quantityControls}>
          <TouchableOpacity onPress={() => removeFromCart(item.id)} style={AppStyles.quantityButton}>
            <Text style={AppStyles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={AppStyles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity onPress={() => addToCart(item)} style={AppStyles.quantityButton}>
            <Text style={AppStyles.quantityButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteFromCart(item.id)} style={AppStyles.deleteButton}>
            <Icon name="trash-outline" size={24} color="#D4A5FF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={AppStyles.container}>
      <View style={AppStyles.header}>
        <TouchableOpacity
          style={AppStyles.backButtoncart}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
        </TouchableOpacity>
        <Text style={AppStyles.headerTitle}>Carrito de compra</Text>
        <Text style={AppStyles.address}>Dirección: Calle X #123, Ciudad</Text>
      </View>
      <FlatList
        data={cart}
        renderItem={renderCartControls}
        keyExtractor={(item) => item.id.toString()}
        style={AppStyles.cartList}
      />
      <View style={AppStyles.detailsContainer}>
        <Text style={AppStyles.detailsText}>Detalles de compra</Text>
        <Text style={AppStyles.detailsText}>Cantidad de productos: {getTotalItems()}</Text>
        <Text style={AppStyles.totalText}>Total: {formatPrice(getTotalPrice())}</Text>
        <TouchableOpacity
          style={AppStyles.checkoutButton}
          onPress={() => {
            navigation.navigate('Delivery', { cart }); 
          }}>
          <Text style={AppStyles.checkoutButtonText}>Continuar compra</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
