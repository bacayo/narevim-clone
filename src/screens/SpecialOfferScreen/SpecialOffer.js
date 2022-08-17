import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {specialOfferAsync} from '../../api';
import ProductCard from '../../components/ProductCard';

const SpecialOffer = props => {
  console.log(props);

  const {button_url} = props.route.params;
  console.log(button_url);

  const dispatch = useDispatch();

  const {items, speacialOfferImagePath} = useSelector(
    state => state.specialOfferSlice,
  );

  const renderSpecialOffer = ({item}) => (
    <ProductCard product={{item}} image_path={speacialOfferImagePath} />
  );

  useEffect(() => {
    dispatch(specialOfferAsync({button_url}));
  }, [dispatch, button_url]);

  return (
    <View>
      <FlatList data={items} renderItem={renderSpecialOffer} numColumns={2} />
    </View>
  );
};

export default SpecialOffer;
