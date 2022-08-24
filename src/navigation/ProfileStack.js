import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MyProfileScreen from '../screens/MyProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';

const ProfileStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
