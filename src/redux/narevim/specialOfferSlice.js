import {createSlice} from '@reduxjs/toolkit';
import {specialOfferAsync} from '../../api';

const specialOfferSlice = createSlice({
  name: 'specialOfferSlice',
  initialState: {
    items: undefined,
    moreItems: undefined,
    isLoading: false,
    speacialOfferImagePath: undefined,
    error: null,
    status: undefined,
  },
  reducers: {},
  extraReducers: {
    [specialOfferAsync.pending]: state => {
      state.isLoading = true;
    },

    [specialOfferAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload.data;
      state.moreItems = action.payload.data;
      state.speacialOfferImagePath = action.payload.image_path;
      state.status = action.payload.status;
    },

    [specialOfferAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default specialOfferSlice.reducer;
