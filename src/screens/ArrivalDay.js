import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
import AppStyles from './styles/AppStyles'; 

const initialProducts = [
  { id: '1', name: 'Samsung Galaxy S21', image: 'https://www.clevercel.co/cdn/shop/products/samsung-galaxy-s21-5g-0.jpg?v=1634321179', shipping: 'Envío 1' },
  { id: '2', name: 'PlayStation 5', image: 'https://exitocol.vtexassets.com/arquivos/ids/9154830/consola-sony-playstation-5-ps5-825gb-lector-de-disco.jpg?v=637631028235770000', shipping: 'Envío 2' },
];

export default function DeliveryPage() {
  const [selectedDate, setSelectedDate] = useState({ '1': 'Jueves', '2': 'Viernes' });

  const handleDateChange = (productId, date) => {
    setSelectedDate(prevState => ({ ...prevState, [productId]: date }));
  };

  return (
    <View style={AppStyles.container}>
      <ScrollView contentContainerStyle={AppStyles.scrollContainer}>
        <View style={AppStyles.header}>
          <TouchableOpacity style={AppStyles.backButtonArrival}>
            <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
          </TouchableOpacity>
          <Text style={AppStyles.headerTitle}>Revisa cuando llega tu compra</Text>
        </View>
        <View style={AppStyles.deliveryInfo}>
          <Text style={AppStyles.deliveryText}>Dirección: Calle X #123, Ciudad</Text>
        </View>
        <View style={AppStyles.productContainer}>
          {initialProducts.map(product => (
            <View key={product.id} style={AppStyles.productItem}>
              <View style={AppStyles.productImageContainer}>
                <Image source={{ uri: product.image }} style={AppStyles.productImage} />
              </View>
              <View style={AppStyles.productDetails}>
                <Text style={AppStyles.productTitle}>{product.shipping}</Text>
                <Text style={AppStyles.productName}>{product.name}</Text>
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
        <TouchableOpacity style={AppStyles.continueButton}>
          <Text style={AppStyles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
