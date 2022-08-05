import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  searchTerms: []
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
        searchTerms: action.payload.trim().split(' '), // immutably sets searchTerms array
      }
    }
  },
});

export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;