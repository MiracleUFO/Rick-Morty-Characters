import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allCharacters: [],
  results: []
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.allCharacters = action.payload.length > 0 ? [...action.payload] : [];
    },
    updateCharacters: (state, action) => {
        state.results = action.payload.length > 0 ? [...action.payload] : [];
    }
  },
})

export const { setCharacters, updateCharacters } = charactersSlice.actions

export default charactersSlice.reducer