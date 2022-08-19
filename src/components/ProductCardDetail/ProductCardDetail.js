import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './ProductCardDetailStyles';

export const Footer = ({product}) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.price}>{product.price} TL</Text>
      <Icon style={styles.icon} name="favorite" />
      <TouchableOpacity style={styles.btn}>
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
