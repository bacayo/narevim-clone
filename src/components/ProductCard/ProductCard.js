import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './ProductCardStyles';
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({product, image_path}) => {
  const navigation = useNavigation();

  const handleProductDetail = () => {
    navigation.navigate('ProductDetailScreen', {
      id: product.id,
      title: product.title,
    });
  };

  return (
    <Pressable style={styles.container} onPress={handleProductDetail}>
      <Image
        style={styles.image}
        source={{uri: image_path + product.img_url}}
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
          <Text style={styles.price}>{product.price} TL</Text>
        </View>
        <View style={styles.btn}>
          <Text style={styles.btnTitle}>Ürün Detayi</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductCard;
