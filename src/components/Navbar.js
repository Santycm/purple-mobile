import React, {useState, useRef, useEffect} from 'react';
import {View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Modal, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles2} from '../styles/AppStyles2.js';

export const Navbar = ({navigation}) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    if (menuVisible) {
      setMenuVisible(false);
    } else {
      setMenuVisible(true);
    }
  };

  return (
    <View style={styles2.navbar}>
      <TouchableOpacity onPress={toggleMenu}>
        <Icon name="arrow-undo-circle-outline" size={25} color="white" />
      </TouchableOpacity>

      <TextInput
        style={styles2.navbarSearch}
        placeholder="Buscar en Purple Store"
      />

      <TouchableOpacity>
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
              <TouchableOpacity style={styles2.btnPrimary} onPress={()=>{
                toggleMenu();
                navigation.navigate('Login');
              }}>
                <Text style={styles2.textTitle}>INGRESAR</Text>
              </TouchableOpacity>
            </View>
            <View style={styles2.sideBarOptions}>
              <TouchableOpacity style={styles2.sideBarOption}>
                <Icon name="home" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Inicio</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles2.sideBarOption}>
                <Icon name="search" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Buscar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles2.sideBarOption}>
                <Icon name="basket" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Mis compras</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles2.sideBarOption}>
                <Icon name="pricetags" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Ofertas</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles2.sideBarOption}>
                <Icon name="person" size={30} color="white"></Icon>
                <Text style={styles2.textTitle}>Mi cuenta</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles2.sideBarOption}>
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
