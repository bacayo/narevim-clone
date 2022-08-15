import {createSlice} from '@reduxjs/toolkit';
import {brandListAsync} from '../../api';

const brandListSlice = createSlice({
  name: 'brandListSlice',
  initialState: {
    isLoading: false,
    error: null,
    brands: undefined,
    brandsImagePath: undefined,
  },
  reducers: {},
  extraReducers: {
    [brandListAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [brandListAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.brands = action.payload.data;
      state.brandsImagePath = action.payload.image_path;
    },
    [brandListAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default brandListSlice.reducer;
