import React, {useContext} from 'react';
import {View, ScrollView, Text, Pressable} from 'react-native';
import {Slider} from '../components/Slider.js';
import {InitialCategories} from '../components/InitialCategories.js';
import ProductComponent from '../components/ProductComponent.js';
import {styles2} from '../styles/AppStyles2.js';
import {products} from '../assets/dbProducts.js';
import {FlatList} from 'react-native-gesture-handler';

import {CartContext} from '../context/CartContext.js';

export const Home = ({navigation}) => {
  const [state, dispatch] = useContext(CartContext);

  const renderProductComponent = ({item}) => <ProductComponent item={item} state={state} dispatch={dispatch} />;

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
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            style={styles2.sectionBg}
            data={products.filter(product => product.offer.isOffer)}
            renderItem={renderProductComponent}
          />
        </View>
        <View style={styles2.sectionContainer}>
          <Text style={[styles2.textTitle, styles2.textTitleCenter]}>
            Ultimos Agregados
          </Text>
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            style={styles2.sectionBg}
            data={products}
            renderItem={renderProductComponent}
          />
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
