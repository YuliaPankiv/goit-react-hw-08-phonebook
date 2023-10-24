import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactApi,
  getContactsApi,
  removeContactApi,
} from 'redux/servises/api';

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({name, number} , { rejectWithValue }) => {
    debugger;
    try {
      debugger;

      const data = await addContactApi({name, number});
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
  // {
  //   condition: (contact, { getState }) => {
  //     const { items } = getState().contacts.contacts;
  //   },
  // }
);
export const getContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (token, { rejectWithValue }) => {
    try {
      const data = await getContactsApi(token);
      console.log(data);
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await removeContactApi(id);
      return data.id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
