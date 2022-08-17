import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import BasketScreen from './screens/BasketScreen';
import MyProfileScreen from './screens/MyProfileScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import SecondCategories from './screens/SecondCategoriesScreen';
import ThirdCategoriesScreen from './screens/ThirdCategoriesScreen';
import SpecialOffer from './screens/SpecialOfferScreen';

import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Colors from './constants/Colors/Colors';
import Strings from './constants/Strings/Strings';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Home = () => {
  return (
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
          title: Strings.homeScreen,
        }}
      />
      <Tab.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{
          title: Strings.categories,
          headerTitle: Strings.categories,
          headerTitleAlign: 'center',
          headerTintColor: Colors.primaryColor,
          headerStyle: {
            borderBottomColor: Colors.primaryColor,
            borderBottomWidth: 1,
          },
        }}
      />
      <Tab.Screen
        name="BasketScreen"
        component={BasketScreen}
        options={{title: Strings.basket}}
      />
      <Tab.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{title: Strings.account}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SecondCategories"
          component={SecondCategories}
          options={({route}) => ({
            headerTitleAlign: 'center',
            headerTintColor: Colors.primaryColor,
            headerTitle: route.params.title,
          })}
        />
        <Stack.Screen
          name="ThirdCategoriesScreen"
          component={ThirdCategoriesScreen}
          options={({route}) => ({
            headerTitle: route.params.title,
            headerTintColor: Colors.primaryColor,
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen name="SpecialOffer" component={SpecialOffer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
