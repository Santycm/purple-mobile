import React from 'react';
import {View} from 'react-native';
import {Navbar} from '../components/Navbar.js';
import {Slider} from '../components/Slider.js';
import {InitialCategories} from '../components/InitialCategories.js';

export const Home = () => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'black',
      }}>
      <Navbar />
      <Slider />
      <InitialCategories />
    </View>
  );
};
