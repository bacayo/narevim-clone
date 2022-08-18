import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './ProductCardDetailStyles';

const ProductCardDetail = ({product, image_path, images}) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          style={{height: 150}}
          source={{
            uri: images,
          }}
        />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.headerTitle}>Ürün Hakkında Bilgiler:</Text>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>{product.price} TL</Text>
        <Icon style={styles.icon} name="favorite" />
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnTitle}>Sepete Ekle</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCardDetail;
