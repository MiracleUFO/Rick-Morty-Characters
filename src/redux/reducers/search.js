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
      state.search = action.payload;
      state.searchTerms = action.payload.trim().split(' ');
    }
  },
});

export const { updateSearch } = searchSlice.actions;

export default searchSlice.reducer;