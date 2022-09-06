import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './AccountScreenStyles';
import ListCard from '../../components/ListCard/ListCard';
import Strings from '../../constants/Strings/Strings';
import {logoutAsync} from '../../api';
import {resetLogin} from '../../redux/narevim/loginSlice';
import StringScreens from '../../constants/Strings/StringScreens';

const AccountScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {logoutStatus} = useSelector(state => state.logoutSlice);

  //* navigate to addresses screen
  const navigateAddressScreen = () => {
    navigation.navigate('AddressScreen');
  };

  //*handle logout
  const handleLogout = () => {
    dispatch(resetLogin());
    dispatch(logoutAsync());
  };

  //* navigate to favorites screen
  const navigateFavorites = () => {
    navigation.navigate('FavoritesScreen');
  };

  //* navigate to user info screen
  const handleUserInfo = () => {
    navigation.navigate('UserInfoScreen');
  };

  //*navigate to recover password screen
  const changePassword = () => {
    navigation.navigate(StringScreens.changePasswordScreen);
  };

  //* navigate orders screen
  const handleOrders = () => {
    navigation.navigate('OrderScreen');
  };

  useEffect(() => {
    logoutStatus === 'success' && navigation.goBack();
  }, [navigation, logoutStatus]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/narlogo.png')} />
      <ListCard
        title={Strings.order}
        iconName={'order'}
        onPress={handleOrders}
      />
      <ListCard
        title={Strings.favorites}
        iconName={'heart'}
        onPress={navigateFavorites}
      />
      <ListCard
        title={Strings.address}
        iconName={'address'}
        onPress={navigateAddressScreen}
      />
      <ListCard
        title={Strings.userInfo}
        iconName={'user'}
        onPress={handleUserInfo}
      />
      <ListCard
        title={Strings.changePassword}
        iconName={'key'}
        onPress={changePassword}
      />
      <ListCard
        title={Strings.logout}
        iconName={'logout'}
        onPress={handleLogout}
      />
    </View>
  );
};

export default AccountScreen;
