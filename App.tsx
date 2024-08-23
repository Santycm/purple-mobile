import React from 'react';
import {View, Text} from 'react-native';

import {Home} from './src/screens/Home.js';
import {Cart} from './src/screens/Cart.js';
import {SigIn} from './src/screens/SignIn.js';
import {SignUp} from './src/screens/SignUp.js';
import {MyProfile} from './src/screens/MyProfile.js';
import {ProductInfo} from './src/screens/ProductInfo.js';
import {DeliveryScreen} from './src/screens/DeliveryScreen.js';
import {Payment} from './src/screens/Payment.js';
import {Arrival} from './src/screens/ArrivalDay.js';
import {MyPurchases} from './src/screens/MyPurchases.js';
import {MyFavorites} from './src/screens/MyFavorites.js';
import {ConfirmPurchase} from './src/screens/ConfirmPurchase.js';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Navbar} from './src/components/Navbar.js';
import {SearchProduct} from './src/screens/SearchProduct.js';
import {Offerts} from './src/screens/Offers.js';

Offerts

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductInfo"
          component={ProductInfo}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SearchProduct"
          component={SearchProduct}
          options={{
            header: ({navigation}) => <Navbar navigation={navigation} />,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: ({navigation}) => <Navbar navigation={navigation} />,
          }}
        />

        <Stack.Screen
          name="Login"
          component={SigIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Delivery"
          component={DeliveryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Arrival"
          component={Arrival}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyPurchases"
          component={MyPurchases}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MyFavorites"
          component={MyFavorites}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmPurchase"
          component={ConfirmPurchase}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Offerts"
          component={Offerts}
          options={{headerShown: false}}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}
