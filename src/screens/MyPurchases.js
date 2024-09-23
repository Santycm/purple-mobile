import React, {useContext} from 'react';
import {View, Text, Image, FlatList, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppStyles from '../styles/AppStyles.js';
import {UserContext} from '../context/UserContext.js';
import {ProductPurchaseComponent} from '../components/ProductPurchaseComponent.js';


export const MyPurchases = ({navigation}) => {
  const [userState, userDispatch] = useContext(UserContext);

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
      {userState.user.purchases.length === 0 && (
        <Text style={AppStyles.noData}>No hay compras realizadas</Text>
      )}
      {userState.user.purchases.length > 0 && (
        <FlatList
          data={userState.user.purchases}
          renderItem={ProductPurchaseComponent}
          contentContainerStyle={AppStyles.listContainer}
        />
      )}
    </View>
  );
};
