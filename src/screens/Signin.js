import React from 'react'
import { View, Text, Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles2 } from '../styles/AppStyles2';

export const Sigin = ({navigation}) => {
  return (
    <View style={styles2.bgScreen}>
      <TouchableOpacity
        style={styles2.btnBack}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="arrow-back" size={40} color="white" />
        <Text style={styles2.textTitle}>Regresar</Text>
      </TouchableOpacity>

      <View style={styles2.sectionContainer}>
        
      </View>
    </View>
  );
}
