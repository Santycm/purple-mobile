import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Alert,
  ActivityIndicator,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AppStyles from '../styles/AppStyles';
import {categories} from '../assets/dbCategories';
import {Picker} from '@react-native-picker/picker';
import {UserContext} from '../context/UserContext';

export const ProductForm = ({navigation, route}) => {
  const [formData, setFormData] = useState(new FormData());
  const {isEdit} = route.params;
  const productId = route.params?.productId || null;

  const [userState, userDispatch] = useContext(UserContext);
  const [isOffer, setIsOffer] = useState(false);
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(false);

  const [infoFetched, setInfoFetched] = useState(false);

  const [isAvailable, setIsAvailable] = useState(null);
  const [productImage, setProductImage] = useState(null);
  const [urlImage, setUrlImage] = useState(null);
  const [product, setProduct] = useState({
    id:null,
    img: '',
    name: '',
    description: '',
    features: [],
    paymentAccepted: [],
    price: 0,
    category: '',
    offer: {
      isOffer: false,
      discount: 0,
      priceInOffer: 0,
    },
    status: 'No Disponible',
    coments: [],
    questions: [],
  });

  useEffect(() => {
    if (isEdit) {
      const {
        name,
        description,
        features,
        price,
        category,
        paymentAccepted,
        offer,
        status,
        img,
      } = productId;
      setProduct({
        ...product,
        name: name,
        description,
        features,
        price,
        offer: offer.isOffer
          ? {
              isOffer: true,
              discount: offer.discount,
              priceInOffer: offer.priceInOffer,
            }
          : {discount: 0},
      });
      setSelectedCategory(category);
      setSelectedPaymentMethods(paymentAccepted);
      setIsOffer(offer.isOffer);

      setIsAvailable(status === 'Disponible');
      setProductImage(img);
    }
  }, []);

  const paymentMethods = [
    {
      name: 'Débito',
      icon: 'credit-card',
    },
    {
      name: 'Crédito',
      icon: 'credit-card',
    },
    {
      name: 'Efecty',
      icon: 'money',
    },
    {
      name: 'PSE',
      icon: 'arrows-alt',
    },
  ];

  const handlePaymentMethodChange = method => {
    setSelectedPaymentMethods(prevSelectedMethods => {
      if (prevSelectedMethods.includes(method)) {
        return prevSelectedMethods.filter(item => item !== method);
      } else {
        return [...prevSelectedMethods, method];
      }
    });
  };

  const handlePickerChange = itemValue => {
    setSelectedCategory(itemValue);
    setShowPicker(false);
  };

  const handleImagePicker = () => {
    Alert.alert(
      'Seleccionar una imagen',
      '¿De dónde quieres seleccionar la imagen?',
      [
        {
          text: 'Tomar una foto',
          onPress: () => {
            launchCamera({mediaType: 'photo'}, response => {
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                const source = response.assets[0].uri;
                setProductImage(source);
              }
            });
          },
        },
        {
          text: 'Seleccionar de la galería',
          onPress: () => {
            launchImageLibrary({mediaType: 'photo'}, response => {
              if (response.didCancel) {
                console.log('User cancelled image picker');
              } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
              } else {
                const source = response.assets[0].uri;
                setProductImage(source);
              }
            });
          },
        },
        {
          text: 'Cancelar',
          style: 'cancel',
        },
      ],
      {cancelable: true},
    );
  };

  const getUploadImage = async () => {
    // Subir la imagen a Cloudinary
    const formData = new FormData();
    formData.append('file', {
      uri: productImage,
      type: 'image/jpeg',
      name: 'upload.jpg',
    });
    formData.append('upload_preset', 'Purple');
    formData.append('folder', 'purple');

    fetch(`https://api.cloudinary.com/v1_1/dctc1rhlx/image/upload`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        console.log('Image uploaded successfully:', data);
        setInfoFetched(true);
        setUrlImage(data.secure_url);
      })
      .catch(error => {
        console.log('Error uploading image:', error);
      });
  };

  const handleSaveProduct = async () => {
    setLoading(true);

    if (
      !productImage ||
      !product.name ||
      !product.description ||
      !product.features ||
      !product.price ||
      !selectedCategory ||
      !selectedPaymentMethods
    ) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      setLoading(false);
      return;
    }

    const acceptedDiscounts = [5, 20, 30, 35, 60];

    if (product.offer.isOffer) {
      if (!acceptedDiscounts.includes(product.offer.discount)) {
        Alert.alert('Error', 'El descuento debe ser 5, 20, 30, 35 o 60');
        setLoading(false);
        return;
      }
    }

    try {
      await getUploadImage();
      setProduct({
        ...product,
        id: isEdit
          ? productId.id
          : userState.dbMarket
              .map(user => user.products.length)
              .reduce((a, b) => a + b, 0) + 1,
        category: selectedCategory,
        paymentAccepted: selectedPaymentMethods,
      });
    } catch (error) {
      Alert.alert('Error', 'Error al subir la imagen');
    }
  };

  const handleUploadProduct = async () => {
    if (isEdit) {
      userDispatch({
        type: 'UPDATE_PRODUCT',
        payload: {
          updateProduct: product,
          updateUserName: userState.user.userName,
        },
      });
      navigation.navigate('MyProducts');
    } else {
      userDispatch({
        type: 'ADD_PRODUCT',
        payload: {userName: userState.user.userName, product},
      });
      navigation.navigate('MessageAddProduct');
    }
  };

  useEffect(() => {
    if (urlImage) {
      setProduct({
        ...product,
        img: urlImage,
      });
    }
  }, [urlImage]);

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
              {!productImage && (
                <Pressable
                  style={styles2.imagePicker}
                  onPress={handleImagePicker}>
                  <Text>Seleccionar Imagen</Text>
                </Pressable>
              )}
              {productImage && (
                <View>
                  <Image
                    style={styles2.imagePicker}
                    source={{uri: productImage}}
                  />
                  <Pressable
                    style={styles2.changeImageBtn}
                    onPress={handleImagePicker}>
                    <Text style={styles2.changeImageTxt}>Cambiar imagen</Text>
                  </Pressable>
                </View>
              )}
            </View>
            <TextInput
              style={styles2.inputProductTxt}
              placeholder="Nombre del producto"
              placeholderTextColor="white"
              numberOfLines={3}
              multiline={true}
              onChangeText={text => {
                setProduct({...product, name: text});
              }}
              value={product.name}
            />
            <TextInput
              style={[styles2.inputProductTxt, styles2.inputProductTxtArea]}
              placeholderTextColor="white"
              multiline={true}
              numberOfLines={4}
              placeholder="Descripción"
              onChangeText={text => setProduct({...product, description: text})}
              value={product.description}
            />
            <Picker
              style={styles2.pickerCategory}
              selectedValue={selectedCategory}
              onValueChange={handlePickerChange}>
              <Picker.Item label="Categoría" value="" />
              {categories.map(category => (
                <Picker.Item
                  key={category.key}
                  label={category.key}
                  value={category.key}
                />
              ))}
            </Picker>
            <TextInput
              placeholderTextColor="white"
              style={[styles2.inputProductTxt, styles2.inputProductTxtArea]}
              multiline={true}
              numberOfLines={8}
              placeholder="Caracteristicas (Separadas por un punto y coma)"
              onChangeText={text => {
                const features = text.split(';');
                setProduct({...product, features});
              }}
              value={
                product.features.length > 0 ? product.features.join(';') : ''
              }
            />
            <Text style={styles2.labelInputPr}>Métodos de pago aceptados</Text>
            <Text>Selecciona uno o varios métodos</Text>
            <View style={styles2.paymentContainer}>
              {paymentMethods.map((item, index) => (
                <Pressable
                  key={index}
                  style={[
                    styles2.paymentMethod,
                    selectedPaymentMethods.includes(item.name) &&
                      styles2.paymentMethodSelected,
                  ]}
                  onPress={() => handlePaymentMethodChange(item.name)}>
                  <View style={styles2.paymentMethodContent}>
                    <Icon
                      name={item.icon}
                      size={30}
                      color="white"
                      style={styles2.paymentIcon}
                    />
                    <Text style={styles2.paymentText}>{item.name}</Text>
                    {selectedPaymentMethods.includes(item.name) && (
                      <Icon
                        name="check"
                        size={15}
                        color="white"
                        style={styles2.checkIcon}
                      />
                    )}
                  </View>
                </Pressable>
              ))}
            </View>
            <TextInput
              keyboardType="numeric"
              placeholder="Precio"
              style={styles2.inputProductTxt}
              onChangeText={text => {
                const price = parseInt(text, 10);
                setProduct({...product, price: isNaN(price) ? 0 : price});
              }}
              maxLength={8}
              value={product.price.toString()}
            />
            <View style={styles2.paymentContainer}>
              <View>
                <Text style={styles2.labelInputPr2}>¿Está en oferta?</Text>
                <Pressable
                  style={styles2.offerButton}
                  onPress={() => {
                    setIsOffer(!isOffer);
                    setProduct({
                      ...product,
                      offer: {isOffer: !isOffer, discount: 0},
                    });
                  }}>
                  <Text>{isOffer ? 'Sí' : 'No'}</Text>
                </Pressable>
              </View>
              <View>
                <Text style={styles2.labelInputPr2}>Estado</Text>
                <Pressable
                  style={styles2.offerButton}
                  onPress={() => {
                    setIsAvailable(!isAvailable);
                    setProduct({
                      ...product,
                      status: isAvailable ? 'No disponible' : 'Disponible',
                    });
                  }}>
                  <Text>{isAvailable ? 'Disponible' : 'No disponible'}</Text>
                </Pressable>
              </View>
            </View>
            {isOffer && (
              <TextInput
                placeholder="Descuento"
                keyboardType="numeric"
                maxLength={2}
                onChangeText={text => {
                  const discount = parseInt(text, 10);
                  setProduct({
                    ...product,
                    offer: {
                      isOffer: true,
                      discount: isNaN(discount) ? 0 : discount,
                      priceInOffer:
                        product.price - (product.price * discount) / 100,
                    },
                  });
                }}
                value={product.offer.discount.toString()}
                style={styles2.inputProductTxt}
              />
            )}
            <View>
              {!infoFetched && (
                <Pressable
                  style={styles2.btnProduct}
                  onPress={handleSaveProduct}>
                  <Text style={styles2.btnProductTxt}>
                    {loading ? (
                      <ActivityIndicator size="small" color="white" />
                    ) : (
                      'Confirmar cambios'
                    )}
                  </Text>
                </Pressable>
              )}
              {infoFetched && (
                <Pressable
                  style={styles2.btnProduct2}
                  onPress={handleUploadProduct}>
                  <Text style={styles2.btnProductTxt}>Subir Producto</Text>
                </Pressable>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
