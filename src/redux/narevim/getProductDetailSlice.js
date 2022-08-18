import {createSlice} from '@reduxjs/toolkit';
import {getProductDetailAsync} from '../../api';

const getProductDetailSlice = createSlice({
  name: 'getProductDetailSlice',
  initialState: {
    isLoading: false,
    isFavorite: undefined,
    image_path: undefined,
    images: undefined,
    item: undefined,
    error: null,
    status: undefined,
  },
  reducers: {},
  extraReducers: {
    [getProductDetailAsync.pending]: state => {
      state.isLoading = true;
    },
    [getProductDetailAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.item = action.payload.data;
      state.image_path = action.payload.image_path;
      state.images = action.payload.images;
      state.isFavorite = action.payload.isFavorite;
      state.status = action.payload.status;
    },
    [getProductDetailAsync.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export default getProductDetailSlice.reducer;
