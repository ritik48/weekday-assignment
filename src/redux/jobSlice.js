/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobs: [],
    loading: true,
    error: false,
    filters: {
        roles: [],
        numberOfEmployees: [],
        experience: null,
        location: [],
        baseSalary: null,
        companyName: null,
    },
};

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        fetchStart(state, action) {
            state.loading = true;
        },
        fecthSuccess(state, action) {
            state.loading = false;
            state.jobs = action.payload;
        },
        fetchError(state, action) {
            state.error = true;
            state.loading = false;
        },
    },
});

export const { fetchStart, fecthSuccess, fetchError } = jobSlice.actions;
export const jobReducer = jobSlice.reducer;