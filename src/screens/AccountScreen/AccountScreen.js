import {View, Image} from 'react-native';
import React from 'react';

import styles from './AccountScreenStyles';
import ListCard from '../../components/ListCard/ListCard';
import Strings from '../../constants/Strings/Strings';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/narlogo.png')} />
      <ListCard title={Strings.order} iconName={'order'} />
      <ListCard title={Strings.favorites} iconName={'heart'} />
      <ListCard title={Strings.address} iconName={'address'} />
      <ListCard title={Strings.userInfo} iconName={'user'} />
      <ListCard title={Strings.changePassword} iconName={'key'} />
      <ListCard title={Strings.logout} iconName={'logout'} />
    </View>
  );
};

export default AccountScreen;
