import { View, Text } from 'react-native'
import React from 'react'

export const ProductClientComponent = (item) => {
  return (
    <View style={AppStyles.purchaseItem}>
      <View style={AppStyles.imageContainer}>
        {/*<Image source={{uri: item.img}} style={AppStyles.image} />*/}
      </View>
      <View style={AppStyles.purchaseDetails}>
        <Text style={AppStyles.dateText}>
          Fecha: 11/22/2021 12:00
        </Text>
        <Text style={AppStyles.productName} numberOfLines={1}>
          product
        </Text>
        <Text style={AppStyles.productPrice}>
          Precio:{formatPrice(item.price)}
        </Text>
        <View>
          <View style={AppStyles.statusContainer}>
            <Text style={AppStyles.productStatusLabel}>Estado:</Text>
            <Text style={[AppStyles.productStatusValue, statusStyle]}>
              estadoprueba
            </Text>
          </View>
          <View style={AppStyles.statusContainer}>
            <Text style={AppStyles.productStatusLabel}>Distribuidor:</Text>
            <Text>distribuitor</Text>
          </View>
          <View style={AppStyles.statusContainer}>
            <Text style={AppStyles.productStatusLabel}>Medio de pago:</Text>
            <Text>pago</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

