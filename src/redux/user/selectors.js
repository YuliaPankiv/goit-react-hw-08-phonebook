import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contact.contacts.items;
export const selectIsLoading = state => state.contact.contacts.isLoading;
export const selectFilter = state => state.contact.filter;
export const selectError = state => state.contact.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(el =>
      el.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
