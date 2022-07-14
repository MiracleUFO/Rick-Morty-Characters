import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchTerms: [],
  searchResults: []
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    updateSearch: (state, action) => {
      state.searchTerms = action.payload.length > 0 ? [...action.payload] : [];
    },
    updateSearchResults: (state, action) => {
        state.searchResults = action.payload.length > 0 ? [...action.payload] : [];
    }
  },
})

export const { updateSearch, updateSearchResults } = searchSlice.actions

export default searchSlice.reducer