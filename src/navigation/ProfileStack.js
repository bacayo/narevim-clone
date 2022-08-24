import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import Colors from '../constants/Colors/Colors';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  const {user} = useSelector(state => state.loginSlice);

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
        </>
      )}
    </Stack.Navigator>
  );
};

export default ProfileStack;
