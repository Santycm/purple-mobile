import React from 'react';
import {View} from 'react-native';
import {Navbar} from '../components/Navbar.js';
import {Slider} from '../components/Slider.js';
import {InitialCategories} from '../components/InitialCategories.js';
import {ProductComponent} from '../components/ProductComponent.js';

const sale = [
  {
    img: require('../assets/provImgProduct/product1.webp'),
    name: 'Producto 1',
    price: 10000,
  },
  {
    img: require('../assets/provImgProduct/product1.webp'),
    name: 'Producto 2',
    price: 10000,
  },
];

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
      <View>
        {sale.map((product, index) => (
          <ProductComponent
            key={index}
            img={product.img}
            name={product.name}
            price={product.price}
          />
        ))}
      </View>
    </View>
  );
};
