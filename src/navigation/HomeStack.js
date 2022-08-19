import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Strings from '../constants/Strings/Strings';
import Colors from '../constants/Colors/Colors';
import HomeScreen from '../screens/HomeScreen';
import SpecialOfferScreen from '../screens/SpecialOfferScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SpecialOffer"
        component={SpecialOfferScreen}
        options={{
          headerTitle: Strings.topDeals,
          headerTintColor: Colors.primaryColor,
        }}
      />
      <Stack.Screen
        name="ProductDetailScreen"
        component={ProductDetailScreen}
        options={({route}) => ({
          headerTitle: route.params.title,
          headerTintColor: Colors.primaryColor,
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
