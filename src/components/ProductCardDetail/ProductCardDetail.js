import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import styles from './ProductCardDetailStyles';
import {addToBasketAsync, toggleFavoriteAsync} from '../../api';
import IconSvg from '../IconComponent/Icon';
import {useEffect} from 'react';

export const Footer = ({product}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {isFavorite} = useSelector(state => state.getProductDetailSlice);

  const addToBasket = () => {
    dispatch(addToBasketAsync({id: product.id}));
    navigation.navigate('BasketScreen');
  };

  const toggleFavorite = () => {
    dispatch(toggleFavoriteAsync({id: product.id}));
  };

  useEffect(() => {
    console.log(isFavorite);
  }, [isFavorite]);

  return (
    <View style={styles.footer}>
      <Text style={styles.price}>{product.price} TL</Text>
      {/* <Icon style={styles.icon} name="favorite" /> */}
      <IconSvg
        name={isFavorite ? 'filledHeart' : 'emptyHeart'}
        width={30}
        height={30}
        onPress={toggleFavorite}
      />
      <TouchableOpacity onPress={addToBasket} style={styles.btn}>
        <Text style={styles.btnTitle}>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProductCardDetail = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.headerTitle}>Ürün Hakkında Bilgiler:</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
    </View>
  );
};

export default ProductCardDetail;
