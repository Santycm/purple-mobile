import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppStyles from './styles/AppStyles'; 

export default function DeliveryModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={AppStyles.modalContainerDelivery}>
        <TouchableOpacity style={AppStyles.backButtonModal} onPress={onClose}>
          <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
        </TouchableOpacity>

        <View style={AppStyles.modalContent}>
          <Text style={AppStyles.modalTitle}>Selecciona la forma de entrega</Text>

          <View style={AppStyles.selectionContainer}>
            <View style={AppStyles.drawer}>
              <View style={AppStyles.drawerContent}>
                <Text style={AppStyles.sectionTitle}>Entrega a domicilio</Text>
                <Text style={AppStyles.addressText}>Dirección: Calle X #123, Ciudad</Text>
              </View>
              <TouchableOpacity style={AppStyles.advanceButton} onPress={() => { }}>
                <Icon name="arrow-forward-circle" size={30} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity style={AppStyles.editButton}>
                <Text style={AppStyles.buttonText}>Editar o elegir otro domicilio</Text>
              </TouchableOpacity>
            </View>

            <View style={AppStyles.drawer}>
              <View style={AppStyles.drawerContent}>
                <Text style={AppStyles.sectionTitle}>Retirar en punto de entrega</Text>
                <Text style={AppStyles.pickupDetails}>Dirección: Punto de entrega X</Text>
                <Text style={AppStyles.pickupDetails}>Horario: 9:00 AM - 6:00 PM</Text>
              </View>
              <TouchableOpacity style={AppStyles.advanceButton} onPress={() => { }}>
                <Icon name="arrow-forward-circle" size={30} color="#FFFFFF" />
              </TouchableOpacity>
              <TouchableOpacity style={AppStyles.mapButton}>
                <Text style={AppStyles.buttonText}>Ver punto en el mapa o elegir otro</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={AppStyles.closeButton} onPress={onClose}>
            <Text style={AppStyles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
