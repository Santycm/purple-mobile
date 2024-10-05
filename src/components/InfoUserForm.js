import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, Text, Pressable, TextInput, Alert} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles2} from '../styles/AppStyles2';
import colombiaData from '../assets/colombia.min.json';
import {UserContext} from '../context/UserContext.js';

export const InfoUserForm = ({nextStep, userState}) => {
  
  const [dateTime, setDateTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const [age, setAge] = useState(0);
  

  const countries = ['Colombia'];

  const onChangeDateTime = (event, selectedDate) => {
    const currentDate = selectedDate || dateTime;
    setDateTime(currentDate);
    setShow(false);

    if (!validateAge(currentDate)) {
      const today = new Date();
      const birthDate = new Date(currentDate);
      let age = today.getFullYear() - birthDate.getFullYear();
      setAge(age);
      Alert.alert(
        'Edad no permitida',
        'La edad debe ser mayor de 18 años y máximo 50 años',
      );
    } else {
      const today = new Date();
      const birthDate = new Date(currentDate);
      let day = birthDate.getDay();
      let month = birthDate.getMonth();
      let year = birthDate.getFullYear();
      let birthDateFormated = day + "/" + month + "/" + year;
      userState.setBirthDate(birthDateFormated);
      let age = today.getFullYear() - birthDate.getFullYear();
      setAge(age);
    }
  };

  const validateAge = selectedDate => {
    const today = new Date();
    const birthDate = new Date(selectedDate);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18 || age > 50) {
      return false;
    }

    return true;
  };

  const showDatepicker = () => {
    setShow(true);
  };


  return (
    <View style={styles2.formSection}>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>Nombre de usuario</Text>
        <TextInput
          style={styles2.textInput2}
          maxLength={10}
          value={userState.userName}
          onChangeText={userState.setUsername}></TextInput>
      </View>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>Dirección</Text>
        <TextInput
          style={styles2.textInput2}
          maxLength={30}
          value={userState.addres}
          onChangeText={userState.setAddress}></TextInput>
      </View>
      <View style={styles2.rowInputsContainer}>
        <View style={[styles2.inputSection, styles2.inputSectionMid]}>
          <Text style={styles2.textInputLabel}>Fecha de nacimiento</Text>
          <Pressable onPress={showDatepicker} style={styles2.btnDate}>
            <TextInput
              style={styles2.dateTimeText}
              value={dateTime.toLocaleDateString()}
              editable={false}
            />
          </Pressable>
          {show && (
            <DateTimePicker
              value={dateTime}
              mode="date"
              display="calendar"
              onChange={onChangeDateTime}
            />
          )}
        </View>
        <View style={[styles2.inputSection, styles2.inputSectionMid]}>
          <Text style={styles2.textInputLabel}>Tu edad</Text>
          <TextInput
            style={[styles2.btnDate, styles2.ageInput]}
            editable={false}
            value={age.toString()}></TextInput>
        </View>
      </View>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>País</Text>
        <View style={styles2.picker}>
          <Picker
            selectedValue={userState.selectedCountry}
            onValueChange={itemValue => {
              userState.setSelectedCountry(itemValue);
            }}>
            <Picker.Item label="Seleccione un país" />
            {countries.map(country => (
              <Picker.Item key={country} label={country} value={country} />
            ))}
          </Picker>
        </View>
      </View>
      <View style={styles2.rowInputsContainer}>
        <View style={[styles2.inputSection, styles2.inputSectionMid]}>
          <Text style={styles2.textInputLabel}>Departamento</Text>
          <View style={styles2.picker}>
            <Picker
              selectedValue={userState.selectedDepartment}
              onValueChange={itemValue => {
                userState.setSelectedDepartment(itemValue);
              }}>
              <Picker.Item label="Seleccione un departamento" />
              {colombiaData.map(data => (
                <Picker.Item
                  key={data.deparment}
                  label={data.deparment}
                  value={data.deparment}
                />
              ))}
            </Picker>
          </View>
        </View>
        <View style={[styles2.inputSection, styles2.inputSectionMid]}>
          <Text style={styles2.textInputLabel}>Municipio</Text>
          <View style={styles2.picker}>
            <Picker
              selectedValue={userState.selectedCity}
              onValueChange={itemValue => {
                userState.setSelectedCity(itemValue);
              }}>
              <Picker.Item label="Seleccione un país" />
              {colombiaData
                .find(data => data.deparment === userState.selectedDepartment)
                ?.cities.map(city => (
                  <Picker.Item key={city} label={city} value={city} />
                ))}
            </Picker>
          </View>
        </View>
      </View>

      <Pressable style={styles2.btnSecondary} onPress={nextStep}>
        <Text style={styles2.textTitle}>Siguiente paso</Text>
      </Pressable>
    </View>
  );
};
