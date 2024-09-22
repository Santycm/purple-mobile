import React, {useContext} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import ProductComponent from '../components/ProductComponent.js';

import { dbMarket } from '../assets/dbMarket.js';
import {CartContext} from '../context/CartContext.js';
import {FlatList} from 'react-native-gesture-handler';

const CategoryScreen = ({route, navigation}) => {
  const {category} = route.params;

  const [state, dispatch] = useContext(CartContext);

  const renderProductComponent = ({item}) => (
    <ProductComponent item={item} state={state} dispatch={dispatch} />
  );

  return (
    <View style={styles2.categoryContainerPage}>
      <ScrollView>
        <View style={styles2.categoryItemPage}>
          <View style={styles2.btnCategoryImg}>
            <Image source={category.img} style={styles2.categoryImg} />
          </View>
          <Text style={[styles2.textTitle, styles2.textTitleCenter]}>
            {category.name}
          </Text>
        </View>
        <View style={styles2.containerCenter}>
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            style={styles2.sectionBg}
            data={dbMarket.map((user) => user.products.filter((product) => product.category === category.key)).flat()}
            renderItem={renderProductComponent}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
