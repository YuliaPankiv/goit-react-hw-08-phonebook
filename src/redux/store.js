import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './user/slice';
import { authReducer } from './auth/AuthSlice';

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    auth: authReducer,
  },
});
