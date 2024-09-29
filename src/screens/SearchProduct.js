import React, {useState, useContext} from 'react';
import {Text, View} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import {ScrollView} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';
import {UserContext} from '../context/UserContext';
import ProductComponent from '../components/ProductComponent';
import {FlatList} from 'react-native-gesture-handler';

export const SearchProduct = () => {
  const [userState, userDispatch] = useContext(UserContext);

  const [filteredProducts, setFilteredProducts] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const normalizedSearchTerm =
        typeof userState.search === 'string'
          ? userState.search.toLowerCase()
          : '';
      const results = userState.dbMarket
        .flatMap(user => user.products)
        .filter(product =>
          product.name.toLowerCase().includes(normalizedSearchTerm),
        );
      setFilteredProducts(results);
    }, [userState.search]),
  );

  const renderProductComponent = ({item}) => (
    <ProductComponent item={item} state={userState} dispatch={userDispatch} />
  );

  return (
    <ScrollView style={styles2.bgScreen}>
      <View style={styles2.searchContainer}>
        <Text style={styles2.textSearchResult}>Resultados de búsqueda</Text>
        {filteredProducts.length > 0 && (
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            style={styles2.sectionBg}
            data={filteredProducts}
            renderItem={renderProductComponent}
          />
        )}
      </View>
    </ScrollView>
  );
};
