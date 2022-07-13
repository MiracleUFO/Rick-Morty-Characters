import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allCharacters: [],
  filteredCharacters: []
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action) => {
      state.allCharacters = [...action.payload]
    },
    updateCharacters: (state, action) => {
        state.filteredCharacters = [...action.payload]
    }
  },
})

export const { setCharacters, updateCharacters } = charactersSlice.actions

export default charactersSlice.reducer