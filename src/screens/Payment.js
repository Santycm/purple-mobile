import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import CheckBox from '@react-native-community/checkbox'; // Importa CheckBox desde @react-native-community/checkbox
import AppStyles from '../styles/AppStyles.js';
import Icon from 'react-native-vector-icons/Ionicons';

export const Payment = ({ navigation }) => {
  const [address, setAddress] = useState('');
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [captchaChecked, setCaptchaChecked] = useState(false); // Estado para el CAPTCHA

  const products = [
    { id: '1', name: 'Samsung Galaxy S21', description: 'Smartphone de última generación', price: 1000000, quantity: 1, image: 'https://www.clevercel.co/cdn/shop/products/samsung-galaxy-s21-5g-0.jpg?v=1634321179' },
    { id: '2', name: 'PlayStation 5', description: 'Consola de videojuegos', price: 2000000, quantity: 1, image: 'https://exitocol.vtexassets.com/arquivos/ids/9154830/consola-sony-playstation-5-ps5-825gb-lector-de-disco.jpg?v=637631028235770000' },
    { id: '3', name: 'Laptop HP', description: 'Laptop para trabajo', price: 3000000, quantity: 1, image: 'https://d34vmoxq6ylzee.cloudfront.net/catalog/product/3/0/308Z8LA-1_T1679063126.png' },
  ];

  const calculateTotalAmount = () => {
    return products.reduce((total, product) => total + (product.price * product.quantity), 0);
  };

  const handleNumericInputChange = (index) => (value) => {
    const numericValue = value.replace(/[^0-9]/g, '').slice(0, 2);
    products[index].quantity = numericValue;
  };

  const handlePress = (paymentMethod) => {
    setSelectedPayment(paymentMethod);
    console.log(`Seleccionado: ${paymentMethod}`);
  };

  const handleCaptchaChange = () => {
    setCaptchaChecked(!captchaChecked);
  };

  return (
    <ScrollView contentContainerStyle={AppStyles.scrollViewContainerPaymentScreen}>
      <View style={AppStyles.modalContainerPaymentScreen}>
        <TouchableOpacity
          style={AppStyles.backButtonPaymentScreen}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
        </TouchableOpacity>

        <View style={AppStyles.modalContentScreen}>
          <Text style={AppStyles.modalTitleScreen}>¿Cómo quieres pagar?</Text>

          <View style={AppStyles.productsContainerScreen}>
            {products.map((product, index) => (
              <View key={product.id} style={AppStyles.productItemScreen}>
                <Image source={{ uri: product.image }} style={AppStyles.productImageScreen} />
                <View style={AppStyles.productDetailsScreen}>
                  <Text style={AppStyles.productNameScreen}>{product.name}</Text>
                  <Text style={AppStyles.productDescriptionScreen}>{product.description}</Text>
                  <Text style={AppStyles.productPriceScreen}>Precio: {formatPrice(product.price)}</Text>
                  <TextInput
                    style={AppStyles.productQuantityInput}
                    keyboardType="numeric"
                    value={String(product.quantity)}
                    onChangeText={handleNumericInputChange(index)}
                  />
                </View>
              </View>
            ))}
          </View>

          <Text style={AppStyles.totalAmountScreen}>Total: {formatPrice(calculateTotalAmount())}</Text>

          <TextInput
            style={AppStyles.addressInputScreen}
            placeholder="Ingresa tu dirección"
            value={address}
            onChangeText={(text) => setAddress(text.slice(0, 30))}
            maxLength={30}
          />

          <View style={AppStyles.paymentOptionsContainerScreen}>
            <TouchableOpacity
              style={selectedPayment === 'Tarjeta de débito' ? AppStyles.paymentOptionActiveScreen : AppStyles.paymentOptionInactiveScreen}
              onPress={() => handlePress('Tarjeta de débito')}
            >
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1087/1087080.png' }} style={AppStyles.paymentImageScreen} />
              <Text style={AppStyles.paymentTextScreen}>Tarjeta de débito</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedPayment === 'Tarjeta de crédito' ? AppStyles.paymentOptionActiveScreen : AppStyles.paymentOptionInactiveScreen}
              onPress={() => handlePress('Tarjeta de crédito')}
            >
              <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3393/3393981.png' }} style={AppStyles.paymentImageScreen} />
              <Text style={AppStyles.paymentTextScreen}>Tarjeta de crédito</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedPayment === 'Efecty' ? AppStyles.paymentOptionActiveScreen : AppStyles.paymentOptionInactiveScreen}
              onPress={() => handlePress('Efecty')}
            >
              <Image source={{ uri: 'https://seeklogo.com/images/E/efecty-colombia-logo-C4C6532B80-seeklogo.com.png' }} style={AppStyles.paymentImageScreen} />
              <Text style={AppStyles.paymentTextScreen}>Efecty</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedPayment === 'Transferencia con PSE' ? AppStyles.paymentOptionActiveScreen : AppStyles.paymentOptionInactiveScreen}
              onPress={() => handlePress('Transferencia con PSE')}
            >
              <Image source={{ uri: 'https://seeklogo.com/images/P/pse-logo-B00717880A-seeklogo.com.png' }} style={AppStyles.paymentImageScreen} />
              <Text style={AppStyles.paymentTextScreen}>Transferencia con PSE</Text>
            </TouchableOpacity>
          </View>

          {/* Simulación de CAPTCHA */}
          <View style={AppStyles.captchaContainerScreen}>
            <Image source={{ uri: 'https://example.com/captcha-image.jpg' }} style={AppStyles.captchaImageScreen} />
            <View style={AppStyles.captchaCheckboxContainerScreen}>
              <CheckBox
                value={captchaChecked}
                onValueChange={handleCaptchaChange}
                style={AppStyles.captchaCheckboxScreen}
              />
              <Text style={AppStyles.captchaTextScreen}>No soy un robot</Text>
              {captchaChecked && <Icon name="checkmark-circle-outline" size={24} color="#6A0DAD" />}
            </View>
          </View>

          
          <TouchableOpacity
            style={AppStyles.continueButtonScreen}
            onPress={() => {
              navigation.navigate('ConfirmPurchase');
            }}>
            <Text style={AppStyles.continueButtonTextScreen}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
  }).format(price);
};
