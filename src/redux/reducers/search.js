import { getUniqueValues } from '../../helpers/getUniqueValues';
import { createSlice } from '@reduxjs/toolkit'

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
      state.search = action.payload.toLowerCase();
      state.searchTerms = getUniqueValues(action.payload.trim().toLowerCase().split(' '));
    },
    updateStrict: (state, action) => {
      state.strict = action.payload;
    },
    updateSearchTermsCountObject: (state, action) => {
      state.searchTermsCount = Object.assign({}, action.payload);
    }
  },
});

export const { updateSearch, updateStrict, updateSearchTermsCountObject } = searchSlice.actions;

export default searchSlice.reducer;