import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './ProductCardStyles';
import {useSelector} from 'react-redux';
const ProductCard = ({product}) => {
  const {mainProductsImgPath} = useSelector(
    state => state.getMainProductsSlice,
  );

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: mainProductsImgPath + product.img_url}}
      />
      <View style={styles.innerContainer}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text numberOfLines={2} style={styles.title}>
          {product.title}
        </Text>
        <View style={styles.starContainer}>
          <Icon style={styles.star} name="star-rate" />
          <Icon style={styles.star} name="star-rate" />
          <Icon style={styles.star} name="star-rate" />
          <Icon style={styles.star} name="star-rate" />
          <Icon style={styles.star} name="star-rate" />
          <Text style={styles.review}>({product.review})</Text>
        </View>
        <Text style={styles.price}>{product.price} TL</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTitle}>Ürün Detayi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
