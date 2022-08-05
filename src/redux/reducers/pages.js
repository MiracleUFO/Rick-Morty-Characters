import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pages: 0,
  currentPage: 1,
  currentDisplayedBatch: 1,
  displayedPageNumbers: [],
}

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPages: (state, action) => {
      state.pages = action.payload;
    },
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    updateDisplayedPageNumbers: (state, action) => {
      return {
        ...state,
        displayedPageNumbers: [...action.payload],
      };
    },
    setCurrentDisplayedBatch: (state, action) => {
      state.currentDisplayedBatch = action.payload;
    },
  }
});

export const {
  setPages,
  updateCurrentPage,
  updateDisplayedPageNumbers,
  setCurrentDisplayedBatch
} = pagesSlice.actions;

export default pagesSlice.reducer;