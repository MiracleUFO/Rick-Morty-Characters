import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pages: 0,
  currentPage: 1,
  currentDisplayedBatchNumber: 1,
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
    setCurrentDisplayedBatchNumber: (state, action) => {
      state.currentDisplayedBatchNumber = action.payload;
    },
  }
});

export const {
  setPages,
  updateCurrentPage,
  updateDisplayedPageNumbers,
  setCurrentDisplayedBatchNumber
} = pagesSlice.actions;

export default pagesSlice.reducer;