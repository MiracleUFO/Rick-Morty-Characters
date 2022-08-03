import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: {
        gender: {
            male: false,
            female: false,
            unknown: false,
            genderless: false,
        },
        status: {
            dead: false,
            alive: false,
            unknown: false,
        },
        created: {
            lastYear: false,
            lastQuarter: false,
            lastThirtyDays: false,
            lastFifteenDays: false,
            lastDay: false,
        }
    },
    currentFilterTag: ''
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilters: (state, action) => {
            state.filters = Object.assign({}, action.payload);
        },
        updateCurrentFilterTag: (state, action) => {
            state.currentFilterTag = action.payload
        }
    }
});

export const { updateFilters, updateCurrentFilterTag } = filterSlice.actions;

export default filterSlice.reducer;