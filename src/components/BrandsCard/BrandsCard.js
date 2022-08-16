import {View, Image} from 'react-native';
import React from 'react';
import styles from './BrandsCardStyles';

const BrandsCard = ({brand, image_path}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.brandImage}
        source={{uri: image_path + brand.img_url}}
      />
    </View>
  );
};

export default BrandsCard;
