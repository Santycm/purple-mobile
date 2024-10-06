import React, {useState} from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import AppStyles from '../styles/AppStyles.js';
import Icon from 'react-native-vector-icons/Ionicons';

export const Help = ({navigation}) => {
  const [selectedSolicitud, setSelectedSolicitud] = useState('');
  const [nombre, setNombre] = useState('');
  const [cedula, setCedula] = useState('');
  const [direccion, setDireccion] = useState('');
  const [pedido, setPedido] = useState('');
  const [celular, setCelular] = useState('');
  const [descripcion, setDescripcion] = useState('');
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

  const enviarCorreo = () => {
    const destinatario = 'alexmunerap@gmail.com';
    const asunto = `Solicitud de Ayuda: ${selectedSolicitud}`;
    const cuerpo =
      `Tipo de Solicitud: ${selectedSolicitud}\n` +
      `Nombre Completo: ${nombre}\n` +
      `Cédula: ${cedula}\n` +
      `Correo Electrónico: ${email}\n` +
      `Dirección: ${direccion}\n` +
      `Número de Celular: ${celular}\n` +
      `Pedido: ${pedido}\n\n` +
      `Descripción:\n${descripcion}`;

    const url = `mailto:${destinatario}?subject=${encodeURIComponent(
      asunto,
    )}&body=${encodeURIComponent(cuerpo)}`;

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
            selectedValue={selectedSolicitud}
            onValueChange={itemValue => setSelectedSolicitud(itemValue)}
            style={AppStyles.pickerHelp}>
            <Picker.Item label="Queja" value="queja" />
            <Picker.Item label="Petición" value="peticion" />
            <Picker.Item label="Recurso" value="recurso" />
          </Picker>

          <Text style={AppStyles.labelHelp}>Nombre Completo:</Text>
          <TextInput
            style={AppStyles.smallInput}
            placeholder="Ingresa tu nombre completo"
            value={nombre}
            onChangeText={setNombre}
          />

          <Text style={AppStyles.labelHelp}>Cédula:</Text>
          <TextInput
            style={AppStyles.smallInput}
            placeholder="Ingresa tu cédula"
            value={cedula}
            onChangeText={setCedula}
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
            value={direccion}
            onChangeText={setDireccion}
          />

          <Text style={AppStyles.labelHelp}>Número de Celular:</Text>
          <TextInput
            style={AppStyles.smallInput}
            placeholder="Ingresa tu número de celular"
            value={celular}
            onChangeText={setCelular}
            keyboardType="phone-pad"
          />

          <Text style={AppStyles.labelHelp}>Pedido:</Text>
          <TextInput
            style={AppStyles.smallInput}
            placeholder="Ingresa el número de pedido"
            value={pedido}
            onChangeText={setPedido}
          />

          <Text style={AppStyles.labelHelp}>Descripción de la solicitud:</Text>
          <TextInput
            style={AppStyles.textInputHelp}
            multiline
            maxLength={300}
            placeholder="Escribe aquí la descripción"
            value={descripcion}
            onChangeText={setDescripcion}
          />

          <Text style={AppStyles.faqTitle}>Preguntas Frecuentes (FAQ)</Text>
          {faqs.map((faq, index) => (
            <View key={index} style={AppStyles.faqItem}>
              <Text style={AppStyles.faqQuestion}>{faq.question}</Text>
              <Text style={AppStyles.faqAnswer}>{faq.answer}</Text>
            </View>
          ))}

          <Pressable style={AppStyles.checkoutButton} onPress={enviarCorreo}>
            <Text style={AppStyles.checkoutButtonText}>Continuar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};
