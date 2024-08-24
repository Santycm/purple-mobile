import React from 'react';
import {View, ScrollView, Text, Pressable} from 'react-native';
import {Slider} from '../components/Slider.js';
import {InitialCategories} from '../components/InitialCategories.js';
import {ProductComponent} from '../components/ProductComponent.js';
import {styles2} from '../styles/AppStyles2.js';
import {products} from '../assets/dbProducts.js';

export const Offerts = ({navigation}) => {
  return (
    <View style={styles2.homeContainer}>
      <ScrollView>
        <Slider />
        <InitialCategories />
        <View style={styles2.sectionContainer}>
          <Text style={[styles2.textTitle, styles2.textTitleCenter]}>
            ¡En Oferta HOY!
          </Text>
          <View style={styles2.sectionBg}>
            {products
              .filter(item => item.offer.isOffer)
              .map((item, index) => (
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
          <Pressable
            style={styles2.btnPrimary}
            onPress={() => {
              navigation.navigate('Help');
            }}>
            <Text style={styles2.textTitle}>Ayuda y soporte PQRD</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
