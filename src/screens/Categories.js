import React from 'react';
import {View, Text} from 'react-native';
import {CategoriesList} from '../components/CategoriesList';
import {styles2} from '../styles/AppStyles2';

export const Categories = () => {
  return (
    <View style={styles2.categoriesContainerPage}>
      <CategoriesList />
    </View>
  );
};
