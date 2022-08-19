import {View, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import ProductCardDetail from '../../components/ProductCardDetail';
import {useDispatch, useSelector} from 'react-redux';
import {getProductDetailAsync} from '../../api';
import {Footer} from '../../components/ProductCardDetail/ProductCardDetail';

import styles from './ProductDetailScreenStyles';

import Swiper from 'react-native-swiper';

const ProductDetailScreen = props => {
  const {id} = props.route.params;
  const {item, images, status} = useSelector(
    state => state.getProductDetailSlice,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductDetailAsync({id}));
  }, [dispatch, id]);

  const RenderSwiper = () => {
    return (
      <View style={styles.swiperContainer}>
        {status === 'success' && (
          <Swiper>
            {images.map(image => (
              <Image style={styles.image} source={{uri: image}} />
            ))}
          </Swiper>
        )}
      </View>
    );
  };

  return (
    <View style={styles.outherContainer}>
      <ScrollView style={styles.container}>
        <RenderSwiper />
        {status === 'success' && <ProductCardDetail product={item} />}
      </ScrollView>
      {status === 'success' && <Footer product={item} />}
    </View>
  );
};

export default ProductDetailScreen;
