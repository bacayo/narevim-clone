import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import BasketScreen from './screens/BasketScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import MyProfileScreen from './screens/MyProfileScreen';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Colors from './constants/Colors/Colors';
import Strings from './constants/Strings/Strings';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // tab bar icons
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            size = 30;
            if (route.name === 'HomeScreen') {
              iconName = 'home';
            } else if (route.name === 'CategoriesScreen') {
              iconName = 'category';
            } else if (route.name === 'BasketScreen') {
              iconName = 'shopping-basket';
            } else if (route.name === 'MyProfileScreen') {
              iconName = 'account-circle';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="CategoriesScreen"
          component={CategoriesScreen}
          options={{
            headerTitle: Strings.categories,
            headerTitleAlign: 'center',
            headerTintColor: Colors.primaryColor,
            headerStyle: {
              borderBottomColor: Colors.primaryColor,
              borderBottomWidth: 1,
            },
          }}
        />
        <Tab.Screen name="BasketScreen" component={BasketScreen} />
        <Tab.Screen name="MyProfileScreen" component={MyProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
