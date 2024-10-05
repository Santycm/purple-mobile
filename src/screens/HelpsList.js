import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppStyles from '../styles/AppStyles.js';

const RequestsList = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const existingRequests = await AsyncStorage.getItem('peticiones');
      if (existingRequests) {
        setRequests(JSON.parse(existingRequests));
      }
    } catch (error) {
      console.error('Error al obtener las solicitudes:', error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <View style={AppStyles.container}>
      <Text style={AppStyles.title}>Lista de Solicitudes</Text>
      <FlatList
        data={requests}
        renderItem={({ item }) => (
          <View style={AppStyles.requestItem}>
            <Text style={AppStyles.requestType}>{item.tipo}</Text>
            <Text>{item.descripcion}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default RequestsList;
