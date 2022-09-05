import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ProductCard from '../../components/ProductCard';
import {favoriteListAsync} from '../../api';
import styles from './FavoritesScreenStyles';

const FavoritesScreen = () => {
  const dispatch = useDispatch();

  const {favorites, favoritesImagePath} = useSelector(
    state => state.favoriteListSlice,
  );

  const renderFavorites = ({item}) => (
    <ProductCard product={item} image_path={favoritesImagePath} />
  );

  useEffect(() => {
    dispatch(favoriteListAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList data={favorites} renderItem={renderFavorites} numColumns={2} />
    </View>
  );
};

export default FavoritesScreen;
