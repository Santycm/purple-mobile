import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Modal,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles2} from '../styles/AppStyles2.js';
import {useFocusEffect, useNavigationState} from '@react-navigation/native';

export const Navbar = ({navigation}) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const routeName = useNavigationState(state => state.routes[state.index].name);

  const searchInputRef = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      if (searchInputRef.current && routeName === 'SearchProduct') {
        searchInputRef.current.focus();
      }
    }, []),
  );

  const toggleMenu = () => {
    if (menuVisible) {
      setMenuVisible(false);
    } else {
      setMenuVisible(true);
    }
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        setMenuVisible(false);
      };
    }, []),
  );

  return (
    <View style={styles2.navbar}>
      <TouchableOpacity onPress={toggleMenu}>
        <Icon name="menu" size={25} color="white" />
      </TouchableOpacity>

      <TextInput
        style={styles2.navbarSearch}
        placeholder="Buscar en Purple Store"
        ref={searchInputRef}
        onFocus={() => {
          if (routeName !== 'SearchProduct') {
            navigation.navigate('SearchProduct');
          }
          navigation.navigate('SearchProduct');
        }}
        value={searchTerm}
        onChangeText={text => {
          setSearchTerm(text);
          navigation.navigate('SearchProduct', {searchTerm: text});
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Icon name="cart" size={25} color="white" />
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={menuVisible}
        animationType="none"
        onRequestClose={toggleMenu}>
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles2.sideBar}>
            <View style={styles2.sideBarUser}>
              <View style={styles2.sideBarUserContainer}>
                <View style={styles2.iconProfile}>
                  <Icon name="person" size={40} color="black" />
                </View>
                <View style={styles2.sideBarUserText}>
                  <Text style={styles2.textTitle}>Ingresa a tu cuenta</Text>
                  <Text>
                    Podrás ver detalles de envío y personalizar tu experiencia
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles2.btnPrimary}
                onPress={() => {
                  toggleMenu();
                  navigation.navigate('Login');
                }}>
                <Text style={styles2.textTitle}>INGRESAR</Text>
              </TouchableOpacity>
            </View>
            <View style={styles2.sideBarOptions}>
              <TouchableOpacity
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Icon name="home" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Inicio</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('SearchProduct');
                }}>
                <Icon name="search" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Buscar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('MyPurchases');
                }}>
                <Icon name="basket" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Mis compras</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('MyFavorites');
                }}>
                <Icon name="heart" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Favoritos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles2.sideBarOption}
               onPress={() => {
                navigation.navigate('Offerts');
              }}>
                <Icon name="pricetags" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Ofertas</Text> 
              </TouchableOpacity>
              <TouchableOpacity
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('MyProfile');
                }}>
                <Icon name="person" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Mi cuenta</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('Categories');
                }}>
                <Icon name="list" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Categorías</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
