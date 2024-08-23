import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, TextInput, ScrollViewBase} from 'react-native';
import {styles2} from '../styles/AppStyles2';
import Icon from 'react-native-vector-icons/FontAwesome';

import {ScrollView} from 'react-native-gesture-handler';


const getPaymentIcon = payment => {
  switch (payment.toLowerCase()) {
    case 'tarjeta':
      return 'credit-card';
    case 'efectivo':
      return 'money';
    default:
      return 'money';
  }
};

export const ProductInfo = ({route, navigation}) => {
  const {product} = route.params;

  const [rating, setRating] = useState(0);

  const handleStarPress = newRating => {
    setRating(newRating);
  };

  return (
    <View style={styles2.bgScreen2}>
      <TouchableOpacity
        style={styles2.btnBack}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Icon name="arrow-left" size={30} color="white" />
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
                ${' '}
                {product.price.toString().length > 8
                  ? product.price.toString().substring(0, 8) + '...'
                  : product.price}
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
            <View style={styles2.containerSectionProduct}>
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
                numberOfLines={3}
              />
              <Text>Calificar</Text>
              <View
                style={[styles2.containerRow, styles2.containerSectionProduct]}>
                {[...Array(5)].map((_, i) => (
                  <TouchableOpacity
                    key={i}
                    onPress={() => handleStarPress(i + 1)}>
                    <Icon
                      name={i < rating ? 'star' : 'star-o'}
                      type="font-awesome"
                      color="gold"
                      size={30}
                    />
                  </TouchableOpacity>
                ))}
              </View>

              <TouchableOpacity
                style={[styles2.btnAddCart, styles2.containerSectionProduct]}>
                <Text style={styles2.textBtn}>Enviar</Text>
              </TouchableOpacity>

              <View>
                <Text>Ultimos comentarios</Text>
                {product.comments.map((comment, index) => (
                  <View
                    key={index}
                    style={[
                      styles2.containerRowStart,
                      styles2.containerComment,
                    ]}>
                    <Image
                      source={require('../assets/userProfile.webp')}
                      style={styles2.imgCommentProfile}
                    />
                    <View>
                      <Text style={styles2.textTitle}>{comment.user}</Text>
                      <Text>{comment.comment}</Text>
                      <View style={styles2.containerRow}>
                        <Text style={styles2.textSecondary}>Calificación:</Text>

                        {[...Array(5)].map((_, i) => (
                          <Icon
                            key={i}
                            name={i < comment.score ? 'star' : 'star-o'}
                            type="font-awesome"
                            color="gold"
                          />
                        ))}
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
