/* eslint-disable react/prop-types */
import { Button, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Job } from "./Job.jsx";
import {
    fetchJobs,
    getFilteredJobs,
    nextPage,
} from "../redux/jobSlice.js";
import { useEffect } from "react";

export function JobList() {
    const page = useSelector((state) => state.job.page);
    const dispatch = useDispatch();

    const { loading } = useSelector((state) => state.job);
    const filteredJob = useSelector(getFilteredJobs);

    function handleLoadMore() {
        dispatch(nextPage());
    }

    useEffect(() => {
        dispatch(fetchJobs(page));
    }, [dispatch, page]);

    return (
        <>
            <Grid container spacing={2}>
                {filteredJob.length > 0 &&
                    filteredJob.map((job) => (
                        <Job
                            details={job.jobDetailsFromCompany}
                            maxSalary={job.maxJdSalary}
                            minSalary={job.minJdSalary}
                            role={job.jobRole}
                            company={job.companyName}
                            logo={job.logoUrl}
                            minExperience={job.minExp}
                            maxExperience={job.maxExp}
                            location={job.location}
                            jdLink={job.jdLink}
                            currency={job.salaryCurrencyCode}
                            key={job.jdUid}
                        />
                    ))}
            </Grid>
            {loading && (
                <Typography variant="h4" textAlign={"center"}>
                    Loading...
                </Typography>
            )}
            {!loading && (
                <Button onClick={handleLoadMore} variant="contained">
                    Load more
                </Button>
            )}
        </>
    );
}
