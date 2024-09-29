import React, {useState, useContext} from 'react';
import {View, Text, Pressable, Image, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AppStyles from '../styles/AppStyles.js';
import Icon from 'react-native-vector-icons/Ionicons';
import {UserContext} from '../context/UserContext.js';

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
    if (userState.user.address) {
      return (
        <Text style={AppStyles.addressText}>
          Envío a domicilio: {userState.user.address}
        </Text>
      );
    } else {
      return (
        <Text style={AppStyles.addressText}>
          Retiro en punto de entrega: {userState.user.pointDelivery}
        </Text>
      );
    }
  };

  const distribuitorsList = userState.dbMarket
    .filter(user =>
      user.products.some(product =>
        userState.cart.some(cartItem => cartItem.id === product.id),
      ),
    )
    .map(user => user.name);

  const handleFinishPurchase = () => {
    if (!captchaChecked) {
      alert('Debes confirmar que no eres un robot');
      return;
    }

    if (!selectedPayment) {
      alert('Debes seleccionar un método de pago');
      return;
    }

    if (!userState.user.address && !userState.user.pointDelivery) {
      alert('Debes seleccionar un método de entrega');
      return;
    }

    

    //ADD TO MYPURCHASES
    userState.cart.forEach(cartItem => {
      const user = userState.user;

      const distribuitorUser = userState.dbMarket.find(user =>
        distribuitorsList.some(
          distributor => distributor.userName === user.userName,
        ),
      );

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
            paymentMethod: selectedPayment,
            distribuitor: distribuitorUser ? distribuitorUser.name : 'Tienda',
          },
        });
      }
    });

    
    //ADD TO CLIENTPURCHASES
    userState.cart.forEach(cartItem => {
      const user = userState.dbMarket.find(user =>
        distribuitorsList.some(
          distributor => distributor.userName === user.userName,
        ),
      );

      if (user) {
        user.clientPurchases.push({
          product: cartItem.name,
          img: cartItem.img,
          quantity: cartItem.quantity,
          date: new Date().toISOString(),
          price:
            (cartItem.offer.isOffer
              ? cartItem.offer.priceInOffer
              : cartItem.price) * cartItem.quantity,
          state: 'En tránsito',
          paymentMethod: selectedPayment,
        });
      }
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
