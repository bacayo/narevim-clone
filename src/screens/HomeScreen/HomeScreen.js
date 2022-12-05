import {View, Image, FlatList, ScrollView, Text, Keyboard} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './HomeScreenStyles';
import SearchBar from '../../components/SearchBar';

import ImageComponent from '../../components/ImageComponent';
import ProductCard from '../../components/ProductCard';
import BrandsCard from '../../components/BrandsCard';

import {
  brandListAsync,
  getSlidersAsync,
  mainProductsAsync,
  searchProductAsync,
} from '../../api';
import {useEffect} from 'react';
import {useState} from 'react';

const HomeScreen = () => {
  const dispatch = useDispatch();
  //get slider data
  const {items, image_path} = useSelector(state => state.getSlidersSlice);
  const {mainProducts, mainProductsImgPath} = useSelector(
    state => state.getMainProductsSlice,
  );
  const {brands, brandsImagePath} = useSelector(state => state.brandListSlice);

  const [text, setText] = useState('');

  //render sliders
  const renderSlider = ({item}) => (
    <ImageComponent slider={item} image_path={image_path} />
  );
  // const renderBrand = ({item}) => (
  //   <ImageComponent slider={item} image_path={brandsImagePath} />
  // );

  const renderBrand = ({item}) => (
    <BrandsCard brand={item} image_path={brandsImagePath} />
  );

  const renderMainProducts = ({item}) => (
    <ProductCard product={item} image_path={mainProductsImgPath} />
  );

  const searchProduct = () => {
    dispatch(searchProductAsync({keywords: text}));
    Keyboard.dismiss();
  };

  useEffect(() => {
    dispatch(getSlidersAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(mainProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(brandListAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/narlogo.png')} />
      <SearchBar
        value={text}
        onChangeText={setText}
        onPress={searchProduct}
        placeholder="Aramak istediğiniz ürünü girin..."
      />
      <ScrollView>
        <FlatList data={items} renderItem={renderSlider} />
        <Text style={styles.brandsBanner}>Markalar</Text>

        <FlatList
          data={brands}
          renderItem={renderBrand}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <Text style={styles.banner}> En Beğenilen Ürünler</Text>
        <FlatList
          data={mainProducts}
          renderItem={renderMainProducts}
          numColumns={2}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
