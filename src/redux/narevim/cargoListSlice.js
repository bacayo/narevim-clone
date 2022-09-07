import {createSlice} from '@reduxjs/toolkit';

import {cargoListAsync} from '../../api';

const cargoListSlice = createSlice({
  name: 'cargoListSlice',
  initialState: {
    cargoList: undefined,
    cargoIsLoading: false,
    cargoStatus: undefined,
    error: null,
  },
  extraReducers: {
    [cargoListAsync.pending]: state => {
      state.cargoIsLoading = true;
    },
    [cargoListAsync.fulfilled]: (state, action) => {
      state.cargoIsLoading = false;
      state.cargoList = action.payload.data;
      state.cargoStatus = action.payload.status;
    },
    [cargoListAsync.rejected]: (state, action) => {
      state.cargoIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default cargoListSlice.reducer;
