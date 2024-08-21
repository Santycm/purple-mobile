import React from 'react';
import {View, SafeAreaView, FlatList, ScrollView, Text} from 'react-native';
import {Navbar} from '../components/Navbar.js';
import {Slider} from '../components/Slider.js';
import {InitialCategories} from '../components/InitialCategories.js';
import {ProductComponent} from '../components/ProductComponent.js';
import {styles2} from '../styles/AppStyles2.js';

export const Home = () => {
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
    {
      img: require('../assets/provImgProduct/product1.webp'),
      name: 'Producto 2',
      price: 10000,
    },
    {
      img: require('../assets/provImgProduct/product1.webp'),
      name: 'Producto 2',
      price: 10000,
    },
    {
      img: require('../assets/provImgProduct/product1.webp'),
      name: 'Producto 2',
      price: 10000,
    },
  ];

  return (
    <SafeAreaView style={styles2.homeContainer}>
      <ScrollView>
        <Slider />
        <InitialCategories />
        <View style={styles2.sectionContainer}>
          <Text style={[styles2.textTitle, styles2.textTitleCenter]}>
            ¡En Oferta HOY!
          </Text>
          <View style={styles2.sectionBg}>
            {sale.map((item, index) => (
              <View key={index}>
                <ProductComponent {...item} />
              </View>
            ))}
          </View>
        </View>
        <View style={styles2.sectionContainer}>
          <Text style={[styles2.textTitle, styles2.textTitleCenter]}>
            ¡En Oferta HOY!
          </Text>
          <View style={styles2.sectionBg}>
            {sale.map((item, index) => (
              <View key={index}>
                <ProductComponent {...item} />
              </View>
            ))}
          </View>
        </View>
        <View style={styles2.sectionContainer}>
          <Text style={[styles2.textTitle, styles2.textTitleCenter]}>
            ¿Necesitas ayuda?
          </Text>
          <View style={styles2.sectionBg}>
            <Text style={styles2.textTitle}>Contactanos</Text>
            <Text style={styles2.textTitle}>Preguntas frecuentes</Text>
            <Text style={styles2.textTitle}>Términos y condiciones</Text>
            <Text style={styles2.textTitle}>Políticas de privacidad</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
