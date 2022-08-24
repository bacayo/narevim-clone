import {createSlice} from '@reduxjs/toolkit';
import {loginAsync} from '../../api';

const loginSlice = createSlice({
  name: 'loginSlice',
  initialState: {
    loginIsLoading: false,
    user: undefined,
    loginError: null,
    loginStatus: undefined,
  },
  reducers: {},
  extraReducers: {
    [loginAsync.pending]: state => {
      state.loginIsLoading = true;
    },
    [loginAsync.fulfilled]: (state, action) => {
      state.loginIsLoading = false;
      state.user = action.payload.data;
      state.loginStatus = action.payload.status;
    },
    [loginAsync.rejected]: (state, action) => {
      state.loginIsLoading = false;
      state.loginError = action.error.message;
    },
  },
});

export default loginSlice.reducer;
