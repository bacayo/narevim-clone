import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';

import styles from './AddressCardStyles';
import IconSvg from '../IconComponent/Icon';
import Colors from '../../constants/Colors/Colors';
import {removeAddressAsync} from '../../api';

const AddressCard = ({address}) => {
  const dispatch = useDispatch();

  const removeAddress = () => {
    dispatch(removeAddressAsync({id: address.id}));
  };

  return (
    <Pressable style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.addressDetail}>{address.clear_address} </Text>
        <IconSvg
          name="bin"
          width={30}
          height={30}
          stroke={Colors.primaryColor}
          onPress={removeAddress}
        />
      </View>
      <Text style={styles.city}>
        {address.town}/{address.city}
      </Text>
    </Pressable>
  );
};

export default AddressCard;
