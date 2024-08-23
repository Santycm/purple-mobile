import React from 'react';
import {View, Image} from 'react-native';
import {styles2} from '../styles/AppStyles2.js';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';

const images = [
  require('../assets/Slider/img1.jpg'),
  require('../assets/Slider/img1.jpg'),
];

export const Slider = () => {
  return (
    <View>
      <LinearGradient
        colors={['#6A0DAD', '#000000']}
        style={styles2.sliderContainer}>
        <Swiper autoplay autoplayTimeout={4} showsPagination={false}>
          {images.map((item, index) => (
            <View style={styles2.slider} key={index}>
              <Image source={item} style={styles2.sliderImg} />
            </View>
          ))}
        </Swiper>
      </LinearGradient>
    </View>
  );
};
