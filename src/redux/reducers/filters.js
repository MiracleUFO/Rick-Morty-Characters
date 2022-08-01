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
    }
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilters: (state, action) => {
            state.filters = Object.assign({}, action.payload);
        }
    }
});

export const { updateFilters } = filterSlice.actions;

export default filterSlice.reducer;