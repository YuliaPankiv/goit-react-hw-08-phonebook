import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//enf
const contactsAPI = axios.create({
  baseURL: 'https://651beec1194f77f2a5af1a88.mockapi.io/contacts',
});

export const fetchAll = createAsyncThunk(
  'users/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await contactsAPI.get('/contacts');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.massage);
    }
  }
);

// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (contact, thunkAPI) => {
//     try {
//       const data = await addContactApi(contact);
//       return data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   },
//   {
//     // condition: (contact, { getState }) => {
//     //   const { items } = getState().contacts.contacts;
//     // },
//   }
// );

export const deleteContact = createAsyncThunk(
  'contacts/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await contactsAPI.delete(`contacts/${id}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
