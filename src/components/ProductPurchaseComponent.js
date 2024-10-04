import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AppStyles from '../styles/AppStyles.js';

export const ProductPurchaseComponent = ({item}) => {
  let statusStyle;

  switch (item.status) {
    case 'Entregado':
      statusStyle = AppStyles.statusDelivered;
      break;
    case 'En tránsito':
      statusStyle = AppStyles.statusInWay;
      break;
    case 'Cancelado':
      statusStyle = AppStyles.statusCanceled;
      break;
    default:
      statusStyle = {};
  }

  const formatPrice = price => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatDateTime = date => {
    const dateObject = new Date(date);
    return `${dateObject.getDate()}/${
      dateObject.getMonth() + 1
    }/${dateObject.getFullYear()} ${dateObject.getHours()}:${dateObject
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  };
  return (
    <View style={AppStyles.purchaseItem}>
      <View style={AppStyles.imageContainer}>
        <Image source={{uri: item.img}} style={AppStyles.image} />
      </View>
      <View style={AppStyles.purchaseDetails}>
        <Text style={AppStyles.dateText}>
          Fecha: {formatDateTime(item.date)}
        </Text>
        <Text style={AppStyles.productName} numberOfLines={1}>
          {item.product}
        </Text>
        <Text style={AppStyles.productPrice}>
          Precio:{formatPrice(item.price)}
        </Text>
        <View>
          <View style={AppStyles.statusContainer}>
            <Text style={AppStyles.productStatusLabel}>Estado:</Text>
            <Text style={[AppStyles.productStatusValue, statusStyle]}>
              {item.status}
            </Text>
          </View>
          <View style={AppStyles.statusContainer}>
            <Text style={AppStyles.productStatusLabel}>Cantidad:</Text>
            <Text>{item.count}</Text>
          </View>
          <View style={AppStyles.statusContainer}>
            <Text style={AppStyles.productStatusLabel}>Distribuidor:</Text>
            <Text>{item.distribuitor}</Text>
          </View>
          <View style={AppStyles.statusContainer}>
            <Text style={AppStyles.productStatusLabel}>Medio de pago:</Text>
            <Text>{item.paymentMethod}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
