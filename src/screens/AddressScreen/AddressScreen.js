import {View} from 'react-native';
import React from 'react';

import styles from './AddressScreenStyles';
import AddressCard from '../../components/AddressCard';

const AddressScreen = () => {
  return (
    <View style={styles.container}>
      <AddressCard />
    </View>
  );
};

export default AddressScreen;
