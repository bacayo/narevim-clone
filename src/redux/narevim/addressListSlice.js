import {createSlice} from '@reduxjs/toolkit';

import {addressListAsync} from '../../api';

const addressListSlice = createSlice({
  name: 'addressListSlice',
  initialState: {
    addressIsLoading: false,
    addressList: undefined,
    status: undefined,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [addressListAsync.pending]: state => {
      state.addressIsLoading = true;
    },
    [addressListAsync.fulfilled]: (state, action) => {
      state.addressIsLoading = false;
      state.addressList = action.payload.data;
      state.status = action.payload.status;
    },
    [addressListAsync.rejected]: (state, action) => {
      state.addressIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default addressListSlice.reducer;
