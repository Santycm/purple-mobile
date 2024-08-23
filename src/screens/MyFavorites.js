import React from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppStyles from '../styles/AppStyles.js';

const purchasedProducts = [
  { id: '1', name: 'Samsung Galaxy S21', description: 'Smartphone de última generación', price: 1000000, status: 'Disponible', image: 'https://www.clevercel.co/cdn/shop/products/samsung-galaxy-s21-5g-0.jpg?v=1634321179' },
  { id: '2', name: 'PlayStation 5', description: 'Consola de videojuegos', price: 2000000, status: 'No disponible', image: 'https://exitocol.vtexassets.com/arquivos/ids/9154830/consola-sony-playstation-5-ps5-825gb-lector-de-disco.jpg?v=637631028235770000' },
  { id: '3', name: 'Laptop HP', description: 'Laptop para trabajo', price: 3000000, status: 'No disponible', image: 'https://d34vmoxq6ylzee.cloudfront.net/catalog/product/3/0/308Z8LA-1_T1679063126.png' },
];

export const MyFavorites = ({ navigation }) => {
  const handlePress = (item) => {
    // Navegar a la pantalla correspondiente
    navigation.navigate('Home', { productId: item.id }); 
  };

  const renderItem = ({ item }) => {
    let statusStyle;

    switch (item.status) {
      case 'Disponible':
        statusStyle = AppStyles.statusDisponible;
        break;
      case 'No disponible':
        statusStyle = AppStyles.statusNoDisponible;
        break;
      default:
        statusStyle = {}; 
    }

    return (
      <Pressable onPress={() => handlePress(item)} style={AppStyles.purchaseItem}>
        <View style={[AppStyles.imageContainer, { marginLeft: 20 }]}>
          <Image source={{ uri: item.image }} style={AppStyles.imageSmall} />
        </View>
        <View style={[AppStyles.purchaseDetails, { marginLeft: 20 }]}>
          <Text style={AppStyles.productName}>{item.name}</Text>
          <Text style={AppStyles.productDescriptionFavorite}>{item.description}</Text>
          <Text style={AppStyles.productPrice}>Precio: {formatPrice(item.price)}</Text>
          <Text style={[AppStyles.productStatusLabel, statusStyle]}>Estado: {item.status}</Text>
          {item.status === 'Disponible' && (
            <Pressable style={[AppStyles.reorderButton, { marginLeft: 30 }]}>
              <Text style={AppStyles.reorderButtonText}>Agregar al carrito</Text>
            </Pressable>
          )}
        </View>
      </Pressable>
    );
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <View style={AppStyles.container}>
      <View style={AppStyles.header}>
        <Pressable
          style={AppStyles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
        </Pressable>
        <Text style={AppStyles.headerTitle}>Mis Favoritos</Text>
      </View>
      <FlatList
        data={purchasedProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={AppStyles.listContainer}
      />
    </View>
  );
};
