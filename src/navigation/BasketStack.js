import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import BasketScreen from '../screens/BasketScreen';

const BasketStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default BasketStack;
