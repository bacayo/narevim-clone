import {createSlice} from '@reduxjs/toolkit';

import {favoriteListAsync} from '../../api';

const favoriteListSlice = createSlice({
  name: 'favoriteListSlice',
  initialState: {
    favorites: undefined,
    favoritesIsLoading: false,
    favoritesStatus: undefined,
    error: null,
    favoritesImagePath: undefined,
  },
  extraReducers: {
    [favoriteListAsync.pending]: state => {
      state.favoritesIsLoading = true;
    },
    [favoriteListAsync.fulfilled]: (state, action) => {
      state.favoritesIsLoading = false;
      state.favorites = action.payload.data;
      state.favoritesStatus = action.payload.status;
      state.favoritesImagePath = action.payload.image_path;
    },
    [favoriteListAsync.rejected]: (state, action) => {
      state.favoritesIsLoading = false;
      state.error = action.error.message;
    },
  },
});

export default favoriteListSlice.reducer;
