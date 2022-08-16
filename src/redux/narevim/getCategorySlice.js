import {createSlice} from '@reduxjs/toolkit';
import {firstCategoriesAsync} from '../../api';

const getCategorySlice = createSlice({
  name: 'getCategorySlice',
  initialState: {
    categories: undefined,
    isLoading: false,
    error: null,
    status: undefined,
    categoriesImagePath: undefined,
  },
  reducers: {},
  extraReducers: {
    [firstCategoriesAsync.pending]: state => {
      state.isLoading = true;
    },
    [firstCategoriesAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload.data;
      state.status = action.payload.status;
      state.categoriesImagePath = action.payload.image_path;
    },
    [firstCategoriesAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default getCategorySlice.reducer;
