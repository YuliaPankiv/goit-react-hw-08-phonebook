import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './user/slice';
import { authReducer } from './auth/AuthSlice';

const authPersistedConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authPersistedReducer = persistReducer(authPersistedConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    contact: contactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
