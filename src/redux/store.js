import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsOps';
import { filterReducer } from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
