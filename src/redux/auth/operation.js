import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      setAuthHeader(data.token);

      console.log(data);
      return data;
    } catch (error) {
      return credentials.rejectWithValue(error.message);
    }
  }
);
// "Yulia"
// "pank@gmail.com"
// "12345qwerty"
export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      setAuthHeader(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk('auth/logOut', async credentials => {
  try {
    const { data } = await axios.post('/users/logOut', credentials);
    console.log(credentials);
    clearAuthHeader();
    return data;
  } catch (error) {
    return credentials.rejectWithValue(error.message);
  }
});

export const refreshCurrentUser = createAsyncThunk(
  '/users/refresh',
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;

    if (!token) {
      console.log('no token');
      return rejectWithValue();
    }

    setAuthHeader(token);
    try {
      const { data } = await axios.get('/users/current');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
  // {
  //   condition: (_, { getState }) => {
  //     const { token } = getState().auth;
  //     return Boolean(token);
  //   },
  // }
);
