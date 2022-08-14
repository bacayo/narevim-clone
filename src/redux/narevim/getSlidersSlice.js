import {createSlice} from '@reduxjs/toolkit';
import {getSlidersAsync} from '../../api';

const getSlidersSlice = createSlice({
  name: 'getSlidersSlice',
  initialState: {
    items: undefined,
    error: null,
    isLoading: false,
    status: undefined,
    image_path: undefined,
  },
  reducers: {},
  extraReducers: {
    [getSlidersAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getSlidersAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload.data;
      state.status = action.payload.status;
      state.image_path = action.payload.image_path;
    },
    [getSlidersAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.status = action.payload.status;
    },
  },
});

export default getSlidersSlice.reducer;
