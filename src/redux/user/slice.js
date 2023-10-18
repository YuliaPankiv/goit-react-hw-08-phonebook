import { createSlice } from '@reduxjs/toolkit';
import { fetchAll } from './operation';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: '',
  },
  extraReducers: builder =>
    builder
      .addCase(fetchAll.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAll.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.contacts = payload;
        state.error = '';
      })

      .addCase(fetchAll.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.message;
      }),
});
export const contactReducer = contactsSlice.reducer;
