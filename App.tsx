import React from 'react';
import {View, Text} from 'react-native';
import { Home } from './src/screens/Home.js';
import {Cart} from './src/screens/Cart.js';
import { Sigin } from './src/screens/Signin.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navbar } from './src/components/Navbar.js';
import { DeliveryScreen } from './src/screens/DeliveryScreen.js';
import { Payment } from './src/screens/Payment.js';
import { Arrival } from './src/screens/ArrivalDay.js';
import { MyPurchases } from './src/screens/MyPurchases.js';
import { MyFavorites } from './src/screens/MyFavorites.js';


MyFavorites



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: ({navigation}) => <Navbar navigation={navigation} />,
          }}
        />
        
        <Stack.Screen
          name="Login"
          component={Sigin}
          options={{headerShown: false }}
        />
        <Stack.Screen 
        name="Cart" 
        component={Cart}
        options={{headerShown: false }} 
        />
        <Stack.Screen 
        name="Delivery" 
        component={DeliveryScreen}
        options={{headerShown: false }} 
        />
        <Stack.Screen 
        name="Payment" 
        component={Payment}
        options={{headerShown: false }} 
        />
        <Stack.Screen 
        name="Arrival" 
        component={Arrival}
        options={{headerShown: false }} 
        />
        <Stack.Screen 
        name="MyPurchases" 
        component={MyPurchases}
        options={{headerShown: false }} 
        />
        
        <Stack.Screen 
        name="MyFavorites" 
        component={MyFavorites}
        options={{headerShown: false }} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
