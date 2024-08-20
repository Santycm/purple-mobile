import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import {styles2} from '../styles/AppStyles2.js';
import LinearGradient from 'react-native-linear-gradient';

const images = [
  require('../assets/Slider/img1.jpg'),
  require('../assets/Slider/img1.jpg'),
];

export const Slider = () => {
  return (
    <LinearGradient colors={['#6A0DAD', '#000000']}>
      <FlatList data={images} renderItem={({item})=>(
        <View style={styles2.slider}>
          <Image source={item} style={styles2.sliderImg} />
        </View>
      )}
      horizontal pagingEnabled keyExtractor={(item, index)=>index.toString()}/>
      
      <Text style={styles2.initialProm}>
        Envío gratis en millones de productos desde $60.000
      </Text>
    </LinearGradient>
  );
};
