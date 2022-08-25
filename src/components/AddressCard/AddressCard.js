import {View, Text} from 'react-native';
import React from 'react';

import styles from './AddressCardStyles';

const AddressCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.addressDetail}>Test mah bilmem ne sk </Text>
      <Text style={styles.city}>Şehir/Ilce</Text>
    </View>
  );
};

export default AddressCard;
