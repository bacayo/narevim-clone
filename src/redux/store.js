import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import getCategorySlice from './narevim/getCategorySlice';
import getSlidersSlice from './narevim/getSlidersSlice';
import getMainProductsSlice from './narevim/getMainProductsSlice';
import brandListSlice from './narevim/brandListSlice';

const store = configureStore({
  reducer: {
    getSlidersSlice,
    getCategorySlice,
    getMainProductsSlice,
    brandListSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
