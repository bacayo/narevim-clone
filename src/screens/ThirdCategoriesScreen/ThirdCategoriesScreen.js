import {View, FlatList} from 'react-native';
import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {thirdCategoriesAsync} from '../../api';
import CategoryCard from '../../components/CategoryCard';

const ThirdCategoriesScreen = props => {
  const {id} = props.route.params;

  const dispatch = useDispatch();
  const {categories, categoriesImagePath} = useSelector(
    state => state.thirdCategorySlice,
  );

  const renderThirdCategory = ({item}) => (
    <CategoryCard
      category={item}
      image_path={categoriesImagePath}
      screenName={'ProductsScreen'}
    />
  );

  useEffect(() => {
    dispatch(thirdCategoriesAsync({id}));
  }, [dispatch, id]);

  return (
    <View>
      <FlatList data={categories} renderItem={renderThirdCategory} />
    </View>
  );
};

export default ThirdCategoriesScreen;
