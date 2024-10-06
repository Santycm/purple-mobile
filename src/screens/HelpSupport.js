import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  ScrollView,
  Linking,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AppStyles from '../styles/AppStyles.js';
import Icon from 'react-native-vector-icons/Ionicons';

export const Help = ({navigation}) => {
  const [selectedRequest, setSelectedRequest] = useState('');
  const [name, setName] = useState('');
  const [identification, setIdentification] = useState('');
  const [address, setAddress] = useState('');
  const [delivery, setDelivery] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const faqs = [
    {
      question: '¿Cómo puedo hacer una queja?',
      answer:
        'Para hacer una queja, selecciona "Queja" en el menú de solicitud y escribe tu queja en la descripción.',
    },
    {
      question: '¿Qué es una petición?',
      answer:
        'Una petición es una solicitud formal para cambiar o añadir algo. Selecciona "Petición" y proporciona los detalles en la descripción.',
    },
    {
      question: '¿Cómo hago un recurso?',
      answer:
        'Un recurso es una solicitud para revisar una decisión. Selecciona "Recurso" y explica tu caso en la descripción.',
    },
  ];

  const sendEmail = () => {
    const admin = 'alexmunerap@gmail.com';
    const title = `Solicitud de Ayuda: ${selectedRequest}`;
    const msg =
      `Tipo de Solicitud: ${selectedRequest}\n` +
      `Nombre Completo: ${name}\n` +
      `Cédula: ${identification}\n` +
      `Correo Electrónico: ${email}\n` +
      `Dirección: ${address}\n` +
      `Número de Celular: ${phone}\n` +
      `Pedido: ${delivery}\n\n` +
      `Descripción:\n${description}`;

    const url = `mailto:${admin}?subject=${encodeURIComponent(
      title,
    )}&body=${encodeURIComponent(msg)}`;

    Linking.openURL(url).catch(err => {
      console.error('Error al abrir el correo: ', err);
    });
  };

  return (
    <View style={AppStyles.containerHelp}>
      <View style={AppStyles.headerHelp}>
        <Pressable
          style={AppStyles.backButtonHelp}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-circle-outline" size={50} color="#FFFFFF" />
        </Pressable>
        <Text style={AppStyles.titleHelp}>Ayuda y PQRS</Text>
      </View>

      <ScrollView
        style={AppStyles.scrollViewHelp}
        contentContainerStyle={AppStyles.scrollContent}>
        <View style={AppStyles.contentHelp}>
          <Text style={AppStyles.labelHelp}>
            Seleccionar el tipo de solicitud:
          </Text>
          <Picker
            selectedValue={selectedRequest}
            onValueChange={itemValue => setSelectedRequest(itemValue)}
            style={AppStyles.pickerHelp}>
            <Picker.Item label="Queja" value="queja" />
            <Picker.Item label="Petición" value="peticion" />
            <Picker.Item label="Recurso" value="recurso" />
          </Picker>

          <Text style={AppStyles.labelHelp}>Nombre Completo:</Text>
          <TextInput
            style={AppStyles.smallInput}
            placeholder="Ingresa tu name completo"
            value={name}
            onChangeText={setName}
          />

          <Text style={AppStyles.labelHelp}>Cédula:</Text>
          <TextInput
            style={AppStyles.smallInput}
            placeholder="Ingresa tu cédula"
            value={identification}
            onChangeText={setIdentification}
            keyboardType="numeric"
          />

          <Text style={AppStyles.labelHelp}>Correo Electrónico:</Text>
          <TextInput
            style={AppStyles.smallInput}
            placeholder="Ingresa tu correo electrónico"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Text style={AppStyles.labelHelp}>Dirección:</Text>
          <TextInput
            style={AppStyles.smallInput}
            placeholder="Ingresa tu dirección"
            value={address}
            onChangeText={setAddress}
            maxLength={30}
          />

          <Text style={AppStyles.labelHelp}>Número de Celular:</Text>
          <TextInput
            style={AppStyles.smallInput}
            placeholder="Ingresa tu número de celular"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            maxLength={10}
          />

          <Text style={AppStyles.labelHelp}>Pedido:</Text>
          <TextInput
            style={AppStyles.smallInput}
            placeholder="Ingresa el número de pedido"
            value={delivery}
            onChangeText={setDelivery}
          />

          <Text style={AppStyles.labelHelp}>Descripción de la solicitud:</Text>
          <TextInput
            style={AppStyles.textInputHelp}
            multiline
            maxLength={300}
            placeholder="Escribe aquí la descripción"
            value={description}
            onChangeText={setDescription}
          />

          <Text style={AppStyles.faqTitle}>Preguntas Frecuentes (FAQ)</Text>
          {faqs.map((faq, index) => (
            <View key={index} style={AppStyles.faqItem}>
              <Text style={AppStyles.faqQuestion}>{faq.question}</Text>
              <Text style={AppStyles.faqAnswer}>{faq.answer}</Text>
            </View>
          ))}

          <Pressable style={AppStyles.checkoutButton} onPress={sendEmail}>
            <Text style={AppStyles.checkoutButtonText}>Continuar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
