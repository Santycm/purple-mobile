import React from 'react';
import {View, Image, FlatList, TouchableOpacity, Text} from 'react-native';
import {styles2} from '../styles/AppStyles2.js';
import {categories} from '../assets/dbCategories.js';
import {useNavigation} from '@react-navigation/native';

export const CategoriesList = () => {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles2.categoryItem}
            onPress={() => {
              navigation.navigate('CategoryScreen', {category: item});
            }}>
            <View style={styles2.btnCategoryImg}>
              <Image source={item.img} style={styles2.categoryImg} />
            </View>
            <Text style={[styles2.textTitle, styles2.textTitleCenter]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
