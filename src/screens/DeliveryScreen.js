import React, {useContext, useState, useRef} from 'react';
import {View, Text, Pressable, TextInput} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/Ionicons';
import AppStyles from '../styles/AppStyles.js';

import {UserContext} from '../context/UserContext.js';

export const DeliveryScreen = ({navigation}) => {
  const [userState, userDispatch] = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [showPicker, setShowPicker] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState('');
  const [address, setAddress] = useState(
    userState.user ? userState.user.address : '',
  );
  const addressInputRef = useRef(null);

  const handleEditAddress = () => {
    setIsEditing(true);
    setTimeout(() => {
      if (addressInputRef.current) {
        addressInputRef.current.focus();
      }
    }, 100);
  };

  const handleSaveAddress = () => {
    userState.dbMarket.map(user => {
      if (user.userName === userState.user.userName) {
        if (user.pointDelivery) {
          user.pointDelivery = null;
        }
      }
    });
    userDispatch({type: 'UPDATE_ADDRESS', payload: address});
    navigation.navigate('Payment');
  };

  const handleSaveAddressPoint = () => {
    userState.dbMarket.map(user => {
      if (user.userName === userState.user.userName) {
        if (user.address) {
          user.address = null;
        }
      }
    });
    userDispatch({type: 'SET_POINT_DELIVERY', payload: selectedPoint});
    navigation.navigate('Payment');
  };

  const handleShowPicker = () => {
    setShowPicker(true);
  };

  const handlePickerChange = itemValue => {
    setSelectedPoint(itemValue);
    setShowPicker(false);
  };

  const pointsDelivery = [
    'CALLE 12 # 12-12 Medellín',
    'CALLE 34 # 34-34 Bogotá',
    'CALLE 56 # 56-56 Cali',
  ];

  return (
    <View style={AppStyles.modalContainerDelivery}>
      <View style={AppStyles.modalContent}>
        <Text style={AppStyles.modalTitle}>Selecciona la forma de entrega</Text>

        <View style={AppStyles.selectionContainer}>
          <View style={AppStyles.drawer}>
            <View style={AppStyles.drawerContent}>
              <Text style={AppStyles.sectionTitle}>Entrega a domicilio</Text>
              {isEditing ? (
                <TextInput
                  ref={addressInputRef}
                  style={AppStyles.textInput}
                  value={address}
                  onChangeText={setAddress}
                  onBlur={handleSaveAddress}
                  maxLength={30}
                />
              ) : (
                <Text style={AppStyles.addressText}>{address}</Text>
              )}
            </View>
            <Pressable
              style={AppStyles.advanceButton}
              onPress={handleSaveAddress}>
              <Icon name="arrow-forward-circle" size={30} color="#FFFFFF" />
            </Pressable>
            <Pressable style={AppStyles.editButton} onPress={handleEditAddress}>
              <Text style={AppStyles.buttonText}>Editar domicilio</Text>
            </Pressable>
          </View>

          <View style={AppStyles.drawer}>
            <View style={AppStyles.drawerContent}>
              <Text style={AppStyles.sectionTitle}>
                Retirar en punto de entrega
              </Text>
              <Text style={AppStyles.pickupDetails}>
                Dirección: {selectedPoint || 'CALLE 12 # 12-12 Medellín'}
              </Text>
              <Text style={AppStyles.pickupDetails}>
                Horario: 9:00 AM - 6:00 PM
              </Text>
            </View>
            <Pressable
              style={AppStyles.advanceButton}
              onPress={handleSaveAddressPoint}>
              <Icon name="arrow-forward-circle" size={30} color="#FFFFFF" />
            </Pressable>
            <Pressable style={AppStyles.mapButton} onPress={handleShowPicker}>
              <Text style={AppStyles.buttonText}>
                Elegir otro punto de entrega
              </Text>
            </Pressable>
            {showPicker && (
              <Picker
                selectedValue={selectedPoint}
                onValueChange={handlePickerChange}>
                {pointsDelivery.map(address => (
                  <Picker.Item key={address} label={address} value={address} />
                ))}
              </Picker>
            )}
          </View>
        </View>

        <Pressable
          style={AppStyles.editButton}
          onPress={() => {
            navigation.navigate('Cart');
          }}>
          <Text style={AppStyles.buttonText}>Cerrar</Text>
        </Pressable>
      </View>
    </View>
  );
};
