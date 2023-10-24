export const selectIsLoading = state => state.auth.isLoading;
export const selectIsAuth = state => state.auth.isAuth;
export const selectEmail = state => state.auth.user.email;
export const selectToken = state => state.auth.token;
