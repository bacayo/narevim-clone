import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './CategoriesScreenStyles';

import {useDispatch, useSelector} from 'react-redux';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import {useEffect} from 'react';
import {firstCategoriesAsync} from '../../api';

const CategoriesScreen = () => {
  const dispatch = useDispatch();

  const {categories, categoriesImagePath} = useSelector(
    state => state.getCategorySlice,
  );

  const renderCategories = ({item}) => (
    <CategoryCard
      image_path={categoriesImagePath}
      category={item}
      screenName={'SecondCategories'}
    />
  );

  useEffect(() => {
    dispatch(firstCategoriesAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList data={categories} renderItem={renderCategories} />
    </View>
  );
};

export default CategoriesScreen;
