import {configureStore} from '@reduxjs/toolkit';
import loadingReducer from './counter/loadingSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
  },
});
