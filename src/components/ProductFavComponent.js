import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AppStyles from '../styles/AppStyles.js';

export const ProductFavComponent = ({item, state, dispatch}) => {
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

  const formatPrice = price => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const isInCart = state.cart.find(product => product.id === item.id);
  const isUserLogged = state.user !== null;

  return (
    <View style={AppStyles.purchaseItem}>
      <View style={[AppStyles.imageContainer, {marginLeft: 20}]}>
        <Image source={item.img} style={AppStyles.imageSmall} />
      </View>
      <View style={[AppStyles.purchaseDetails, {marginLeft: 20}]}>
        <Text style={AppStyles.productName}>{item.name}</Text>
        <Text style={AppStyles.productDescriptionFavorite} numberOfLines={3}>
          {item.description}
        </Text>
        <Text style={AppStyles.productPrice}>
          Precio: {formatPrice(item.price)}
        </Text>
        <Text style={[AppStyles.productStatusLabel, statusStyle]}>
          Estado: {item.status}
        </Text>
        {item.status === 'Disponible' && (
          <Pressable
            style={[AppStyles.reorderButton, {marginLeft: 30}]}
            onPress={() => {
              if (!isUserLogged) {
                navigation.navigate('Login');
                return;
              } else {
                if (isInCart) {
                  dispatch({type: 'INCREMENT_ITEM', payload: item.id});
                } else {
                  dispatch({type: 'ADD_TO_CART', payload: item});
                }
              }
            }}>
            <Text style={AppStyles.reorderButtonText}>Agregar al carrito</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};
