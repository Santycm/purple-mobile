import React, {useContext} from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppStyles from '../styles/AppStyles.js';
import {UserContext} from '../context/UserContext.js';
import {ProductPurchaseComponent} from '../components/ProductPurchaseComponent.js';

export const MyPurchases = ({navigation}) => {
  const [userState, userDispatch] = useContext(UserContext);

  const userPurchases = userState.dbMarket
    .filter(item => item.userName === userState.user.userName)
    .flatMap(item => item.purchases);

  return (
    <View style={AppStyles.container}>
      <View style={AppStyles.header}>
        <Pressable
          style={AppStyles.backButton}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
        </Pressable>
        <Text style={AppStyles.headerTitle}>Mis Compras</Text>
      </View>
      {userPurchases.length === 0 && (
        <Text style={AppStyles.noData}>No hay compras realizadas</Text>
      )}
      {userPurchases.length > 0 && (
        <FlatList
          data={userPurchases}
          renderItem={ProductPurchaseComponent}
          contentContainerStyle={AppStyles.listContainer}
        />
      )}
    </View>
  );
};
