import {View, Text, TouchableOpacity, Image, Pressable} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import IconSvg from '../IconComponent/Icon';
import styles from './BasketItemCardStyles';
import {removeFromCartAsync, updateCartAsync, getBasketAsync} from '../../api';

const BasketItemCard = ({product, onPress}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const deleteItem = () => {
    console.log(product.rowid);
    dispatch(removeFromCartAsync({id: product.rowid}));
  };

  const decreaseQty = () => {
    dispatch(updateCartAsync({id: product.rowid, qty: product.qty - 1}));
    dispatch(getBasketAsync());
  };

  const increaseQty = () => {
    dispatch(updateCartAsync({id: product.rowid, qty: product.qty + 1}));
  };

  const handleProductDetail = () => {
    navigation.navigate('ProductDetailScreen', {
      id: product.id,
      title: product.title,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>{product.brand}</Text>
        <IconSvg
          style={styles.binIcon}
          name="bin"
          width={30}
          height={30}
          onPress={deleteItem}
        />
      </View>
      <View style={styles.innerContainer}>
        <Pressable style={styles.imgBtn} onPress={handleProductDetail}>
          <Image style={styles.productImg} source={{uri: product.img_url}} />
        </Pressable>
        <View style={styles.bottomContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <View style={styles.quantityContainer}>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnMinus} onPress={decreaseQty}>
                <IconSvg name="minus" width={10} height={10} />
              </TouchableOpacity>
              <Text style={styles.quantity}>{product.qty}</Text>
              <TouchableOpacity style={styles.btnPlus} onPress={increaseQty}>
                <IconSvg name="plus" width={10} height={10} />
              </TouchableOpacity>
            </View>
            <Text style={styles.productPrice}>{product.price} TL</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BasketItemCard;
