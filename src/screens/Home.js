import React from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Slider} from '../components/Slider.js';
import {InitialCategories} from '../components/InitialCategories.js';
import {ProductComponent} from '../components/ProductComponent.js';
import {styles2} from '../styles/AppStyles2.js';
import {products} from '../assets/dbProducts.js';

export const Home = () => {
  return (
    <View style={styles2.homeContainer}>
      <ScrollView>
        <Slider />
        <Text style={styles2.initialProm}>
          Envío gratis en millones de productos desde $60.000
        </Text>
        <InitialCategories />
        <View style={styles2.sectionContainer}>
          <Text style={[styles2.textTitle, styles2.textTitleCenter]}>
            ¡En Oferta HOY!
          </Text>
          <View style={styles2.sectionBg}>
            {products
              .filter(item => item.offer)
              .map((item, index) => (
                <View key={index}>
                  <ProductComponent {...item} />
                </View>
              ))}
          </View>
        </View>
        <View style={styles2.sectionContainer}>
          <Text style={[styles2.textTitle, styles2.textTitleCenter]}>
            Ultimos Agregados
          </Text>
          <View style={styles2.sectionBg}>
            {products.map((item, index) => (
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
          <TouchableOpacity style={styles2.btnPrimary}>
            <Text style={styles2.textTitle}>Ayuda y soporte PQRD</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
