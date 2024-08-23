import React, { useState, useEffect } from 'react';
import { View, Text, Image, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import AppStyles from '../styles/AppStyles.js';

export const Arrival = ({ route, navigation }) => {
  const { cart } = route.params || {};
  if (!cart) {
    return (
      <View style={AppStyles.container}>
        <Text style={AppStyles.errorText}>Error: No se encontraron datos del carrito.</Text>
      </View>
    );
  }

  const [selectedDate, setSelectedDate] = useState({});

  useEffect(() => {
    const initialDates = cart.reduce((dates, item) => {
      dates[item.id] = 'Lunes';
      return dates;
    }, {});
    setSelectedDate(initialDates);
  }, [cart]);

  const handleDateChange = (productId, date) => {
    setSelectedDate(prevState => ({ ...prevState, [productId]: date }));
  };

  return (
    <View style={AppStyles.container}>
      <ScrollView contentContainerStyle={AppStyles.scrollContainer}>
        <View style={AppStyles.header}>
          <Pressable
            style={AppStyles.backButtonArrival}
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
          </Pressable>
          <Text style={AppStyles.headerTitle}>Revisa cuando llega tu compra</Text>
        </View>
        <View style={AppStyles.deliveryInfo}>
          <Text style={AppStyles.deliveryText}>Dirección: Calle X #123, Ciudad</Text>
        </View>
        <View style={AppStyles.productContainer}>
          {cart.map(product => (
            <View key={product.id} style={AppStyles.productItem}>
              <View style={AppStyles.productImageContainer}>
                <Image source={product.img} style={AppStyles.productImage} />
              </View>
              <View style={AppStyles.productDetails}>
                <Text style={AppStyles.productTitle}>{product.shipping}</Text>
                <Text style={AppStyles.productName}>{product.description}</Text>
                <View style={AppStyles.datePickerContainer}>
                  <Text style={AppStyles.dateLabel}>Fecha de entrega:</Text>
                  <Picker
                    selectedValue={selectedDate[product.id]}
                    style={AppStyles.picker}
                    onValueChange={(itemValue) => handleDateChange(product.id, itemValue)}
                  >
                    <Picker.Item label="Lunes" value="Lunes" />
                    <Picker.Item label="Martes" value="Martes" />
                    <Picker.Item label="Miércoles" value="Miércoles" />
                    <Picker.Item label="Jueves" value="Jueves" />
                    <Picker.Item label="Viernes" value="Viernes" />
                    <Picker.Item label="Sábado" value="Sábado" />
                  </Picker>
                </View>
                <Text style={AppStyles.freeShipping}>Envío: Gratis</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={AppStyles.footer}>
        <Pressable
          style={AppStyles.continueButton}
          onPress={() => {
            navigation.navigate('Payment', { cart });
          }}>
          <Text style={AppStyles.continueButtonText}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
};
