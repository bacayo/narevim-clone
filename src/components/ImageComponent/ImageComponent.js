import {Image, Pressable} from 'react-native';
import React from 'react';
import styles from './ImageComponentStyles';
import {useNavigation} from '@react-navigation/native';

const ImageComponent = ({slider, image_path}) => {
  const navigation = useNavigation();

  const navigateSpecialOffer = () => {
    navigation.navigate('SpecialOffer', {button_url: slider.button_url});
  };

  return (
    <Pressable onPress={navigateSpecialOffer}>
      <Image style={styles.image} source={{uri: image_path + slider.img_url}} />
    </Pressable>
  );
};

export default ImageComponent;
