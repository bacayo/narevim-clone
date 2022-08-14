import {View, Image, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './HomeScreenStyles';
import SearchBar from '../../components/SearchBar';

import ImageComponent from '../../components/ImageComponent';
import {getSlidersAsync, mainProductsAsync} from '../../api';
import {useEffect} from 'react';

const HomeScreen = () => {
  const dispatch = useDispatch();
  //get slider data
  const {items} = useSelector(state => state.getSlidersSlice);

  //render sliders
  const renderSlider = ({item}) => <ImageComponent slider={item} />;

  useEffect(() => {
    dispatch(getSlidersAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/narlogo.png')} />
      <SearchBar placeholder="Aramak istediğiniz ürünü girin..." />
      <FlatList data={items} renderItem={renderSlider} />
    </View>
  );
};

export default HomeScreen;
