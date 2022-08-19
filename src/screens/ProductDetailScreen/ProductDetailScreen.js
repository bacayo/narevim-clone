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
      <View style={{height: 500}}>
        {status === 'success' && (
          <Swiper>
            {images.map(image => (
              <Image
                style={{height: 500, resizeMode: 'contain'}}
                source={{uri: image}}
              />
            ))}
          </Swiper>
        )}
      </View>
    );
  };

  return (
    <View style={{borderWidth: 1, borderColor: 'red', flex: 1}}>
      <ScrollView style={styles.container}>
        <RenderSwiper />
        {status === 'success' && <ProductCardDetail product={item} />}
      </ScrollView>
      {/* <View style={{borderWidth: 1, borderColor: 'green'}}>
        <Text>{item?.price} TL</Text>
        <Text>350 tl</Text>
        <Text>Kalp logo</Text>
      </View> */}
      {status === 'success' && <Footer product={item} />}
    </View>
  );
};

export default ProductDetailScreen;
