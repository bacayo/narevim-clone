import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';

import styles from './AccountScreenStyles';
import IconSvg from '../../components/IconComponent/Icon';

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/narlogo.png')} />
      <View style={styles.listContainer}>
        <Pressable style={styles.press}>
          <Text style={styles.listTitle}>Siparişlerim</Text>
          <IconSvg name="arrowRight" width={30} height={30} stroke={'black'} />
        </Pressable>
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default AccountScreen;
