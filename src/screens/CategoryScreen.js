import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import { products } from '../assets/dbProducts';
import { ProductComponent } from '../components/ProductComponent.js';

export const CategoryScreen = ({route, navigation}) => {
  const {category} = route.params;
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
          <Text style={styles2.textTitle}>Productos</Text>
          <View style={styles2.containerColumn2}>
            {products
              .filter(item => item.category===category.key)
              .map((item, index) => (
                <View key={index}>
                  <ProductComponent {...item} />
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
