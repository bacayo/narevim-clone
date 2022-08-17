import {createSlice} from '@reduxjs/toolkit';
import {thirdCategoriesAsync} from '../../api';

const thirdCategorySlice = createSlice({
  name: 'thirdCategorySlice',
  initialState: {
    categories: undefined,
    isLoading: false,
    error: null,
    status: undefined,
    categoriesImagePath: undefined,
  },
  reducers: {},
  extraReducers: {
    [thirdCategoriesAsync.pending]: state => {
      state.isLoading = true;
    },
    [thirdCategoriesAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload.data;
      state.status = action.payload.status;
      state.categoriesImagePath = action.payload.image_path;
    },
    [thirdCategoriesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default thirdCategorySlice.reducer;
