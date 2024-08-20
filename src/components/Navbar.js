import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles2} from '../styles/AppStyles2.js';

export const Navbar = () => {
  return (
    <View style={styles2.navbar}>
      <TouchableOpacity>
        <Icon name="menu-outline" size={30} color="black" />
      </TouchableOpacity>

      <TextInput
        style={styles2.navbarSearch}
        placeholder="Buscar en Purple Store"
      />
      
      <TouchableOpacity>
        <Icon name="menu-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};
