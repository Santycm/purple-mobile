import React, {useState, useCallback, useRef, useContext} from 'react';
import {
  View,
  TextInput,
  Pressable,
  TouchableWithoutFeedback,
  Modal,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles2} from '../styles/AppStyles2.js';
import {useFocusEffect, useNavigationState} from '@react-navigation/native';
import {UserContext} from '../context/UserContext.js';

export const Navbar = ({navigation}) => {
  const [userState, userDispatch] = useContext(UserContext);
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

  const handleCartPress = () => {
    if (userState.user) {
      navigation.navigate('Cart');
    } else {
      navigation.navigate('Login');
    }
  };

  const totalItemsInCart = userState.cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <View style={styles2.navbar}>
      <Pressable onPress={toggleMenu} style={styles2.buttonNav}>
        <Icon name="menu" size={25} color="white" />
      </Pressable>

      <View style={styles2.searchContainer}>
        <TextInput
          style={styles2.navbarSearch}
          placeholder="Buscar en Purple Store"
          ref={searchInputRef}
          onFocus={() => {
            if (routeName === 'Home') return;
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
      </View>

      <Pressable onPress={handleCartPress} style={styles2.buttonNav}>
        <Icon name="cart" size={25} color="white" />
        <View style={styles2.badge}>
          <Text style={styles2.badgeText}>
            {userState.user ? totalItemsInCart : 0}
          </Text>
        </View>
      </Pressable>

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
                  <Text style={styles2.textTitle}>
                    {userState.user
                      ? `${userState.user.name} ${userState.user.lastName}`
                      : '¡Hola! Inicia sesión'}
                  </Text>
                  <Text>
                    Podrás ver detalles de envío y personalizar tu experiencia
                  </Text>
                </View>
              </View>
              {userState.user ? (
                <Pressable
                  style={styles2.btnPrimary}
                  onPress={() => {
                    toggleMenu();
                    navigation.navigate('MyProfile');
                  }}>
                  <Text style={styles2.textTitle}>MI PERFIL</Text>
                </Pressable>
              ) : (
                <Pressable
                  style={styles2.btnPrimary}
                  onPress={() => {
                    toggleMenu();
                    navigation.navigate('Login');
                  }}>
                  <Text style={styles2.textTitle}>INICIAR CUENTA</Text>
                </Pressable>
              )}
            </View>
            <View style={styles2.sideBarOptions}>
              <Pressable
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('Home');
                }}>
                <Icon name="home" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Inicio</Text>
              </Pressable>
              <Pressable
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('SearchProduct');
                }}>
                <Icon name="search" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Buscar</Text>
              </Pressable>
              {userState.user && (
                <Pressable
                  style={styles2.sideBarOption}
                  onPress={() => {
                    navigation.navigate('MyPurchases');
                  }}>
                  <Icon name="basket" size={30} color="white"></Icon>
                  <Text style={styles2.textTitle}>Mis compras</Text>
                </Pressable>
              )}
              {!userState.user && (
                <Pressable
                  style={styles2.sideBarOption}
                  onPress={() => {
                    navigation.navigate('MyProducts');
                  }}>
                  <Icon name="server" size={30} color="white"></Icon>
                  <Text style={styles2.textTitle}>Mis productos</Text>
                </Pressable>
              )}
              {userState.user && (
                <Pressable
                  style={styles2.sideBarOption}
                  onPress={() => {
                    navigation.navigate('MyFavorites');
                  }}>
                  <Icon name="heart" size={30} color="white"></Icon>
                  <Text style={styles2.textTitle}>Mis Favoritos</Text>
                </Pressable>
              )}
              <Pressable
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('Offers');
                }}>
                <Icon name="pricetags" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Ofertas</Text>
              </Pressable>
              <Pressable
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('Categories');
                }}>
                <Icon name="list" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Categorías</Text>
              </Pressable>
              <Pressable
                style={styles2.sideBarOption}
                onPress={() => {
                  navigation.navigate('Help');
                }}>
                <Icon name="headset" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Ayuda y PQRS</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};
