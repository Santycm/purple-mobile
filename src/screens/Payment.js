import React from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import AppStyles from '../styles/AppStyles.js';
import Icon from 'react-native-vector-icons/Ionicons';

export const Payment = ({ navigation }) => {
  return (
    
      <View style={AppStyles.modalContainerPayment}>
      <TouchableOpacity style={AppStyles.backButtonPayment}
       onPress={() => {
        navigation.navigate('Arrival');
      }}>
            <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
          </TouchableOpacity>

        <View style={AppStyles.modalContent}>
          <Text style={AppStyles.modalTitle}>¿Cómo quieres pagar?</Text>

          <View style={AppStyles.paymentContainer}>
            <TouchableOpacity style={AppStyles.paymentOption} onPress={() => { }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1087/1087080.png' }}
                style={AppStyles.paymentImage}
              />
              <Text style={AppStyles.paymentText}>Tarjeta de débito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyles.paymentOption} onPress={() => { }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3393/3393981.png' }}
                style={AppStyles.paymentImage}
              />
              <Text style={AppStyles.paymentText}>Tarjeta de crédito</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyles.paymentOption} onPress={() => { }}>
              <Image
                source={{ uri: 'https://seeklogo.com/images/E/efecty-colombia-logo-C4C6532B80-seeklogo.com.png' }}
                style={AppStyles.paymentImage}
              />
              <Text style={AppStyles.paymentText}>Efecty</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AppStyles.paymentOption} onPress={() => { }}>
              <Image
                source={{ uri: 'https://seeklogo.com/images/P/pse-logo-B00717880A-seeklogo.com.png' }}
                style={AppStyles.paymentImage}
              />
              <Text style={AppStyles.paymentText}>Transferencia con PSE</Text>
            </TouchableOpacity>
          </View>

          
        </View>
      </View>
   
  );
}
