import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles2 } from '../styles/AppStyles2'

export const MyProfile = ({navigation}) => {
  return (
    <View style={styles2.userScreen}>
      <View style={styles2.sectionContainer}>
        <Image
          source={require('../assets/userProfile.webp')}
          style={styles2.iconApp}></Image>
        <View>
          <Text style={styles2.textPrincipal}>¡Hola!</Text>
          <Text style={styles2.nameUser}>Santiago </Text>
          <Text style={styles2.nameUser}>Castaño Moreno</Text>
          <Text style={styles2.birthDate}>12/02/2001</Text>
        </View>
        <View style={styles2.containerRow}>
          <TouchableOpacity
            style={styles2.btnFourth}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="home" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles2.btnFourth}>
            <Icon name="basket" size={30} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles2.btnFourth}
            onPress={() => {
              navigation.navigate('Home');
            }}>
            <Icon name="log-out" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
