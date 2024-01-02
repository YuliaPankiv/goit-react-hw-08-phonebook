import {
  logOutUser,
  loginUser,
  refreshCurrentUser,
  registerUser,
} from 'redux/auth/operation';

export const arrThunk = [
  logOutUser,
  loginUser,
  refreshCurrentUser,
  registerUser,
];

export const typeAction = type => arrThunk.map(el => el[type]);
export const registerUserFulfilled = (state, { payload }) => {
  console.log(payload);

  state.user = payload.user;
  state.token = payload.token;
  state.isAuth = true;
};
export const loginUserFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isAuth = true;
};
export const refreshCurrentUserFulfilled = (state, { payload }) => {
  state.user = payload;
  console.log(payload);
  state.isAuth = true;
};
export const logOutUserFulfilled = state => {
  return (state = {
    user: {
      email: null,
      name: null,
    },
    isAuth: false,
    token: null,
    error: null,
  });
};
export const handlePending = state => {
  state.isAuth = true;
};
export const handleFulfilled = state => {
  // state.isLoading = false;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
