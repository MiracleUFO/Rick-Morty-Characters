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
}