import React from 'react';
import {Text, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Colors from '../constants/Colors/Colors';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountScreen from '../screens/AccountScreen';
import AddressScreen from '../screens/AddressScreen';
import AddAddresScreen from '../screens/AddAddressScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import UserInfoScreen from '../screens/UserInfoScreen';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  const {user} = useSelector(state => state.loginSlice);

  const navigation = useNavigation();

  //* navigate to add address screen
  const navigateAddAddressScreen = () => {
    navigation.navigate('AddAddressScreen');
  };

  return (
    <Stack.Navigator>
      {user === undefined ? (
        <>
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{
              headerShown: false,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="AccountScreen"
            component={AccountScreen}
            options={{
              headerBackVisible: false,
              headerTitle: 'Hesabım',
              headerTintColor: Colors.primaryColor,
            }}
          />
          <Stack.Screen
            name="AddressScreen"
            component={AddressScreen}
            options={{
              headerTitle: 'Adreslerim',
              headerTintColor: Colors.primaryColor,
              headerRight: () => (
                <Pressable onPress={navigateAddAddressScreen}>
                  <Text style={{color: Colors.primaryColor}}>Adres Ekle</Text>
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name="AddAddressScreen"
            component={AddAddresScreen}
            options={{
              title: 'Adres Ekle',
              headerTintColor: Colors.primaryColor,
            }}
          />
          <Stack.Screen name="FavoritesScreen" component={FavoritesScreen} />
          <Stack.Screen
            name="UserInfoScreen"
            component={UserInfoScreen}
            options={{
              title: 'Kullanıcı Bilgileri',
              headerTintColor: Colors.primaryColor,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ProfileStack;
