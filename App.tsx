import React from 'react';

import {Home} from './src/screens/Home.js';
import {Cart} from './src/screens/Cart.js';
import {SigIn} from './src/screens/SignIn.js';
import {SignUp} from './src/screens/SignUp.js';
import {MyProfile} from './src/screens/MyProfile.js';
import {ProductInfo} from './src/screens/ProductInfo.js';
import {DeliveryScreen} from './src/screens/DeliveryScreen.js';
import {Payment} from './src/screens/Payment.js';
import {MyPurchases} from './src/screens/MyPurchases.js';
import {MyFavorites} from './src/screens/MyFavorites.js';
import {ConfirmPurchase} from './src/screens/ConfirmPurchase.js';
import CategoryScreen from './src/screens/CategoryScreen.js';
import {ConfirmHelp} from './src/screens/ConfirmHelp.js';

import {Help} from './src/screens/HelpSupport.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Navbar} from './src/components/Navbar.js';
import {SearchProduct} from './src/screens/SearchProduct.js';
import {Offers} from './src/screens/Offers.js';
import {Categories} from './src/screens/Categories.js';

import { MyProducts } from './src/screens/MyProducts.js';
import { ProductForm } from './src/screens/ProductForm.js';

//Context
import {UserProvider} from './src/context/UserContext.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="MyProducts"
            component={MyProducts}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductForm"
            component={ProductForm}
            options={{headerShown: false}}
          />
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
              header: ({navigation}: {navigation: any}) => (
                <Navbar navigation={navigation} />
              ),
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              header: ({navigation}: {navigation: any}) => (
                <Navbar navigation={navigation} />
              ),
            }}
          />
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{
              header: ({navigation}: {navigation: any}) => (
                <Navbar navigation={navigation} />
              ),
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
            name="MyPurchases"
            component={MyPurchases}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="MyFavorites"
            component={MyFavorites}
            options={{
              header: ({navigation}: {navigation: any}) => (
                <Navbar navigation={navigation} />
              ),
            }}
          />
          <Stack.Screen
            name="ConfirmPurchase"
            component={ConfirmPurchase}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="Help"
            component={Help}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ConfirmHelp"
            component={ConfirmHelp}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Offers"
            component={Offers}
            options={{
              header: ({navigation}: {navigation: any}) => (
                <Navbar navigation={navigation} />
              ),
            }}
          />
          <Stack.Screen
            name="CategoryScreen"
            component={CategoryScreen}
            options={{
              header: ({navigation}: {navigation: any}) => (
                <Navbar navigation={navigation} />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
