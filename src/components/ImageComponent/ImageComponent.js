import {View, Image} from 'react-native';
import React from 'react';
import styles from './ImageComponentStyles';
// import {styles} from './ImageComponentStyles';

const ImageComponent = ({slider, image_path}) => {
  return (
    <View>
      <Image style={styles.image} source={{uri: image_path + slider.img_url}} />
    </View>
  );
};

export default ImageComponent;
