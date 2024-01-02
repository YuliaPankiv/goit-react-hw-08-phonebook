// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { addContactApi, getContactsApi, removeContactApi } from 'servises/api';

// // const setAuthHeader = token => {
// //   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// // };

// // const clearAuthHeader = () => {
// //   axios.defaults.headers.common.Authorization = '';
// // };

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, { rejectWithValue }) => {
//     try {
//       const data = await addContactApi(contact);
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//     // {
//     //   condition: (contact, { getState }) => {
//     //     const { items } = getState().contacts.contacts;
//     //   },
//     // }
//   }
// );

// export const getContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async ({ rejectWithValue }) => {
//     try {
//       console.log('cfvgbh');
//       const data = await getContactsApi();
//       return data;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, { rejectWithValue }) => {
//     try {
//       const data = await removeContactApi(id);
//       return data.id;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  getContactsApi,
  removeContactApi,
} from '../../servises/contactApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    console.log('fetch');
    debugger;
    try {
      const data = await getContactsApi();
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    console.log(contact);
    debugger;
    try {
      const data = await addContactApi(contact);
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await removeContactApi(id);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

// export const editContact = createAsyncThunk(
//   'contacts / update',
//   async (id, thunkAPI) => {
//     try {
//       const { data } = await EditContactsApi(id);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
