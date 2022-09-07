import {View, Text, Pressable, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import styles from './SelectAddressScreenStyles';
import {addressListAsync} from '../../api';
import IconSvg from '../../components/IconComponent/Icon';
import Colors from '../../constants/Colors/Colors';
import StringScreens from '../../constants/Strings/StringScreens';

const SelectAddressCard = ({address}) => {
  const navigation = useNavigation();

  const handlePayment = () => {
    navigation.navigate(StringScreens.paymentMethodScreen);
  };

  return (
    <Pressable style={styles.addressContainer} onPress={handlePayment}>
      <View style={{flexDirection: 'row'}}>
        <IconSvg
          name="location"
          width={30}
          height={30}
          stroke={Colors.primaryColor}
        />
        <Text style={styles.city}>
          {address.town}/{address.city}
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.addressDetail}>{address.clear_address} </Text>
      </View>
    </Pressable>
  );
};

const SelectAddressScreen = () => {
  const dispatch = useDispatch();

  const {addressList} = useSelector(state => state.addressListSlice);

  const renderAddress = ({item}) => <SelectAddressCard address={item} />;

  useEffect(() => {
    dispatch(addressListAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList data={addressList} renderItem={renderAddress} />
    </View>
  );
};

export default SelectAddressScreen;
