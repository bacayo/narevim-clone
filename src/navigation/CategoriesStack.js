import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import CategoriesScreen from '../screens/CategoriesScreen';
import SecondCategories from '../screens/SecondCategoriesScreen/SecondCategories';
import ThirdCategoriesScreen from '../screens/ThirdCategoriesScreen';
import Strings from '../constants/Strings/Strings';
import Colors from '../constants/Colors/Colors';

const Stack = createNativeStackNavigator();

const CategoriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CategoryScreen"
        component={CategoriesScreen}
        options={{
          title: Strings.categories,
          headerTitle: Strings.categories,
          headerTitleAlign: 'center',
          headerTintColor: Colors.primaryColor,
        }}
      />
      <Stack.Screen
        name="SecondCategories"
        component={SecondCategories}
        options={({route}) => ({
          headerTitle: route.params.title,
          headerTintColor: Colors.primaryColor,
        })}
      />
      <Stack.Screen
        name="ThirdCategoriesScreen"
        component={ThirdCategoriesScreen}
        options={({route}) => ({
          headerTitle: route.params.title,
          headerTintColor: Colors.primaryColor,
        })}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStack;
