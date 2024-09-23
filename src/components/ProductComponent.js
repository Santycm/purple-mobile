import React from 'react';
import {View, Image, Text, Pressable} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const ProductComponent = ({item, state, dispatch}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('ProductInfo', {product: item, state:state});
  };

  const formatPrice = price => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

   const isInCart = state.cart.find(product => product.id === item.id || product.product === item.name);
   const isUserLogged = state.user !== null;

  return (
    <View style={styles2.cardProduct}>
      <Pressable style={styles2.imgProductContainer} onPress={handlePress}>
        <Image source={item.img} style={styles2.imgProduct} />
        {item.offer.isOffer && (
          <View style={styles2.discountContainer}>
            <Text style={styles2.textDiscount}>-{item.offer.discount}%</Text>
          </View>
        )}
        <View style={styles2.categoryContainer}>
          <Text style={styles2.textDiscount}>{item.category}</Text>
        </View>
      </Pressable>
      <View style={styles2.textProductContainer}>
        <Text style={styles2.textTitle} numberOfLines={2}>
          {item.name}
        </Text>
        <Text numberOfLines={3}>{item.description}</Text>
        <Text style={{color: 'white'}}>
          {formatPrice(item.price)}
        </Text>
      </View>
      <View style={styles2.containerRow}>
        <Pressable style={styles2.btnPrimary} onPress={handlePress}>
          <Text style={styles2.textBtn}>Ver más</Text>
        </Pressable>
        <Pressable style={styles2.btnFourth} onPress={
          ()=>{
            if(!isUserLogged){
              navigation.navigate('Login');
              return;
            }else{
              if (isInCart) {
                dispatch({type: 'INCREMENT_ITEM', payload: item.id });
              } else {
                dispatch({type: 'ADD_TO_CART', payload: item});
              }
            }
            
          }
        }>
          <Icon name="cart" size={25} color={isInCart ? "black": "white"} />
        </Pressable>
      </View>
    </View>
  );
};

export default ProductComponent;