import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filters: {
        gender: {
            male: false,
            female: false,
            unknown: false
        },
        status: {
            dead: false,
            alive: false
        },
        created: {
            lastYear: false,
            lastQuarter: false,
            lastThirtyDays: false,
            lastFifteenDays: false,
        }
    },
    filterResults: []
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        updateFilters: (state, action) => {
            state.filters = Object.assign({}, action.payload);
        },
        updateFilterResults: (state, action) => {
            state.filterResults = action.payload.length > 0 ? [...action.payload] : [];
        }
    }
});

export const { updateFilterResults } = filterSlice.actions;

export default filterSlice.reducer;