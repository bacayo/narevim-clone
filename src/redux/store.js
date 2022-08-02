import {configureStore} from '@reduxjs/toolkit';
import getCategorySlice from './narevim/getCategorySlice';

const store = configureStore({
  reducer: {
    getCategorySlice,
  },
});

export default store;
