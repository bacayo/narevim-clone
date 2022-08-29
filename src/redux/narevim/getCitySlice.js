import {createSlice} from '@reduxjs/toolkit';

import {getCityAsync} from '../../api';

const getCitySlice = createSlice({
  name: 'getCitySlice',
  initialState: {
    city: undefined,
    cityIsLoading: false,
    error: null,
    cityStatus: undefined,
  },
  reducers: {},
  extraReducers: {
    [getCityAsync.pending]: state => {
      state.cityIsLoading = true;
    },
    [getCityAsync.fulfilled]: (state, action) => {
      state.cityIsLoading = false;
      state.cityStatus = action.payload.status;
      state.city = action.payload.data;
    },
    [getCityAsync.rejected]: (state, action) => {
      state.cityIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default getCitySlice.reducer;

//* do extra reducers
