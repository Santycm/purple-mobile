import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import AppStyles from '../styles/AppStyles.js';
import {Picker} from '@react-native-picker/picker';

export const ProductClientComponent = ({item, dispatch, state}) => {
  const [selectedState, setSelectedState] = useState(item.status);
  let statusStyle;

  useEffect(() => {
    dispatch({
      type: 'UPDATE_PURCHASE_STATUS_ONLIST',
      payload: {product: item.idProductP, status: selectedState},
    });
    dispatch({
      type: 'UPDATE_PURCHASE_STATUS',
      payload: {product: item.idProductP, status: selectedState},
    });
  }, [selectedState]);

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
        <Text style={AppStyles.dateText}>{formatDateTime(item.date)}</Text>
        <Text style={AppStyles.productName} numberOfLines={1}>
          {item.productP}
        </Text>
        <Text style={AppStyles.productPrice}>
          Precio:{formatPrice(item.price)}
        </Text>
        <View>
          <View style={AppStyles.statusContainer}>
            <Text style={AppStyles.productStatusLabel}>Cliente:</Text>
            <Text>{item.client}</Text>
          </View>
          <View style={AppStyles.statusContainer}>
            <Text style={AppStyles.productStatusLabel}>Medio de pago:</Text>
            <Text style={{flexWrap: 'wrap'}}>{item.paymentMethod}</Text>
          </View>
          <View style={AppStyles.statusContainer}>
            <Text style={AppStyles.productStatusLabel}>Cantidad:</Text>
            <Text style={{flexWrap: 'wrap'}}>{item.count}</Text>
          </View>
        </View>
        <View style={AppStyles.statusContainer}>
          <Text style={AppStyles.productStatusLabel}>Estado:</Text>
          <Picker
            selectedValue={selectedState}
            style={[AppStyles.productStatusValue, statusStyle]}
            onValueChange={itemValue => setSelectedState(itemValue)}>
            <Picker.Item label="En tránsito" value="En tránsito" />
            <Picker.Item label="Cancelado" value="Cancelado" />
            <Picker.Item label="Entregado" value="Entregado" />
          </Picker>
        </View>
      </View>
    </View>
  );
};
