import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logOutUser,
  loginUser,
  refreshCurrentUser,
  registerUser,
} from './operation';
import {
  handleFulfilled,
  handlePending,
  handleRejected,
  logOutUserFulfilled,
  loginUserFulfilled,
  refreshCurrentUserFulfilled,
  registerUserFulfilled,
  typeAction,
} from 'redux/helper/helpersFuncAuthSlice';

const initialState = {
  user: {
    email: null,
    name: null,
  },
  token: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, registerUserFulfilled)
      .addCase(loginUser.fulfilled, loginUserFulfilled)
      .addCase(refreshCurrentUser.fulfilled, refreshCurrentUserFulfilled)
      .addCase(logOutUser.fulfilled, logOutUserFulfilled)
      .addMatcher(isAnyOf(...typeAction('pending')), handlePending)
      .addMatcher(isAnyOf(...typeAction('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...typeAction('rejected')), handleRejected);
  },
});
export const authReducer = authSlice.reducer;
