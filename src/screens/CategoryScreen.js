import React, {useContext} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import ProductComponent from '../components/ProductComponent.js';

import {UserContext} from '../context/UserContext.js';
import {FlatList} from 'react-native-gesture-handler';

const CategoryScreen = ({route, navigation}) => {
  const [userState, userDispatch] = useContext(UserContext);
  const {category} = route.params;

  const renderProductComponent = ({item}) => (
    <ProductComponent item={item} state={userState} dispatch={userDispatch} />
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
            data={userState.dbMarket
              .map(user =>
                user.products.filter(
                  product =>
                    product.category === category.key &&
                    product.status === 'Disponible',
                ),
              )
              .flat()}
            renderItem={renderProductComponent}
            ListEmptyComponent={
              <Text>No hay productos disponibles en esta categoría</Text>
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CategoryScreen;
