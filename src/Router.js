import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BasketScreen from './screens/BasketScreen';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import Colors from './constants/Colors/Colors';
import Strings from './constants/Strings/Strings';
import CategoriesStack from './navigation/CategoriesStack';
import HomeStack from './navigation/HomeStack';
import ProfileStack from './navigation/ProfileStack';
import BasketStack from './navigation/BasketStack';

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
            if (route.name === 'HomeStack') {
              iconName = 'home';
            } else if (route.name === 'CategoriesStack') {
              iconName = 'category';
            } else if (route.name === 'BasketStack') {
              iconName = 'shopping-basket';
            } else if (route.name === 'ProfileStack') {
              iconName = 'account-circle';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: Colors.primaryColor,
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
            title: Strings.homeScreen,
          }}
        />
        <Tab.Screen
          name="CategoriesStack"
          component={CategoriesStack}
          options={{
            headerShown: false,
            title: Strings.categories,
          }}
        />
        <Tab.Screen
          name="BasketStack"
          component={BasketStack}
          options={{
            title: Strings.basket,
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStack}
          options={{
            title: Strings.account,
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Router;
