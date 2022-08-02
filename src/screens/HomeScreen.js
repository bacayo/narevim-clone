import {View, Image} from 'react-native';
import React from 'react';

import styles from './HomeScreenStyles';
import SearchBar from '../components/SearchBar';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../src/assets/narlogo.png')}
      />
      <SearchBar placeholder="Aramak istediğiniz ürünü girin..." />
    </View>
  );
};

export default HomeScreen;
