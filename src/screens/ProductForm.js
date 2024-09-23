import React, {useState} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AppStyles from '../styles/AppStyles';


export const ProductForm = ({navigation}) => {
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const [productImage, setProductImage] = useState(null);
  const [product, setProduct] = useState({
    name: '',
    description: '',
    features: '',
    paymentMethods: [],
    img: '',
  });

  const [isOffer, setIsOffer] = useState(false);

  const payMethod = ['Tarjeta', 'Efectivo'];

  const handlePaymentMethodChange = method => {
    setSelectedPaymentMethods(prevSelectedMethods => {
      if (prevSelectedMethods.includes(method)) {
        return prevSelectedMethods.filter(item => item !== method);
      } else {
        return [...prevSelectedMethods, method];
      }
    });
  };

  const handleImagePicker = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = response.assets[0].uri;

        // Subir la imagen a Cloudinary
        const formData = new FormData();
        formData.append('file', {
          uri: source,
          type: 'image/jpeg',
          name: 'upload.jpg',
        });
        formData.append('upload_preset', 'Purple'); // Reemplaza con tu upload preset
        formData.append('folder', 'purple'); // Especifica la carpeta en Cloudinary

        fetch(`https://api.cloudinary.com/v1_1/dctc1rhlx/image/upload`, {
          method: 'POST',
          body: formData,
        })
          .then(response => response.json())
          .then(data => {
            console.log('Image uploaded successfully:', data);
            setProductImage(data.secure_url);
          })
          .catch(error => {
            console.log('Error uploading image:', error);
          });
      }
    });
  };

  return (
    <View style={styles2.bgScreen2}>
      <Pressable
        style={styles2.btnBack}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="arrow-left" size={30} color="white" />
      </Pressable>
      <ScrollView>
        <View style={AppStyles.productContainer}>
          <Text style={styles2.titleTextPageProduct}>AGREGAR PRODUCTO</Text>
          <View>
            <View>
              <Text>Imagen</Text>
              <Pressable
                onPress={handleImagePicker}
                style={styles2.imagePicker}>
                <Text>Seleccionar Imagen</Text>
              </Pressable>
              {productImage && (
                <Image
                  source={{uri: productImage}}
                  style={{width: 100, height: 100}}
                />
              )}
            </View>
            <TextInput placeholder="Nombre del producto" />
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder="Descripción"
            />
            <TextInput
              multiline={true}
              numberOfLines={8}
              placeholder="Caracteristicas (Separadas por una coma)"
            />
            <Text>Métodos de pago aceptados</Text>
            <View>
              {payMethod.map((item, index) => {
                return (
                  <Pressable
                    key={index}
                    style={styles2.paymentMethod}
                    onPress={() => handlePaymentMethodChange(item)}>
                    <Text>{item}</Text>
                    {selectedPaymentMethods.includes(item) ? (
                      <Icon name="check" size={15} color="white" />
                    ) : null}
                  </Pressable>
                );
              })}
            </View>
            <TextInput placeholder="Precio" />
            <View>
              <Text>¿Está en oferta?</Text>
              <Pressable
                style={styles2.offerButton}
                onPress={() => setIsOffer(!isOffer)}>
                <Text>{isOffer ? 'Sí' : 'No'}</Text>
              </Pressable>
            </View>
            <View>
              <Text>Estado</Text>
              <Pressable
                style={styles2.offerButton}
                onPress={() => setIsAvailable(!isAvailable)}>
                <Text>{isAvailable ? 'Disponible' : 'No disponible'}</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
