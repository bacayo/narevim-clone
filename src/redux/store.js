import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import getCategorySlice from './narevim/getCategorySlice';
import secondCategorySlice from './narevim/secondCategorySlice';
import thirdCategorySlice from './narevim/thirdCategorySlice';
import getSlidersSlice from './narevim/getSlidersSlice';
import getMainProductsSlice from './narevim/getMainProductsSlice';
import brandListSlice from './narevim/brandListSlice';
import specialOfferSlice from './narevim/specialOfferSlice';
import getProductDetailSlice from './narevim/getProductDetailSlice';
import loginSlice from './narevim/loginSlice';
import addressListSlice from './narevim/addressListSlice';
import logoutSlice from './narevim/logoutSlice';
import memberInfoSlice from './narevim/memberInfoSlice';
import getCitySlice from './narevim/getCitySlice';
import getTownSlice from './narevim/getTownSlice';
import productsSlice from './narevim/productsSlice';
import getBasketSlice from './narevim/getBasketSlice';

const store = configureStore({
  reducer: {
    getSlidersSlice,
    getCategorySlice,
    secondCategorySlice,
    thirdCategorySlice,
    getMainProductsSlice,
    brandListSlice,
    specialOfferSlice,
    getProductDetailSlice,
    loginSlice,
    addressListSlice,
    logoutSlice,
    memberInfoSlice,
    getCitySlice,
    getTownSlice,
    productsSlice,
    getBasketSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
