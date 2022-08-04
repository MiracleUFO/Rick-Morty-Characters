import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  charactersLength: 0,
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    updateCharactersLength: (state, action) => {
      state.charactersLength = action.payload;
    }
  },
});

export const { updateCharactersLength } = charactersSlice.actions;

export default charactersSlice.reducer;