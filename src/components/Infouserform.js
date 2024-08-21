import React, {useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { styles2 } from '../styles/AppStyles2';

export const Infouserform = ({nextStep}) => {
    const [dateTime, setDateTime] = useState(new Date());
    const [show, setShow] = useState(false);

    const [selectedCountry, setSelectedCountry] = useState('');
    const countries = ['Colombia', 'Perú', 'México'];

    const onChangeDateTime = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(false);
      setDateTime(currentDate);
    };

    const showDatepicker = () => {
      setShow(true);
    };

  return (
    <View style={styles2.formSection}>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>Nombre completo</Text>
        <TextInput style={styles2.textInput2}></TextInput>
      </View>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>Dirección</Text>
        <TextInput style={styles2.textInput2}></TextInput>
      </View>
      <View style={styles2.rowInputsContainer}>
        <View style={[styles2.inputSection, styles2.inputSectionMid]}>
          <Text style={styles2.textInputLabel}>Fecha de nacimiento</Text>
          <TouchableOpacity onPress={showDatepicker} style={styles2.btnDate}>
            <TextInput
              style={styles2.dateTimeText}
              value={dateTime.toLocaleDateString()}
              editable={false}
            />
          </TouchableOpacity>
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
          <TextInput style={styles2.btnDate} editable={false}></TextInput>
        </View>
      </View>
      <View style={styles2.inputSection}>
        <Text style={styles2.textInputLabel}>País</Text>
        <View style={styles2.picker}>
          <Picker
            selectedValue={selectedCountry}
            onValueChange={itemValue => {
              setSelectedCountry(itemValue);
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
              selectedValue={selectedCountry}
              onValueChange={itemValue => {
                setSelectedCountry(itemValue);
              }}>
              <Picker.Item label="Seleccione un país" />
              {countries.map(country => (
                <Picker.Item key={country} label={country} value={country} />
              ))}
            </Picker>
          </View>
        </View>
        <View style={[styles2.inputSection, styles2.inputSectionMid]}>
          <Text style={styles2.textInputLabel}>Municipio</Text>
          <View style={styles2.picker}>
            <Picker
              selectedValue={selectedCountry}
              onValueChange={itemValue => {
                setSelectedCountry(itemValue);
              }}>
              <Picker.Item label="Seleccione un país" />
              {countries.map(country => (
                <Picker.Item key={country} label={country} value={country} />
              ))}
            </Picker>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles2.btnSecondary} onPress={nextStep}>
        <Text style={styles2.textTitle}>Siguiente paso</Text>
      </TouchableOpacity>
    </View>
  );
}
