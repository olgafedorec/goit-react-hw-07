import { createSelector } from 'reselect';

export const selectContact = state => state.contacts.items;
export const selectFilter = state => state.filters;

export const selectNameFilter = createSelector(
    [selectContact, selectFilter], 
    (contacts, filter) => {
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(lowerCaseFilter));
  }
);


