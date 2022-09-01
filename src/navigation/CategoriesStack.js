import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import CategoriesScreen from '../screens/CategoriesScreen';
import SecondCategories from '../screens/SecondCategoriesScreen/SecondCategories';
import ThirdCategoriesScreen from '../screens/ThirdCategoriesScreen';
import ProductsScreen from '../screens/ProductsScreen';
import Strings from '../constants/Strings/Strings';
import Colors from '../constants/Colors/Colors';
import IconSvg from '../components/IconComponent/Icon';
import {resetProducts} from '../redux/narevim/productsSlice';

const Stack = createNativeStackNavigator();

const CategoriesStack = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleBackButton = () => {
    dispatch(resetProducts());
    navigation.navigate('ThirdCategoriesScreen');
  };
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
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={({route}) => ({
          headerTitle: route.params.title,
          headerTintColor: Colors.primaryColor,
          // headerLeft: () => (
          //   <IconSvg
          //     name="back"
          //     width={25}
          //     height={25}
          //     stroke="red"
          //     onPress={handleBackButton}
          //   />
          // ),
        })}
      />
    </Stack.Navigator>
  );
};

export default CategoriesStack;
