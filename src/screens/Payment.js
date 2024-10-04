import React, {useState, useContext} from 'react';
import {View, Text, Pressable, Image, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AppStyles from '../styles/AppStyles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import {UserContext} from '../context/UserContext.js';
import { dbMarket } from '../assets/dbMarket.js';

export const Payment = ({navigation}) => {
  const [userState, userDispatch] = useContext(UserContext);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [captchaChecked, setCaptchaChecked] = useState(false);

  const handlePress = paymentMethod => {
    setSelectedPayment(paymentMethod);
  };

  const handleCaptchaChange = () => {
    setCaptchaChecked(!captchaChecked);
  };

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const getTotalPrice = cart => {
    return formatPrice(
      cart.reduce((total, product) => {
        const price = product.offer
          ? product.offer.priceInOffer
          : product.price;
        return total + price * product.quantity;
      }, 0),
    );
  };

  const handleAddressView = () => {
    const isAddress = userState.dbMarket.find(user => user.userName === userState.user.userName).address

    const isPointDelivery = userState.dbMarket.find(user => user.userName === userState.user.userName).pointDelivery

    if (isAddress) {
      return (
        <Text style={AppStyles.addressText}>
          Envío a domicilio:{' '}
          {
            userState.dbMarket.find(
              user => user.userName === userState.user.userName,
            ).address
          }
        </Text>
      );
      
    } else if (isPointDelivery) {
      return (
        <Text style={AppStyles.addressText}>
          Retiro en punto de entrega:{' '}
          {
            userState.dbMarket.find(
              user => user.userName === userState.user.userName,
            ).pointDelivery
          }
        </Text>
      );
    }
  };

  let distribuitorsList = userState.dbMarket
    .filter(user =>
      user.products.some(product =>
        userState.cart.some(cartItem => cartItem.id === product.id),
      ),
    )
    .map(user => user.name);

    distribuitorsList = new Set(distribuitorsList);

  const handleFinishPurchase = () => {
    if (!captchaChecked) {
      alert('Debes confirmar que no eres un robot');
      return;
    }

    if (!selectedPayment) {
      alert('Debes seleccionar un método de pago');
      return;
    }

    const isPointDelivery = userState.dbMarket.find(
      user => user.userName === userState.user.userName,
    ).pointDelivery;

    const isAddress = userState.dbMarket.find(
      user => user.userName === userState.user.userName,
    ).address;

    if(!isPointDelivery && !isAddress){
      alert('Debes seleccionar un punto de entrega');
      return;
    }

    userState.cart.forEach(cartItem => {
      const user = userState.user;

      //ADD TO MYPURCHASES
      if (user) {
        userDispatch({
          type: 'ADD_PURCHASE',
          payload: {
            product: cartItem.name,
            img: cartItem.img,
            date: new Date().toISOString(),
            price:
              (cartItem.offer.isOffer
                ? cartItem.offer.priceInOffer
                : cartItem.price) * cartItem.quantity,
            status: 'En tránsito',
            count: cartItem.quantity,
            paymentMethod: selectedPayment,
            distribuitor: userState.dbMarket.find(user =>
              user.products.some(product => product.id === cartItem.id),
            ).name,
          },
        });
      }

      //ADD TO CLIENTPURCHASES
      userDispatch({type:'ADD_CLIENT_PURCHASE', payload: {
        productP: cartItem.name,
        img: cartItem.img,
        date: new Date().toISOString(),
        price:
          (cartItem.offer.isOffer
            ? cartItem.offer.priceInOffer
            : cartItem.price) * cartItem.quantity,
        status: 'En tránsito',
        count: cartItem.quantity,
        paymentMethod: selectedPayment,
        distribuitor: userState.dbMarket.find(user =>
          user.products.some(product => product.id === cartItem.id),
        ).userName,
        client: userState.user.name + ' ' + userState.user.lastName
      }});
    });

  
    navigation.navigate('ConfirmPurchase');
    userDispatch({type: 'CLEAR_CART'});
  };

  const formatPrice = price => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <ScrollView
      contentContainerStyle={AppStyles.scrollViewContainerPaymentScreen}>
      <View style={AppStyles.modalContainerPaymentScreen}>
        <Pressable
          style={AppStyles.backButtonPaymentScreen}
          onPress={() => navigation.goBack()}>
          <Icon name="arrow-undo-circle-outline" size={50} color="#6A0DAD" />
        </Pressable>

        <View style={AppStyles.modalContentScreen}>
          <Text style={AppStyles.modalTitleScreen}>RESUMEN DE TU COMPRA</Text>
          <View>
            {userState.cart.map(item => (
              <View style={AppStyles.purchaseSummaryItemScreen} key={item.id}>
                <Image
                  source={{uri: item.img}}
                  style={AppStyles.purchaseSummaryImageScreen}
                />
                <View>
                  <Text style={AppStyles.purchaseSummaryTextScreen}>
                    {truncateText(item.name, 30)}
                  </Text>
                  <Text>
                    {item.offer.isOffer
                      ? formatPrice(item.offer.priceInOffer)
                      : formatPrice(item.price)}{' '}
                    x {item.quantity}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <Text style={AppStyles.totalAmountScreen}>
            Total: {getTotalPrice(userState.cart)}
          </Text>

          <Text style={AppStyles.modalTitleSecond}>Información de envío</Text>
          <View style={AppStyles.addressContainer}>
            {handleAddressView()}
            <Text style={AppStyles.addressText}>
              Distribuidores:{' '}
              {userState.dbMarket
                .filter(user =>
                  user.products.some(product =>
                    userState.cart.some(cartItem => cartItem.id === product.id),
                  ),
                )
                .map(user => user.name)
                .join(', ')}
            </Text>
            <Text style={AppStyles.addressText}>
              Cliente: {userState.user.name} {userState.user.lastName}
            </Text>
          </View>

          <Text style={AppStyles.modalTitleScreen}>¿Cómo quieres pagar?</Text>
          <View style={AppStyles.paymentOptionsContainerScreen}>
            <Pressable
              style={
                selectedPayment === 'Tarjeta de débito'
                  ? AppStyles.paymentOptionActiveScreen
                  : AppStyles.paymentOptionInactiveScreen
              }
              onPress={() => handlePress('Tarjeta de débito')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/1087/1087080.png',
                }}
                style={AppStyles.paymentImageScreen}
              />
              <Text style={AppStyles.paymentTextScreen}>Tarjeta de débito</Text>
            </Pressable>
            <Pressable
              style={
                selectedPayment === 'Tarjeta de crédito'
                  ? AppStyles.paymentOptionActiveScreen
                  : AppStyles.paymentOptionInactiveScreen
              }
              onPress={() => handlePress('Tarjeta de crédito')}>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/3393/3393981.png',
                }}
                style={AppStyles.paymentImageScreen}
              />
              <Text style={AppStyles.paymentTextScreen}>
                Tarjeta de crédito
              </Text>
            </Pressable>
            <Pressable
              style={
                selectedPayment === 'Efecty'
                  ? AppStyles.paymentOptionActiveScreen
                  : AppStyles.paymentOptionInactiveScreen
              }
              onPress={() => handlePress('Efecty')}>
              <Image
                source={{
                  uri: 'https://seeklogo.com/images/E/efecty-colombia-logo-C4C6532B80-seeklogo.com.png',
                }}
                style={AppStyles.paymentImageScreen}
              />
              <Text style={AppStyles.paymentTextScreen}>Efecty</Text>
            </Pressable>
            <Pressable
              style={
                selectedPayment === 'Transferencia con PSE'
                  ? AppStyles.paymentOptionActiveScreen
                  : AppStyles.paymentOptionInactiveScreen
              }
              onPress={() => handlePress('Transferencia con PSE')}>
              <Image
                source={{
                  uri: 'https://seeklogo.com/images/P/pse-logo-B00717880A-seeklogo.com.png',
                }}
                style={AppStyles.paymentImageScreen}
              />
              <Text style={AppStyles.paymentTextScreen}>
                Transferencia con PSE
              </Text>
            </Pressable>
          </View>

          <View style={AppStyles.captchaContainerScreen}>
            <Image
              source={{
                uri: 'https://www.drupal.org/files/project-images/captcha.png',
              }}
              style={AppStyles.captchaImageScreen}
            />
            <View style={AppStyles.captchaCheckboxContainerScreen}>
              <CheckBox
                value={captchaChecked}
                onValueChange={handleCaptchaChange}
                style={AppStyles.captchaCheckboxScreen}
              />
              <Text style={AppStyles.captchaTextScreen}>No soy un robot</Text>
              {captchaChecked && (
                <Icon
                  name="checkmark-circle-outline"
                  size={24}
                  color="#6A0DAD"
                />
              )}
            </View>
          </View>

          <Pressable
            style={AppStyles.continueButtonScreen}
            onPress={handleFinishPurchase}>
            <Text style={AppStyles.continueButtonTextScreen}>Continuar</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};
