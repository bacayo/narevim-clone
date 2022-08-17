import {View, Text, FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CategoryCard from '../../components/CategoryCard';
import {useEffect} from 'react';
import {secondCategoriesAsync} from '../../api';
import React from 'react';

const SecondCategories = props => {
  console.log(props);
  const {id} = props.route.params;
  console.log(id);

  const {categories, categoriesImagePath} = useSelector(
    state => state.secondCategorySlice,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(secondCategoriesAsync({id}));
  }, [id, dispatch]);

  const renderCategories = ({item}) => (
    <CategoryCard category={item} image_path={categoriesImagePath} />
  );

  return (
    <View>
      {/* <FlatList data={categories} renderItem={renderCategories} /> */}
      <Text>Deneme</Text>
      {/* <Button title="Dasd" onPress={() => fetchData({id: id})} /> */}
    </View>
  );
};

export default SecondCategories;
