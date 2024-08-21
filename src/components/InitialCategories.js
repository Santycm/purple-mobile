import React from 'react';
import {View, Image, FlatList, TouchableOpacity, Text} from 'react-native';
import {styles2} from '../styles/AppStyles2.js';

const categories = [
  {
    name: 'Accesorios para vehiculos',
    img: require('../assets/categoryIcons/screwdriver.png'),
  },
  {
    name: 'Hogar y muebles',
    img: require('../assets/categoryIcons/house.png'),
  },
  {
    name: 'Juegos y juguetes',
    img: require('../assets/categoryIcons/storage-box.png'),
  },
  {
    name: 'Electrodomésticos',
    img: require('../assets/categoryIcons/electric-appliance.png'),
  },
  {
    name: 'Celulares y accesorios',
    img: require('../assets/categoryIcons/call.png'),
  },
  {
    name: 'Computación',
    img: require('../assets/categoryIcons/computer.png'),
  },
];

export const InitialCategories = () => {
  return (
    <FlatList
      data={categories}
      renderItem={({item}) => (
        <TouchableOpacity style={styles2.categoryItem}>
          <View style={styles2.btnCategoryImg}>
            <Image source={item.img} style={styles2.categoryImg} />
          </View>
          <Text style={[styles2.textTitle, styles2.textTitleCenter]}>{item.name}</Text>
        </TouchableOpacity>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
