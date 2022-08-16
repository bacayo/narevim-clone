import {View, FlatList} from 'react-native';
import React from 'react';
import styles from './CategoriesScreenStyles';

import {useDispatch, useSelector} from 'react-redux';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import {useEffect} from 'react';
import {firsCategoriesAsync} from '../../api';

const CategoriesScreen = () => {
  const dispatch = useDispatch();

  const {categories, categoriesImagePath} = useSelector(
    state => state.getCategorySlice,
  );

  const renderCategories = ({item}) => (
    <CategoryCard image_path={categoriesImagePath} category={item} />
  );

  useEffect(() => {
    dispatch(firsCategoriesAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategories}
        // ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default CategoriesScreen;
