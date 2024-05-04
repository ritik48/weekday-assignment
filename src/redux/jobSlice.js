/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { getJobs } from "../apis";

const initialState = {
    jobs: [],
    loading: true,
    error: false,
    page: 1,
    limit: 10,
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
        fetchSuccess(state, action) {
            state.loading = false;
            console.log(state);
            console.log(action.payload);
            state.jobs = [...state.jobs, ...action.payload];
        },
        fetchError(state, action) {
            state.error = true;
            state.loading = false;
        },
        nextPage(state, action) {
            state.page = state.page + 1;
        },
    },
});

function fetchJobs(page) {
    return async function (dispatch, getState) {
        dispatch(fetchStart());

        const limit = getState().job.limit;
        const jobs = await getJobs(page, limit);

        dispatch(fetchSuccess(jobs.jdList));
    };
}

export const { fetchStart, fetchSuccess, fetchError, nextPage } =
    jobSlice.actions;
export const jobReducer = jobSlice.reducer;
export { fetchJobs };
