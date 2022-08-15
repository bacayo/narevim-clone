import {createSlice} from '@reduxjs/toolkit';
import {mainProductsAsync} from '../../api';

const getMainProductsSlice = createSlice({
  name: 'getMainProductsSlice',
  initialState: {
    mainProducts: undefined,
    mainProductsIsLoading: false,
    mainProductsError: null,
    mainProductsImgPath: undefined,
  },
  reducers: {},
  extraReducers: {
    [mainProductsAsync.pending]: (state, action) => {
      state.mainProductsIsLoading = true;
    },
    [mainProductsAsync.fulfilled]: (state, action) => {
      state.mainProductsIsLoading = false;
      state.mainProducts = action.payload.data;
      state.mainProductsImgPath = action.payload.image_path;
    },
    [mainProductsAsync.rejected]: (state, action) => {
      state.mainProductsIsLoading = false;
      state.mainProductsError = action.error.message;
    },
  },
});

export default getMainProductsSlice.reducer;
