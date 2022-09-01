import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './BasketScreenStyles';
import BasketItemCard from '../../components/BasketItemCard';
import {getBasketAsync} from '../../api';
import {useState} from 'react';

const BasketScreen = () => {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getBasketAsync());
  }, [dispatch]);

  const dispatch = useDispatch();

  const {basket} = useSelector(state => state.getBasketSlice);

  const renderBasket = ({item}) => (
    <BasketItemCard product={item} quantity={quantity} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={basket} renderItem={renderBasket} />
    </View>
  );
};

export default BasketScreen;
