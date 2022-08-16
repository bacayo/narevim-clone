import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './CategoryCardStyles';

const CategoryCard = ({category, image_path}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: image_path + category.img_url}}
      />
      <Text style={styles.title}>{category.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
