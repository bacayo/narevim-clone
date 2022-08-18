import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import ProductCardDetail from '../../components/ProductCardDetail';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetailAsync} from '../../api';

import styles from './ProductDetailScreenStyles';

const ProductDetailScreen = props => {
  const {id} = props.route.params;
  const {item, image_path, images, status} = useSelector(
    state => state.getProductDetailSlice,
  );
  if (status === 'success') {
    console.log(images[0]);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailAsync({id}));
  }, [dispatch, id]);

  return (
    <View style={styles.container}>
      {status === 'success' && (
        <ProductCardDetail
          product={item}
          image_path={image_path}
          images={images[0]}
        />
      )}
    </View>
  );
};

export default ProductDetailScreen;
