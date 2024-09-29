import {View, Text, Pressable} from 'react-native';
import React, {useContext} from 'react';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/FontAwesome';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {MyProductComponent} from '../components/MyProductComponent';
import {UserContext} from '../context/UserContext';

import AppStyles from '../styles/AppStyles';

export const MyProducts = ({navigation}) => {
  const [userState, userDispatch] = useContext(UserContext);

  const myProducts = userState.dbMarket.find(
    user => user.userName === userState.user.userName,
  ).products;
  

  const renderProductComponent = ({item}) => {
    return (
      <MyProductComponent
        item={item}
        /*state={userState}
        dispatch={userDispatch}*/
      />
    );
  };

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
          <Text style={styles2.titleTextPageProduct}>Mis productos</Text>
          <Pressable
            style={AppStyles.MyProductBtnAdd}
            onPress={() => {
              navigation.navigate('ProductForm');
            }}>
            <Text>Agregar producto</Text>
            <Icon name="arrow-right" size={15} color="white" />
          </Pressable>
          <FlatList
            scrollEnabled={false}
            data={myProducts}
            renderItem={({item}) => <MyProductComponent item={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};
