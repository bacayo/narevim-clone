import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import Config from 'react-native-config';

const API_KEY = 'SSVa97j7z83nMXDzhmmdHSSLPG9NueDf3J6BgCSS';
axios.defaults.headers['X-API-KEY'] = API_KEY;
axios.defaults.baseURL = Config.BASE_URL;

//* get sliders
export const getSlidersAsync = createAsyncThunk(
  'getSlidersSlice/getSlidersAsync',
  async () => {
    const response = await axios.get('sliders');
    // console.log(response.data);
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

//* get first categories in category screen
export const firsCategoriesAsync = createAsyncThunk(
  'getCategorySlice/firsCategoriesAsync',
  async () => {
    const response = await axios.get('firstCategories');
    return response.data;
  },
);
