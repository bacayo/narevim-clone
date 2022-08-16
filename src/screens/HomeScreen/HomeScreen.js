import {
  View,
  Image,
  FlatList,
  ScrollView,
  SectionList,
  Text,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './HomeScreenStyles';
import SearchBar from '../../components/SearchBar';

import ImageComponent from '../../components/ImageComponent';
import ProductCard from '../../components/ProductCard';
import BrandsCard from '../../components/BrandsCard';

import {brandListAsync, getSlidersAsync, mainProductsAsync} from '../../api';
import {useEffect} from 'react';

const HomeScreen = () => {
  const dispatch = useDispatch();
  //get slider data
  const {items, status, image_path} = useSelector(
    state => state.getSlidersSlice,
  );
  const {mainProducts} = useSelector(state => state.getMainProductsSlice);
  const {brands, brandsImagePath} = useSelector(state => state.brandListSlice);

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

  const renderMainProducts = ({item}) => <ProductCard product={item} />;

  useEffect(() => {
    dispatch(getSlidersAsync());
  }, [dispatch]);

  console.log(status);

  useEffect(() => {
    dispatch(mainProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(brandListAsync());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/narlogo.png')} />
      <SearchBar placeholder="Aramak istediğiniz ürünü girin..." />
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
      {/* <FlatList
        data={items}
        renderItem={renderSlider}
        ListFooterComponent={() => (
          <FlatList
            data={mainProducts}
            renderItem={renderMainProducts}
            numColumns={2}
          />
        )}
        ListFooterComponent={() => (
          <FlatList data={brands} renderItem={renderBrand} />
        )}
      /> */}
    </View>
  );
};

export default HomeScreen;
