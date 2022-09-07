import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './BasketScreenStyles';
import BasketItemCard from '../../components/BasketItemCard';
import {getBasketAsync} from '../../api';
import {useNavigation} from '@react-navigation/native';
import StringScreens from '../../constants/Strings/StringScreens';

const BasketScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const {basket, total} = useSelector(state => state.getBasketSlice);

  const renderBasket = ({item}) => <BasketItemCard product={item} />;

  const navigateSelectAddress = () => {
    navigation.navigate(StringScreens.selectAddressScreen);
  };

  useEffect(() => {
    dispatch(getBasketAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList data={basket} renderItem={renderBasket} />
      <View style={styles.footer}>
        <View style={styles.basket}>
          <Text style={styles.basketTitle}>Sepet Toplam</Text>
          <Text style={styles.price}>{total} TL</Text>
        </View>
        <TouchableOpacity
          style={styles.shopBtn}
          onPress={navigateSelectAddress}>
          <Text style={styles.shopBtnTitle}>Alışverişi Tamamla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketScreen;
