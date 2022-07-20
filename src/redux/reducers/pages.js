import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  noOfPages: 0,
  currentPage: 1
}

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPages: (state, action) => {
      state.noOfPages = action.payload;
    },
    updateCurrentPage: (state, action) => {
        state.currentPage = action.payload;
    }
  },
})

export const { setPages, updateCurrentPage } = pagesSlice.actions

export default pagesSlice.reducer