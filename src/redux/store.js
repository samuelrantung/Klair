import {configureStore} from '@reduxjs/toolkit';
import loadingReducer from './counter/loadingSlice';
import phoneVerificationReducer from './counter/phoneVerificationSlice';

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    menuState: phoneVerificationReducer,
  },
});
