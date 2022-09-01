import {createSlice} from '@reduxjs/toolkit';

import {getBasketAsync} from '../../api';

const getBasketSlice = createSlice({
  name: 'addToBasketSlice',
  initialState: {
    basketIsLoading: false,
    basket: undefined,
    error: null,
    status: undefined,
  },
  extraReducers: {
    [getBasketAsync.pending]: state => {
      state.basketIsLoading = true;
    },
    [getBasketAsync.fulfilled]: (state, action) => {
      state.basketIsLoading = false;
      state.basket = action.payload.data;
    },
    [getBasketAsync.rejected]: (state, action) => {
      state.basketIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default getBasketSlice.reducer;
