import {View, FlatList, Text, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {specialOfferAsync} from '../../api';
import ProductCard from '../../components/ProductCard';
import styles from './SpecialOfferStyles';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Strings from '../../constants/Strings/Strings';

const SpecialOffer = props => {
  const button_url = props.route.params.button_url;

  const dispatch = useDispatch();

  const {items, speacialOfferImagePath} = useSelector(
    state => state.specialOfferSlice,
  );

  const [page, setPage] = useState(0);
  const [data, setData] = useState(items);

  const renderSpecialOffer = ({item}) => (
    <ProductCard product={item} image_path={speacialOfferImagePath} />
  );

  console.log(items);
  console.log('===================');
  console.log(data);

  useEffect(() => {
    dispatch(specialOfferAsync({button_url, page}));
  }, [dispatch, button_url, page]);

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable}>
        <Icon style={styles.sortIcon} name={'sort'} />
        <Text style={styles.sortText}>{Strings.sort}</Text>
      </Pressable>
      <View style={styles.seperatorLine} />
      <FlatList
        style={styles.list}
        data={data === undefined ? items : data}
        renderItem={renderSpecialOffer}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={() => {
          setPage(page + 1);
          setData([...items, ...data]);
        }}
        onEndReachedThreshold={0.5}
        refreshing
      />
    </View>
  );
};

export default SpecialOffer;
