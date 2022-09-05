import {createSlice} from '@reduxjs/toolkit';

const favoriteListSlice = createSlice({
  name: 'favoriteListSlice',
  initialState: {
    favorites: undefined,
    favoritesIsLoading: false,
    favoritesStatus: undefined,
    error: null,
  },
  extraReducers: {},
});

export default favoriteListSlice.reducer;
