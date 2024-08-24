import React from 'react'
import { Text, View, Pressable, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles2 } from '../styles/AppStyles2'
import {users} from '../assets/dbUsers.js'

export const MyProfile = ({route, navigation}) => {
  const {user} = route.params;

  let userFound = users.find(item => {
    return (
      item.userName === user
    )
  })

  return (
    <View style={styles2.userScreen}>
      <View style={styles2.sectionContainer}>
        <Image
          source={require('../assets/userProfile.webp')}
          style={styles2.iconApp}></Image>
        <View>
          <Text style={styles2.textPrincipal}>¡Hola!</Text>
          <Text style={styles2.nameUser}>{userFound.name}</Text>
          <Text style={styles2.nameUser}>{userFound.lastName}</Text>
          <Text style={styles2.birthDate}>{userFound.birthDate}</Text>
        </View>
        <View style={styles2.containerRow}>
          <Pressable
            style={styles2.btnFourth}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="home" size={30} color="white" />
          </Pressable>
          <Pressable style={styles2.btnFourth}>
            <Icon name="basket" size={30} color="white" />
          </Pressable>

          <Pressable
            style={styles2.btnFourth}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="log-out" size={30} color="white" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
