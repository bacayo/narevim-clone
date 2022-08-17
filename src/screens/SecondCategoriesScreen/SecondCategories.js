import {View, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import {useEffect} from 'react';
import {secondCategoriesAsync} from '../../api';
import React from 'react';

const SecondCategories = props => {
  const {id} = props.route.params;

  const {categories, categoriesImagePath} = useSelector(
    state => state.secondCategorySlice,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(secondCategoriesAsync({id}));
  }, [id, dispatch]);

  const renderCategories = ({item}) => (
    <CategoryCard
      category={item}
      image_path={categoriesImagePath}
      screenName={'ThirdCategoriesScreen'}
    />
  );

  return (
    <View>
      <FlatList data={categories} renderItem={renderCategories} />
    </View>
  );
};

export default SecondCategories;
