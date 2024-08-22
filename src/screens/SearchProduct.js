import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import {ScrollView} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import {products} from '../assets/dbProducts';
import {ProductComponent} from '../components/ProductComponent.js';

export const SearchProduct = ({route}) => {
  const {searchTerm} = route.params?.searchTerm || '';
  const [filteredProducts, setFilteredProducts] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const normalizedSearchTerm =
        typeof searchTerm === 'string' ? searchTerm.toLowerCase() : '';
      const results = products.filter(
        product =>
          typeof product.description === 'string' &&
          product.description.toLowerCase().includes(normalizedSearchTerm),
      );
      setFilteredProducts(results);
    }, [searchTerm]),
  );

  return (
    <ScrollView style={styles2.bgScreen}>
      <View style={styles2.searchContainer}>
        <Text style={styles2.textSearchResult}>Resultados de búsqueda</Text>
        <View style={[styles2.containerRow, styles2.containerRowWrap]}>
          {filteredProducts.map((item, index) => (
            <View key={index}>
              <ProductComponent {...item} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};
