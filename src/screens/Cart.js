import React, { useState } from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
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
        <Text style={AppStyles.cartItemName}>{item.name}</Text>
        <Text style={AppStyles.cartItemDescription} numberOfLines={2}>
          {item.description}
        </Text>
        <Text style={AppStyles.cartItemPrice}>{formatPrice(item.price)} x {item.quantity}</Text>
        <View style={AppStyles.quantityControls}>
          <Pressable onPress={() => removeFromCart(item.id)} style={AppStyles.quantityButton}>
            <Text style={AppStyles.quantityButtonText}>-</Text>
          </Pressable>
          <Text style={AppStyles.quantityText}>{item.quantity}</Text>
          <Pressable onPress={() => addToCart(item)} style={AppStyles.quantityButton}>
            <Text style={AppStyles.quantityButtonText}>+</Text>
          </Pressable>
          <Pressable onPress={() => deleteFromCart(item.id)} style={AppStyles.deleteButton}>
            <Icon name="trash-outline" size={24} color="#D4A5FF" />
          </Pressable>
        </View>
      </View>
    </View>
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
        <Pressable
          style={AppStyles.checkoutButton}
          onPress={() => {
            navigation.navigate('Delivery', { cart }); 
          }}>
          <Text style={AppStyles.checkoutButtonText}>Continuar compra</Text>
        </Pressable>
      </View>
    </View>
  );
};
