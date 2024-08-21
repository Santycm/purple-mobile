import React from 'react';
import {View, Text} from 'react-native';
import { Home } from './src/screens/Home.js';
import {Cart} from './src/screens/Cart.js';
import { Sigin } from './src/screens/Signin.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Navbar } from './src/components/Navbar.js';


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
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
