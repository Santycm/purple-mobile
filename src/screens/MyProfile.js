import React, {useContext} from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles2} from '../styles/AppStyles2';

import {UserContext} from '../context/UserContext.js';

export const MyProfile = ({navigation}) => {
  const [state, dispatch] = useContext(UserContext);

  const logOut = () => {
    dispatch({type: 'LOGOUT'});
    navigation.navigate('Home');
  };

  return (
    <View style={styles2.userScreen}>
      <View style={styles2.sectionContainer}>
        <Image
          source={require('../assets/userProfile.webp')}
          style={styles2.iconApp}></Image>
        <View>
          <Text style={styles2.textPrincipal}>¡Hola!</Text>
          <Text style={styles2.nameUser}>
            {state.user ? state.user.name : ''}
          </Text>
          <Text style={styles2.nameUser}>
            {state.user ? state.user.lastName : ''}
          </Text>
          <Text style={styles2.birthDate}>
            {state.user ? state.user.birthDate : ''}
          </Text>
        </View>
        <View style={styles2.containerRow}>
          <Pressable
            style={styles2.btnFourth}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="home" size={30} color="white" />
          </Pressable>
          <Pressable
            style={styles2.btnFourth}
            onPress={() => {
              navigation.navigate('MyPurchases');
            }}>
            <Icon name="basket" size={30} color="white" />
          </Pressable>
          <Pressable style={styles2.btnFourth} onPress={logOut}>
            <Icon name="log-out" size={30} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
};
