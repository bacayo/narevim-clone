import {createSlice} from '@reduxjs/toolkit';

import {memberInfoAsync} from '../../api';

const memberInfoSlice = createSlice({
  name: 'memberInfoSlice',
  initialState: {
    memberInfoIsLoading: false,
    memberInfoStatus: undefined,
    memberInfo: undefined,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [memberInfoAsync.pending]: state => {
      state.memberInfoIsLoading = true;
    },
    [memberInfoAsync.fulfilled]: (state, action) => {
      state.memberInfoIsLoading = false;
      state.memberInfoStatus = action.payload.status;
      state.memberInfo = action.payload.data;
    },
    [memberInfoAsync.rejected]: (state, action) => {
      state.memberInfoIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default memberInfoSlice.reducer;
