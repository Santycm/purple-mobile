import React from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollViewBase} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';

const getPaymentIcon = payment => {
  switch (payment.toLowerCase()) {
    case 'tarjeta':
      return 'card';
    case 'efectivo':
      return 'cash';
    case 'paypal':
      return 'logo-paypal';
    default:
      return 'cash';
  }
};

export const ProductInfo = ({route, navigation}) => {
  const {product} = route.params;

  return (
    <View style={styles2.bgScreen2}>
      <TouchableOpacity
        style={styles2.btnBack}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="arrow-back" size={30} color="white" />
      </TouchableOpacity>
      <ScrollView>
        <View style={styles2.productContainer}>
          <View style={styles2.bgImgProduct}>
            <Image source={product.img} style={styles2.imgProductPage} />
            {product.offer && (
              <View style={styles2.discountContainer}>
                <Text style={styles2.textDiscount}>
                  -{product.offer.discount}%
                </Text>
              </View>
            )}
          </View>
          <View>
            <Text style={styles2.titleTextPageProduct}>
              {product.description}
            </Text>
            <Text style={styles2.textCategory}>{product.category}</Text>
            <View style={styles2.containerRow}>
              <Text style={styles2.textPricePageProduct}>
                $ {product.price}
              </Text>
              <TouchableOpacity style={styles2.btnAddCart}>
                <Text style={styles2.textBtn}>Agregar al carrito</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles2.textCharacteristics}>
              {product.characteristics}
            </Text>
            <Text style={styles2.textTitle}>Medios de pago aceptados</Text>
            <View style={[styles2.containerRow, styles2.containerRowWrap]}>
              {product.paymentAccepted.map((payment, index) => (
                <View
                  key={index}
                  style={[styles2.containerRow, styles2.containerPayment]}>
                  <Icon
                    name={getPaymentIcon(payment)}
                    size={20}
                    color="white"
                  />
                  <Text style={styles2.textPayment}>{payment}</Text>
                </View>
              ))}
            </View>
            <View>
              <Text style={styles2.textTitle}>Haz una pregunta</Text>
              <TextInput
                style={styles2.textArea}
                placeholder="Escribe tu pregunta aquí..."
                multiline={true}
                numberOfLines={3}
              />
              <TouchableOpacity style={styles2.btnAddCart}>
                <Text style={styles2.textBtn}>Enviar</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles2.textTitle}>Comentarios</Text>
              <Text>Dejar un comentario</Text>
              <TextInput
                style={styles2.textArea}
                placeholder="Escribe tu comentario aquí..."
                multiline={true}
                numberOfLines={3}/>
              <TouchableOpacity style={styles2.btnAddCart}>
                <Text style={styles2.textBtn}>Enviar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
