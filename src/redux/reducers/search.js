import { createSlice } from '@reduxjs/toolkit';

import { getUniqueValues } from '../../helpers/getUniqueValues';

const initialState = {
  strict: false,
  search: '',
  searchTerms: [],
  searchTermsCount: {}
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      return {
        ...state,
        search: action.payload.toLowerCase(),
        searchTerms: getUniqueValues(action.payload.trim().toLowerCase().split(' ')), // immutably sets searchTerms array
      }
    },
    updateStrict: (state, action) => {
      state.strict = action.payload;
    },
    updateSearchTermsCountObject: (state, action) => {
      state.searchTermsCount = Object.assign({}, action.payload);
    }
  },
});

export const {
  updateSearch,
  updateStrict,
  updateSearchTermsCountObject
} = searchSlice.actions;

export default searchSlice.reducer;