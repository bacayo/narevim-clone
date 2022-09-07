import {View, Text, Image, FlatList, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {getOrdersAsync} from '../../api';
import styles from './OrderScreenStyles';
import {useNavigation} from '@react-navigation/native';

const OrderCard = ({order, imagePath}) => {
  const navigation = useNavigation();

  const handleDetail = () => {
    navigation.navigate('ProductDetailScreen', {
      id: order.order_detail[0].product_id,
      title: order.order_detail[0].title,
    });
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.heading}>
        <View style={styles.orderDetail}>
          <Text style={styles.orderDate}>{order.order_date}</Text>
          <Text style={styles.total}>
            Toplam:
            <Text style={styles.amount}> {order.total_amount} TL</Text>
          </Text>
        </View>
        <Text style={styles.detailTitle}>Detaylar</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.innerContainer}>
        <Text style={styles.cargoStatus}>Kargo bekleniyor</Text>
        <Pressable onPress={handleDetail}>
          <Image
            style={styles.image}
            source={{uri: imagePath + order.order_detail[0].img_url}}
          />
        </Pressable>
      </View>
    </View>
  );
};

const OrderScreen = () => {
  const {order, imagePath} = useSelector(state => state.orderSlice);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersAsync());
  }, [dispatch]);

  const renderOrder = ({item}) => (
    <OrderCard order={item} imagePath={imagePath} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={order} renderItem={renderOrder} />
    </View>
  );
};

export default OrderScreen;
