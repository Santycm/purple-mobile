import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import AppStyles from '../styles/AppStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

export const MyProductComponent = ({item, state, dispatch}) => {
  const navigation = useNavigation();

  const handlePressView = () => {
    navigation.navigate('ProductInfo', {product: item, state: state});
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const formatPrice = price => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <View style={AppStyles.MyProductContainer}>
      <View style={AppStyles.MyProductInfo}>
        <Image
          source={{uri: item.img}}
          style={AppStyles.purchaseSummaryImageScreen}
        />
        <View>
          <Text>{truncateText(item.name, 15)}</Text>
          <Text>{formatPrice(item.price)}</Text>
        </View>
      </View>
      <View style={AppStyles.MyProductControls}>
        <Pressable
          style={AppStyles.MyProductBtnControl}
          onPress={() => {
            navigation.navigate('ProductForm', {isEdit: true, productId: item});
          }}>
          <Icon name="pencil" size={15} color="white" />
        </Pressable>
        <Pressable
          style={AppStyles.MyProductBtnControl}
          onPress={() => {
            dispatch({
              type: 'DELETE_PRODUCT',
              payload: {
                deleteUserName: state.user.userName,
                deleteProduct: item,
              },
            });
          }}>
          <Icon name="trash" size={15} color="white" />
        </Pressable>
        <Pressable
          style={AppStyles.MyProductBtnControl}
          onPress={handlePressView}>
          <Icon name="arrow-right" size={15} color="white" />
        </Pressable>
      </View>
    </View>
  );
};
