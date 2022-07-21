import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, deleteContact, addContact } from '../api/contacts';

export const fetchContacts = createAsyncThunk(
  'user/fetchContactsStatus',
  async () => {
    const response = await getContacts();
    return response;
  }
);

export const removeContact = createAsyncThunk(
  'user/removeContactStatus',
  async (id) => {
    const response = await deleteContact(id);
    return response;
  }
);

export const addNewContact = createAsyncThunk(
  'user/addContactStatus',
  async (newUser) => {
    const response = await addContact(newUser);
    return response;
  }
);
