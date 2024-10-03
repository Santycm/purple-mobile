import {View, Text, Pressable} from 'react-native';
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import {styles2} from '../styles/AppStyles2';
import AppStyles from '../styles/AppStyles';

import {UserContext} from '../context/UserContext';
import {ProductClientComponent} from '../components/ProductClientComponent';

const renderProductComponent = ({item}) => {
  return <ProductClientComponent item={item} />;
};

export const ClientPurchases = () => {
  const [userState, userDispatch] = useContext(UserContext);
  return (
    <View style={styles2.bgScreen2}>
      <Pressable
        style={styles2.btnBack}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="arrow-left" size={30} color="white" />
      </Pressable>
      <ScrollView>
        <View style={AppStyles.productContainer}>
          <Text style={styles2.titleTextPageProduct}>Compras de clientes</Text>
          {userState.user.clientPurchases.length === 0 && (
            <Text style={styles2.titleTextPageProduct}>
              No se han realizado compras
            </Text>
          )}
          {userState.user.clientPurchases.length > 0 && (
            <View>
              <Text style={styles2.titleTextPageProduct}>
                Compras realizadas
              </Text>
              <FlatList
                scrollEnabled={false}
                data={userState.user.clientPurchases}
                renderItem={renderProductComponent}
              />
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
