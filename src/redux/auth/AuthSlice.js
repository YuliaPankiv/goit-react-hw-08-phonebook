import { createSlice } from '@reduxjs/toolkit';
import {
  logOutUser,
  loginUser,
  refreshCurrentUser,
  registerUser,
} from './operation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: null,
      name: null,
    },
    isAuth: false,
    token: null,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return { ...state, isLoading: false, ...payload, isAuth: true };
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        return { ...state, isLoading: false, ...payload, isAuth: true };
      })
      .addCase(refreshCurrentUser.fulfilled, (state, { payload }) => {
        return { ...state, isLoading: false, ...payload, isAuth: true };
      })
      .addCase(logOutUser.fulfilled, state => {
        state.isLoading = false;
        state.user = { name: '', email: '' };
        state.isAuth = false;
      })

      .addMatcher(action =>
        action.type.startsWith(
          'auth' && action.type.endsWith('/pending'),
          state => {
            state.isLoading = true;
          }
        )
      )
      .addMatcher(action =>
        action.type.startsWith(
          'auth' && action.type.endsWith('/rejected'),
          (state, { payload }) => {
            state.isLoading = false;
            state.error = payload;
          }
        )
      );
  },
});
export const authReducer = authSlice.reducer;
