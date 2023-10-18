import { createSlice } from '@reduxjs/toolkit';
import { registerUser } from './operation';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: null,
      name: null,
      password: null,
    },
    isAuth: false,
    token: null,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log('dfg===>>', payload);

        //   ...state,
        //   isLoading: false,
        //   ...payload,
        //   isAuth: true,
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isAuth = true;
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
            console.log(state);
            state.isLoading = false;
            state.error = payload;
          }
        )
      );
  },
});
export const authReducer = authSlice.reducer;
