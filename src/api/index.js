import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';

const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
axios.defaults.headers['X-API-KEY'] = API_KEY;
axios.defaults.baseURL = Config.BASE_URL;
axios.defaults.headers['Content-Type'] = 'multipart/form-data';

//*
export const searchProductAsync = createAsyncThunk(
  'productSlice/searchProductAsync',
  async data => {
    // const params = new URLSearchParams();
    const params = new FormData();
    params.append('keywords', data.keywords);
    params.append('page', 0);
    params.append('per_page', 10);
    params.append('sorting', 'ASC');
    const response = await axios.post('searchProduct', params);
    console.log(response.data);
    console.log(params);
    return response.data;
  },
);

//* get sliders
export const getSlidersAsync = createAsyncThunk(
  'getSlidersSlice/getSlidersAsync',
  async () => {
    const response = await axios.get('sliders');
    return response.data;
  },
);

//* get main prdoucts section in homescreen
export const mainProductsAsync = createAsyncThunk(
  'getMainProductsSlice/mainProductsAsync',
  async () => {
    const response = await axios.get('mainProducts');
    return response.data;
  },
);

//* get brand list section in home screen
export const brandListAsync = createAsyncThunk(
  'brandListSlice/brandListAsync',
  async () => {
    const response = await axios.get('brands');
    return response.data;
  },
);

//* get first categories in category tab
export const firstCategoriesAsync = createAsyncThunk(
  'getCategorySlice/firsCategoriesAsync',
  async () => {
    const response = await axios.get('firstCategories');
    return response.data;
  },
);

//* get second categories in category tab
export const secondCategoriesAsync = createAsyncThunk(
  'secondCategorySlice/secondCategoriesAsync',
  async data => {
    const params = new FormData();
    params.append('first_category_id', data.id);
    const response = await axios.post('secondCategories/', params);
    return response.data;
  },
);

//* get third categories in category tab
export const thirdCategoriesAsync = createAsyncThunk(
  'thirdCategoriesSlice/thirdCategoriesAsync',
  async data => {
    const params = new FormData();
    params.append('second_category_id', data.id);
    const response = await axios.post('thirdCategories', params);
    return response.data;
  },
);

//* get special offer products when pressing image on homescreen
export const specialOfferAsync = createAsyncThunk(
  'specialOfferSlice/specialOfferAsync',
  async data => {
    const params = new FormData();
    params.append('url_string', data.button_url);
    params.append('per_page', 10);
    params.append('page', data.page);
    params.append('sorting', 'ASC');
    const response = await axios.post('getUrl', params);
    return response.data;
  },
);

//* get products from categories
export const productsAsync = createAsyncThunk(
  'productsSlice/productsAsync',

  async (data, url) => {
    const params = new FormData();
    params.append('url_string', `https://narevim.com/${data.url}-c-${data.id}`);
    params.append('per_page', 10);
    params.append('page', data.page);
    params.append('sorting', 'ASC');

    const response = await axios.post('getUrl', params);

    return response.data;
  },
);

//* get product detail
export const getProductDetailAsync = createAsyncThunk(
  'getProductDetailSlice/getProductDetailAsync',
  async data => {
    const params = new FormData();
    params.append('product_id', data.id);
    const response = await axios.post('productDetail', params);
    return response.data;
  },
);

//* login
export const loginAsync = createAsyncThunk(
  'loginSlice/loginAsync',
  async data => {
    const params = new FormData();
    params.append('email', data.email);
    params.append('password', data.password);
    const response = await axios.post('login', params);
    return response.data;
  },
);

//*logout
export const logoutAsync = createAsyncThunk(
  'logoutSlice/logoutAsync',
  async () => {
    const response = await axios.get('logout');
    return response.data;
  },
);

//* get address list
export const addressListAsync = createAsyncThunk(
  'addressListSlice/addressListAsync',
  async () => {
    const response = await axios.get('address');
    return response.data;
  },
);

//* get member information
export const memberInfoAsync = createAsyncThunk(
  'memberInfoSlice/memberInfoAsync',
  async () => {
    const response = await axios.get('memberInfo');
    return response.data;
  },
);

//* get cities
export const getCityAsync = createAsyncThunk(
  'getCitySlice/getCityAsync',
  async () => {
    const response = await axios.get('city');
    return response.data;
  },
);

//* get towns
export const getTownAsync = createAsyncThunk(
  'getTownSlice/getTownAsync',
  async data => {
    const params = new FormData();
    params.append('city_id', data.id);
    const response = await axios.post('town', params);
    console.log(params);
    return response.data;
  },
);

//* save address
export const saveAddressAsync = createAsyncThunk(
  'saveAddressAsync',
  async data => {
    const params = new FormData();
    params.append('name', data.name);
    params.append('surname', data.surname);
    params.append('email', data.email);
    params.append('telephone', data.telephone);
    params.append('city', data.city);
    params.append('town', data.town);
    params.append('clear_address', data.clear_address);
    const response = await axios.post('save_address', params);
    console.log(params);
    console.log(response.data);
    return response.data;
  },
);

//* remove address from the list
export const removeAddressAsync = createAsyncThunk(
  'removeAddressAsync',
  async (data, thunkAPI) => {
    const params = new FormData();
    params.append('address_id', data.id);
    const response = await axios.post('removeAddress', params);
    thunkAPI.dispatch(addressListAsync());
    return response.data;
  },
);

//* add to basket
export const addToBasketAsync = createAsyncThunk(
  'addToBasketAsync',
  async (data, thunkAPI) => {
    const params = new FormData();
    params.append('product_id', data.id);
    params.append('qty', 1);
    const response = await axios.post('addBasket', params);
    thunkAPI.dispatch(getBasketAsync());
    return response.data;
  },
);
//* get basket items
export const getBasketAsync = createAsyncThunk(
  'getBasketSlice/getBasketAsync',
  async () => {
    const response = await axios.get('getBasket');
    return response.data;
  },
);

//* remove item from basket
export const removeFromCartAsync = createAsyncThunk(
  'removeFromCartAsync',
  async (data, thunkAPI) => {
    const params = new FormData();
    params.append('rowID', data.id);
    const response = await axios.post('removeFromCart', params);
    thunkAPI.dispatch(getBasketAsync());
    return response.data;
  },
);
//* update basket
export const updateCartAsync = createAsyncThunk(
  'updateCartAsync',
  async (data, thunkAPI) => {
    const params = new FormData();
    params.append('rowID', data.id);
    params.append('qty', data.qty);
    const response = await axios.post('updateCart', params);
    thunkAPI.dispatch(getBasketAsync());
    return response.data;
  },
);

//* toggle favorite
export const toggleFavoriteAsync = createAsyncThunk(
  'toggleFavoriteAsync',
  async (data, thunkAPI) => {
    const params = new FormData();
    params.append('product_id', data.id);
    const response = await axios.post('toggleFavoritte', params);
    thunkAPI.dispatch(getProductDetailAsync(data));
    return response.data;
  },
);

//* get favorites item in list
export const favoriteListAsync = createAsyncThunk(
  'favoriteListSlice/favoriteListAsync',
  async () => {
    const response = await axios.get('favoritte');
    return response.data;
  },
);

//* change password
export const changePasswordAsync = createAsyncThunk(
  'changePasswordAsync',
  async data => {
    const params = new FormData();
    params.append('old_password', data.old_password);
    params.append('new_password', data.new_password);
    const response = await axios.post('changePassword', params);
    return response.data;
  },
);

//* get orders
export const getOrdersAsync = createAsyncThunk(
  'orderSlice/getOrdersAsync',
  async () => {
    const response = await axios.get('orders');
    return response.data;
  },
);

//* get cargo options
export const cargoListAsync = createAsyncThunk(
  'cargoListSlice/cargoListAsync',
  async () => {
    const response = await axios.get('cargo');
    return response.data;
  },
);

export const discountCouponAsync = createAsyncThunk(
  'discountCouponAsync',
  async data => {
    const params = new FormData();
    params.append('discount_code', data.discount);
    const response = await axios.post('couponControl', params);
    console.log(params);
    return response.data;
  },
);

export const createOrderAsync = createAsyncThunk(
  'createOrderAsync',
  async data => {
    const params = new FormData();
    params.append('payment_type', data.payment_type);
    params.append('cargo_id', data.cargo_id);
    params.append('order_note', data.order_note);
    const response = await axios.post('createOrder', params);
    return response.data;
  },
);
