/* eslint-disable no-unused-vars */
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getJobs } from "../apis";

const initialState = {
    jobs: [],
    filteredJobs: [],
    loading: true,
    error: false,
    page: 1,
    limit: 10,
    hasMoreJobs: false,
    filters: {
        roles: [],
        experience: null,
        tech: [],
        location: [],
        minimumPay: [],
        companyName: null,
        remote: null,
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

            state.jobs = [...state.jobs, ...action.payload];
        },
        fetchError(state, action) {
            state.error = true;
            state.loading = false;
        },
        nextPage(state, action) {
            state.page = state.page + 1;
        },
        setHasMore(state, action) {
            state.hasMoreJobs = action.payload;
        },
        addFilter(state, action) {
            const { category, value } = action.payload;

            // assign filters based on whether the filter type is array or not
            if (Array.isArray(state.filters[category])) {
                state.filters[category] = value;
            } else {
                if (typeof value === "string") {
                    state.filters[category] = value.length > 0 ? value : null;
                } else {
                    state.filters[category] = value;
                }
            }
        },
        removeFilter(state, action) {
            const { category, value } = action.payload;

            if (Array.isArray(state.filters[category])) {
                state.filters[category] = state.filters[category].filter(
                    (f) => f !== value
                );
            } else {
                state.filters[category] = null;
            }
        },
    },
});

// async action to fetch all the jobs from the api

function fetchJobs(page) {
    return async function (dispatch, getState) {
        dispatch(fetchStart());

        const limit = getState().job.limit;
        const jobs = await getJobs(page, limit);

        dispatch(setHasMore(jobs.jdList.length > 0)); // change just a single state, hasMore = true

        dispatch(fetchSuccess(jobs.jdList));
    };
}

export const jobSelector = (state) => state.job.jobs;
const filterSelector = (state) => state.job.filters;

export const getFilteredJobs = createSelector(
    [jobSelector, filterSelector],
    (jobs, filters) => {
        return jobs.filter((job) => {
            const roleFilter =
                !filters.roles.length ||
                filters.roles.some(
                    (f) => f.toLowerCase() === job.jobRole.toLowerCase()
                );

            const locationFilter =
                !filters.location.length ||
                filters.location.some(
                    (f) => f.toLowerCase() === job.location.toLowerCase()
                );

            const remoteFilter =
                !filters.remote ||
                (job.location &&
                    (filters.remote.toLowerCase() ===
                        job.location.toLowerCase() ||
                        (filters.remote.toLowerCase() === "on-site" &&
                            job.location.toLowerCase() !== "remote")));

            const experienceFilter =
                !filters.experience ||
                (job.minExp && parseInt(filters.experience) >= job.minExp);

            const numberedSalary = filters.minimumPay.map((p) =>
                parseInt(p.slice(0, -1))
            );
            const payFilter =
                !numberedSalary.length ||
                (job.minJdSalary &&
                    numberedSalary.some((f) => f <= job.minJdSalary));

            const companyFilter =
                !filters.companyName ||
                (job.companyName &&
                    job.companyName
                        .toLowerCase()
                        .includes(filters.companyName.toLowerCase()));

            return (
                roleFilter &&
                locationFilter &&
                remoteFilter &&
                experienceFilter &&
                payFilter &&
                companyFilter
            );
        });
    }
);

export const {
    fetchStart,
    fetchSuccess,
    fetchError,
    setHasMore,
    nextPage,
    addFilter,
    removeFilter,
} = jobSlice.actions;
export const jobReducer = jobSlice.reducer;
export { fetchJobs };
