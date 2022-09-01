import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import IconSvg from '../IconComponent/Icon';
import styles from './BasketItemCardStyles';

const BasketItemCard = ({product, quantity}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.brand}>{product.brand}</Text>
        <IconSvg style={styles.binIcon} name="bin" width={30} height={30} />
      </View>
      <View style={styles.innerContainer}>
        <Image style={styles.productImg} source={{uri: product.img_url}} />
        <View style={styles.bottomContainer}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <View style={styles.quantityContainer}>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnMinus} onPress={null}>
                <IconSvg name="minus" width={10} height={10} />
              </TouchableOpacity>
              <Text style={styles.quantity}>{quantity}</Text>
              <TouchableOpacity style={styles.btnPlus}>
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
