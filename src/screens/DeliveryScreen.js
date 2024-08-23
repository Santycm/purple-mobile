import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppStyles from '../styles/AppStyles.js';

export const DeliveryScreen = ({ navigation, route }) => {
  const { cart } = route.params || {}; 

  const handleNext = () => {
    if (cart) {
      navigation.navigate('Arrival', { cart });
    } else {
      
      console.warn("Cart is undefined");
    }
  };

  return (
    <View style={AppStyles.modalContainerDelivery}>
      <Pressable style={AppStyles.backButtonModal}
        onPress={() => {
          navigation.navigate('Cart');
        }}>
        <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
      </Pressable>

      <View style={AppStyles.modalContent}>
        <Text style={AppStyles.modalTitle}>Selecciona la forma de entrega</Text>

        <View style={AppStyles.selectionContainer}>
          <View style={AppStyles.drawer}>
            <View style={AppStyles.drawerContent}>
              <Text style={AppStyles.sectionTitle}>Entrega a domicilio</Text>
              <Text style={AppStyles.addressText}>Dirección: Calle X #123, Ciudad</Text>
            </View>
            <Pressable style={AppStyles.advanceButton}
              onPress={handleNext}>
              <Icon name="arrow-forward-circle" size={30} color="#FFFFFF" />
            </Pressable>
            <Pressable style={AppStyles.editButton}>
              <Text style={AppStyles.buttonText}>Editar o elegir otro domicilio</Text>
            </Pressable>
          </View>

          <View style={AppStyles.drawer}>
            <View style={AppStyles.drawerContent}>
              <Text style={AppStyles.sectionTitle}>Retirar en punto de entrega</Text>
              <Text style={AppStyles.pickupDetails}>Dirección: Punto de entrega X</Text>
              <Text style={AppStyles.pickupDetails}>Horario: 9:00 AM - 6:00 PM</Text>
            </View>
            <Pressable style={AppStyles.advanceButton}
            onPress={handleNext}>
              <Icon name="arrow-forward-circle" size={30} color="#FFFFFF" />
            </Pressable>
            <Pressable style={AppStyles.mapButton}>
              <Text style={AppStyles.buttonText}>Ver punto en el mapa o elegir otro</Text>
            </Pressable>
          </View>
        </View>

        <Pressable style={AppStyles.closeButton}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Text style={AppStyles.buttonText}>Cerrar</Text>
        </Pressable>
      </View>
    </View>
  );
};
