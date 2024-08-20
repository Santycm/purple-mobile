import React from 'react';
import {View, Image, FlatList, TouchableOpacity, Text} from 'react-native';
import {styles2} from '../styles/AppStyles2.js';
const categories = [
  {
    name: 'Electrónicos',
    img: require('../assets/provIcons/alarm-outline.svg'),
  },
  {
    name: 'Ferretería',
    img: require('../assets/provIcons/alarm-outline.svg'),
  },
  {
    name: 'Ferretería',
    img: require('../assets/provIcons/alarm-outline.svg'),
  },
  {
    name: 'Ferretería',
    img: require('../assets/provIcons/alarm-outline.svg'),
  },
  {
    name: 'Ferretería',
    img: require('../assets/provIcons/alarm-outline.svg'),
  },
  {
    name: 'Ferretería',
    img: require('../assets/provIcons/alarm-outline.svg'),
  },
  {
    name: 'Ferretería',
    img: require('../assets/provIcons/alarm-outline.svg'),
  },
  {
    name: 'Ferretería',
    img: require('../assets/provIcons/alarm-outline.svg'),
  },
];

export const InitialCategories = () => {
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <TouchableOpacity style={styles2.categoryItem}>
          <View style={styles2.btnCategoryImg}>
            <Image source={item.img} />
          </View>
          <Text style={{color: 'white'}}>{item.name}</Text>
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
