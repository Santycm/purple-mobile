import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Modal } from 'react-native';

export default function DeliveryModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Selecciona la forma de entrega</Text>
          
          <Text style={styles.sectionTitle}>Entrega a domicilio</Text>
          <Text style={styles.addressText}>Dirección: Calle X #123, Ciudad</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.buttonText}>Editar o elegir otro domicilio</Text>
          </TouchableOpacity>

          <Text style={styles.sectionTitle}>Retirar en punto de entrega</Text>
          <Text style={styles.pickupDetails}>Dirección: Punto de entrega X</Text>
          <Text style={styles.pickupDetails}>Horario: 9:00 AM - 6:00 PM</Text>
          <TouchableOpacity style={styles.mapButton}>
            <Text style={styles.buttonText}>Ver punto en el mapa o elegir otro</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  addressText: {
    fontSize: 16,
    marginBottom: 10,
  },
  editButton: {
    backgroundColor: '#B388FF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  mapButton: {
    backgroundColor: '#B388FF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  closeButton: {
    backgroundColor: '#6A0DAD',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  pickupDetails: {
    fontSize: 16,
    marginBottom: 5,
  },
});
