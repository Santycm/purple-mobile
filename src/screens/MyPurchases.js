import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppStyles from '../styles/AppStyles.js';

const purchasedProducts = [
  { id: '1', name: 'Samsung Galaxy S21', price: 1000000, status: 'Entregado', date: '2024-08-15', image: 'https://www.clevercel.co/cdn/shop/products/samsung-galaxy-s21-5g-0.jpg?v=1634321179' },
  { id: '2', name: 'PlayStation 5', price: 2000000, status: 'En tránsito', date: '2024-08-18', image: 'https://exitocol.vtexassets.com/arquivos/ids/9154830/consola-sony-playstation-5-ps5-825gb-lector-de-disco.jpg?v=637631028235770000' },
  { id: '3', name: 'Laptop HP', price: 3000000, description: 'Laptop para trabajo', status: 'Cancelado', date: '2024-08-20', image: 'https://d34vmoxq6ylzee.cloudfront.net/catalog/product/3/0/308Z8LA-1_T1679063126.png' },
];

export const MyPurchases = ({ navigation }) => {
  const renderItem = ({ item }) => {
    let statusStyle;

    switch (item.status) {
      case 'Entregado':
        statusStyle = AppStyles.statusEntregado;
        break;
      case 'En tránsito':
        statusStyle = AppStyles.statusEnTransito;
        break;
      case 'Cancelado':
        statusStyle = AppStyles.statusCancelado;
        break;
      default:
        statusStyle = {}; 
    }

    return (
      <View style={AppStyles.purchaseItem}>
        <View style={AppStyles.imageContainer}>
          <Image source={{ uri: item.image }} style={AppStyles.image} />
        </View>
        <View style={AppStyles.purchaseDetails}>
          <Text style={AppStyles.dateText}>Fecha: {item.date}</Text>
          <Text style={AppStyles.productName}>{item.name}</Text>
          <Text style={AppStyles.productPrice}>Precio: {formatPrice(item.price)}</Text>
          <Text style={AppStyles.productStatusLabel}>Estado:</Text>
          <Text style={[AppStyles.productStatusValue, statusStyle]}>{item.status}</Text>
          {item.status === 'Cancelado' && (
            <TouchableOpacity
              style={AppStyles.reorderButton}>
              <Text style={AppStyles.reorderButtonText}>Volver a comprar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
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
        <TouchableOpacity
          style={AppStyles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
        </TouchableOpacity>
        <Text style={AppStyles.headerTitle}>Mis Compras</Text>
      </View>
      <FlatList
        data={purchasedProducts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={AppStyles.listContainer}
      />
    </View>
  );
}
