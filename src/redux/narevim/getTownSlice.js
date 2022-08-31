import {createSlice} from '@reduxjs/toolkit';

import {getTownAsync} from '../../api';

const getTownSlice = createSlice({
  name: 'getTownSlice',
  initialState: {
    townIsLoading: false,
    town: undefined,
    error: null,
    townStatus: undefined,
  },
  extraReducers: {
    [getTownAsync.pending]: state => {
      state.townIsLoading = true;
    },
    [getTownAsync.fulfilled]: (state, action) => {
      state.townIsLoading = false;
      state.town = action.payload.data;
      state.townStatus = action.payload.status;
    },
    [getTownAsync.rejected]: (state, action) => {
      state.error = action.error.message;
    },
  },
});

export default getTownSlice.reducer;
