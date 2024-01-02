// import axios from 'axios';

// export const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// export const registerUserApi = async credentials => {
//   try {
//     const { data } = await axios.post('/users/signup', credentials);
//     setAuthHeader(data.token);
//     return data;
//   } catch (error) {
//     return credentials.rejectWithValue(error.message);
//   }
// };
// export const loginUserApi = async (user, { rejectWithValue }) => {
//   console.log(user);
//   try {
//     const { data } = await axios.post('/users/login', user);
//     setAuthHeader(data.token);
//     return data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// };
// export const logOutUserApi = async credentials => {
//   console.log(credentials);
//   try {
//     const { data } = await axios.post('/users/logOut', credentials);
//     clearAuthHeader();
//     return data;
//   } catch (error) {
//     return credentials.rejectWithValue(error.message);
//   }
// };

// export const refreshCurrentUserApi = async (
//   _,
//   { rejectWithValue, getState }
// ) => {
//   const { token } = getState().auth;

//   if (!token) {
//     return rejectWithValue();
//   }

//   setAuthHeader(token);
//   try {
//     const { data } = await axios.get('users/current');
//     return data;
//   } catch (error) {
//     return rejectWithValue(error.message);
//   }
// };
