import {View, FlatList, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {productsAsync} from '../../api';
import ProductCard from '../../components/ProductCard';
import {resetProducts} from '../../redux/narevim/productsSlice';
import styles from './ProductsScreenStyles';

const ProductsScreen = props => {
  const {url, id} = props.route.params;
  const {products, productsImagePath, productsIsLoading} = useSelector(
    state => state.productsSlice,
  );

  const dispatch = useDispatch();
  const [page, setPage] = useState(0);

  const renderProducts = ({item}) => (
    <ProductCard product={item} image_path={productsImagePath} />
  );

  useEffect(() => {
    dispatch(productsAsync({url, id, page}));
  }, [dispatch, page, id, url]);

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProducts}
        numColumns={2}
        // key={'_'}
        keyExtractor={(item, index) => String(index)}
        onEndReached={() => {
          setPage(page + 1);
        }}
        ListFooterComponent={
          !productsIsLoading && (
            <ActivityIndicator size="small" color="#0000ff" />
          )
        }
      />
    </View>
  );
};

export default ProductsScreen;
