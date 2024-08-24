import React, { useState } from 'react';
import { View, Text, Pressable, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AppStyles from '../styles/AppStyles.js';
import Icon from 'react-native-vector-icons/Ionicons';

export const Help = ({ navigation }) => {
  const [selectedSolicitud, setSelectedSolicitud] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const faqs = [
    { question: '¿Cómo puedo hacer una queja?', answer: 'Para hacer una queja, selecciona "Queja" en el menú de solicitud y escribe tu queja en la descripción.' },
    { question: '¿Qué es una petición?', answer: 'Una petición es una solicitud formal para cambiar o añadir algo. Selecciona "Petición" y proporciona los detalles en la descripción.' },
    { question: '¿Cómo hago un recurso?', answer: 'Un recurso es una solicitud para revisar una decisión. Selecciona "Recurso" y explica tu caso en la descripción.' },
   
  ];

  return (
    <View style={AppStyles.containerHelp}>
      <View style={AppStyles.headerHelp}>
        <Pressable
          style={AppStyles.backButtonHelp}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-undo-circle-outline" size={50} color="#FFFFFF" />
        </Pressable>
        <Text style={AppStyles.titleHelp}>Ayuda y PQRS</Text>
      </View>

      <View style={AppStyles.contentHelp}>
        <Text style={AppStyles.labelHelp}>Seleccionar el tipo de solicitud:</Text>
        <Picker
          selectedValue={selectedSolicitud}
          onValueChange={(itemValue) => setSelectedSolicitud(itemValue)}
          style={AppStyles.pickerHelp}
        >
          <Picker.Item label="Queja" value="queja" />
          <Picker.Item label="Petición" value="peticion" />
          <Picker.Item label="Recurso" value="recurso" />
        </Picker>

        <Text style={AppStyles.labelHelp}>Descripción de la solicitud:</Text>
        <TextInput
          style={AppStyles.textInputHelp}
          multiline
          maxLength={300}
          placeholder="Escribe aquí la descripción"
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <ScrollView style={AppStyles.faqContainer}>
          <Text style={AppStyles.faqTitle}>Preguntas Frecuentes (FAQ)</Text>
          {faqs.map((faq, index) => (
            <View key={index} style={AppStyles.faqItem}>
              <Text style={AppStyles.faqQuestion}>{faq.question}</Text>
              <Text style={AppStyles.faqAnswer}>{faq.answer}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={AppStyles.footer}>
        <Pressable
          style={AppStyles.checkoutButton}
          onPress={() => {
            navigation.navigate('ConfirmHelp'); 
          }}
        >
          <Text style={AppStyles.checkoutButtonText}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
};
