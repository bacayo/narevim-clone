import {createSlice} from '@reduxjs/toolkit';

import {getOrdersAsync} from '../../api';

const orderSlice = createSlice({
  name: 'orderSlice',
  initialState: {
    orderIsLoading: false,
    order: undefined,
    orderDetail: undefined,
    error: null,
    imagePath: undefined,
    orderStatus: undefined,
  },
  extraReducers: {
    [getOrdersAsync.pending]: state => {
      state.orderIsLoading = true;
    },
    [getOrdersAsync.fulfilled]: (state, action) => {
      state.orderIsLoading = false;
      state.order = action.payload.data;
      state.orderDetail = action.payload.data.order_detail;
      state.imagePath = action.payload.image_path;
      state.orderStatus = action.payload.status;
    },
    [getOrdersAsync.rejected]: (state, action) => {
      state.orderIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default orderSlice.reducer;
