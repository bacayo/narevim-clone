import {Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './CategoryCardStyles';
import {useNavigation} from '@react-navigation/native';

const CategoryCard = ({category, image_path, screenName}) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate(screenName, {
      id: category.id,
      title: category.title,
      url: category.url,
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onPress(screenName)}>
      <Image
        style={styles.image}
        source={{uri: image_path + category.img_url}}
      />
      <Text style={styles.title}>{category.title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
