import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image, Linking} from 'react-native';
import AppStyles from '../styles/AppStyles';

export const ConfirmPurchase = ({navigation, route }) => {
  const [loading, setLoading] = useState(false);
  const {paymentInfo} = route.params;

  const fetchMPApi = async () => {
    const payer = {
      email: paymentInfo.payer.email,
      identificationNumber: '123456789',
      name: paymentInfo.payer.name,
      surname: paymentInfo.payer.lastname,
    };
    try {
      const response = await fetch(
        'https://api.mercadopago.com/checkout/preferences',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer  APP_USR-7340539240119710-102417-9b9100851f427ee503f2ed317f2601ce-2055222693',
          },
          body: JSON.stringify({
            items: paymentInfo.items.map(item => ({
              title: item.title,
              description: item.description,
              quantity: item.quantity,
              currency_id: 'COP',
              unit_price: item.unit_price,
            })),
            payer: payer,
            back_urls: {
              success: 'https://www.mercadopago.com',
              failure: 'https://www.mercadopago.com',
              pending: 'https://www.mercadopago.com',
            },
            auto_return: 'approved',
          }),
        },
      );

      const data = await response.json();
      const openURL = data.init_point;
      Linking.openURL(openURL);
      setLoading(false);
      navigation.navigate('PurchaseSuccess');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchMPApi();
  }, []);

  return (
    <View style={AppStyles.containerConfirm}>
      <Image
        source={require('../assets/confirm/icon.png')}
        style={AppStyles.successImage}
      />
      <View style={AppStyles.innerContainerConfirm}>
        <Text style={AppStyles.successMessageConfirm}>
          Será redirigido a Mercado Pago...
        </Text>
        {loading && <ActivityIndicator size="large" color="#0000ff" />}
      </View>
    </View>
  );
};
