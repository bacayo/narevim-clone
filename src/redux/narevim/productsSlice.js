import {createSlice} from '@reduxjs/toolkit';

import {productsAsync} from '../../api';

const productsSlice = createSlice({
  name: 'productsSlice',
  initialState: {
    products: [],
    productsIsLoading: false,
    productStatus: undefined,
    error: null,
    productsImagePath: undefined,
  },
  reducers: {
    resetProducts: (state, action) => {
      state.products = undefined;
      state.productsImagePath = undefined;
      state.productStatus = undefined;
    },
  },
  extraReducers: {
    [productsAsync.pending]: state => {
      state.productsIsLoading = true;
    },
    [productsAsync.fulfilled]: (state, action) => {
      state.productsIsLoading = false;
      state.products = [...state?.products, ...action.payload.data];
      console.log(state.products);
      state.productStatus = action.payload.status;
      state.productsImagePath = action.payload.image_path;
    },
    [productsAsync.rejected]: (state, action) => {
      state.productsIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default productsSlice.reducer;
export const {resetProducts} = productsSlice.actions;
