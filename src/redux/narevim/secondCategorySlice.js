import {createSlice} from '@reduxjs/toolkit';
import {secondCategoriesAsync} from '../../api';

const secondCategorySlice = createSlice({
  name: 'secondCategorySlice',
  initialState: {
    categories: undefined,
    isLoading: false,
    error: null,
    status: undefined,
    categoriesImagePath: undefined,
  },
  reducers: {},
  extraReducers: {
    [secondCategoriesAsync.pending]: state => {
      state.isLoading = true;
    },
    [secondCategoriesAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload.data;
      state.status = action.payload.status;
      state.categoriesImagePath = action.payload.image_path;
    },
    [secondCategoriesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default secondCategorySlice.reducer;
