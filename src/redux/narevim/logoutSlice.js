import {createSlice} from '@reduxjs/toolkit';

import {logoutAsync} from '../../api';

const logoutSlice = createSlice({
  name: 'logoutSlice',
  initialState: {
    logoutIsLoading: false,
    logoutStatus: undefined,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [logoutAsync.pending]: state => {
      state.logoutIsLoading = true;
    },
    [logoutAsync.fulfilled]: (state, action) => {
      state.logoutIsLoading = false;
      state.logoutStatus = action.payload.status;
    },
    [logoutAsync.rejected]: (state, action) => {
      state.logoutIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default logoutSlice.reducer;
