import {View, Image} from 'react-native';
import React from 'react';
import styles from './ImageComponentStyles';
import {useSelector} from 'react-redux';

const ImageComponent = ({slider, image_path}) => {
  // const {image_path} = useSelector(state => state.getSlidersSlice);

  return (
    <View>
      <Image style={styles.image} source={{uri: image_path + slider.img_url}} />
    </View>
  );
};

export default ImageComponent;
