import { createSlice } from '@reduxjs/toolkit';
import { addNewContact, fetchContacts, removeContact } from './operations';

const initialState = {
  items: [],
  filter: '',
};

const counterSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: {
    [fetchContacts.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        items: [...state.items, ...payload],
      };
    },
    [removeContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.filter(({ id }) => id !== payload.id),
    }),
    [addNewContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
    }),
  },
});
console.log(counterSlice);

export const { filter } = counterSlice.actions;
export default counterSlice.reducer;
