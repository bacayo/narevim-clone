import {createSlice} from '@reduxjs/toolkit';
import {mainProductsAsync} from '../../api';

const getMainProductsSlice = createSlice({
  name: 'getMainProductsSlice',
  initialState: {
    mainProducts: undefined,
    mainProductsIsLoading: false,
    mainProductsError: null,
  },
  reducers: {},
  extraReducers: {
    [mainProductsAsync.pending]: (state, action) => {
      state.mainProductsIsLoading = true;
    },
    [mainProductsAsync.fulfilled]: (state, action) => {
      state.mainProductsIsLoading = false;
      state.mainProducts = action.payload.data;
    },
    [mainProductsAsync.rejected]: (state, action) => {
      state.mainProductsIsLoading = false;
      state.mainProductsError = action.error.message;
    },
  },
});

export default getMainProductsSlice.reducer;
