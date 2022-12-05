import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {getCityAsync, getTownAsync} from '../api';
import Colors from '../constants/Colors/Colors';
import StringScreens from '../constants/Strings/StringScreens';
import BasketScreen from '../screens/BasketScreen';
import SelectAddressScreen from '../screens/SelectAddressScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import CreditCardScreen from '../screens/CreditCardScreen';
import Strings from '../constants/Strings/Strings';

const BasketStack = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigateAddAddressScreen = () => {
    navigation.navigate('AddAddressScreen');
    dispatch(getCityAsync());
    dispatch(getTownAsync({id: '1'}));
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{title: 'Sepetim'}}
      />
      <Stack.Screen
        name={StringScreens.selectAddressScreen}
        component={SelectAddressScreen}
        options={{
          title: 'Adres Seçimi',
          headerTintColor: Colors.primaryColor,
          headerRight: () => (
            <Pressable onPress={navigateAddAddressScreen}>
              <Text style={{color: Colors.primaryColor}}>Adres Ekle</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen
        name={StringScreens.paymentMethodScreen}
        component={PaymentMethodScreen}
        options={{
          title: Strings.paymentMethod + '-' + Strings.cargo,
          headerTintColor: Colors.primaryColor,
        }}
      />
      <Stack.Screen
        name={StringScreens.creditCardScreen}
        component={CreditCardScreen}
      />
    </Stack.Navigator>
  );
};

export default BasketStack;
