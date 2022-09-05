import React from 'react';
import {Text, Pressable} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Colors from '../constants/Colors/Colors';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountScreen from '../screens/AccountScreen';
import AddressScreen from '../screens/AddressScreen';
import AddAddresScreen from '../screens/AddAddressScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import UserInfoScreen from '../screens/UserInfoScreen';
import {getCityAsync, getTownAsync} from '../api';
import Strings from '../constants/Strings/Strings';
import StringScreens from '../constants/Strings/StringScreens';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  const {user} = useSelector(state => state.loginSlice);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //* navigate to add address screen
  const navigateAddAddressScreen = () => {
    navigation.navigate('AddAddressScreen');
    dispatch(getCityAsync());
    dispatch(getTownAsync({id: '1'}));
  };

  return (
    <Stack.Navigator>
      {user === undefined ? (
        <>
          <Stack.Screen
            name={StringScreens.loginScreen}
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
            name={StringScreens.accountScreen}
            component={AccountScreen}
            options={{
              headerBackVisible: false,
              title: Strings.account,
              headerTintColor: Colors.primaryColor,
            }}
          />
          <Stack.Screen
            name={StringScreens.addressScreen}
            component={AddressScreen}
            options={{
              title: Strings.address,
              headerTintColor: Colors.primaryColor,
              headerRight: () => (
                <Pressable onPress={navigateAddAddressScreen}>
                  <Text style={{color: Colors.primaryColor}}>Adres Ekle</Text>
                </Pressable>
              ),
            }}
          />
          <Stack.Screen
            name={StringScreens.addAddressScreen}
            component={AddAddresScreen}
            options={{
              title: 'Adres Ekle',
              headerTintColor: Colors.primaryColor,
            }}
          />
          <Stack.Screen
            name={StringScreens.favoritesScreen}
            component={FavoritesScreen}
            options={{
              title: Strings.favoriteProducts,
              headerTintColor: Colors.primaryColor,
            }}
          />
          <Stack.Screen
            name={StringScreens.userInfoScreen}
            component={UserInfoScreen}
            options={{
              title: Strings.userInfo,
              headerTintColor: Colors.primaryColor,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ProfileStack;
