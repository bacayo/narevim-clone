import {FlatList, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './AddressScreenStyles';
import AddressCard from '../../components/AddressCard';
import {addressListAsync} from '../../api';

const AddressScreen = () => {
  const dispatch = useDispatch();

  const {addressList} = useSelector(state => state.addressListSlice);

  const renderAddressList = ({item}) => <AddressCard address={item} />;

  useEffect(() => {
    dispatch(addressListAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList data={addressList} renderItem={renderAddressList} />
    </View>
  );
};

export default AddressScreen;
