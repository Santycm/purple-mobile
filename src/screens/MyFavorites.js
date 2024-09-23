import React, {useContext} from 'react';
import { View, Text, Image, FlatList, Pressable } from 'react-native';
import AppStyles from '../styles/AppStyles.js';
import { UserContext } from '../context/UserContext.js';
import { ProductFavComponent } from '../components/ProductFavComponent.js';

export const MyFavorites = () => {
  const [userState, userDispatch] = useContext(UserContext);

  const renderProductComponent = ({item}) => (
    <ProductFavComponent
      item={item}
      state={userState}
      dispatch={userDispatch}
    />
  );
  
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
        <Text style={AppStyles.headerTitle}>Mis Favoritos</Text>
      </View>
      <FlatList
        data={userState.user.favoriteProducts}
        renderItem={renderProductComponent}
        contentContainerStyle={AppStyles.listContainer}
      />
    </View>
  );
};
