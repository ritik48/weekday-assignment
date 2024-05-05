/* eslint-disable react/prop-types */
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Job } from "./Job.jsx";
import { fetchJobs, getFilteredJobs, nextPage } from "../redux/jobSlice.js";
import { useCallback, useEffect, useRef } from "react";
import Loader from "./Loader.jsx";
import { useTheme } from "@emotion/react";

export function JobList() {
    const page = useSelector((state) => state.job.page);
    const dispatch = useDispatch();

    const { loading, hasMoreJobs } = useSelector((state) => state.job);
    const filteredJob = useSelector(getFilteredJobs);

    // infinite scroll logic -> trigger fetch when last node is completely visible
    const observer = useRef();
    const lastJobRef = useCallback(
        (job) => {
            if (loading) return;

            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting && hasMoreJobs) {
                        dispatch(nextPage());
                    }
                },
                { root: null, rootMargin: "0px", threshold: 1 }
            );

            if (job) {
                observer.current.observe(job);
            }
        },
        [loading, hasMoreJobs, dispatch]
    );

    // load the jobs on component mount
    useEffect(() => {
        dispatch(fetchJobs(page));
    }, [dispatch, page]);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
            <Grid container spacing={isSmallScreen ? 0 : 2}>
                {filteredJob.length > 0 &&
                    filteredJob.map((job, index) =>
                        index + 1 === filteredJob.length ? (
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
                                ref={lastJobRef}
                            />
                        ) : (
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
                        )
                    )}
            </Grid>
            {loading && <Loader />}
            {!loading && filteredJob.length === 0 && (
                <Typography variant="h6" textAlign={"center"}>
                    No jobs found
                </Typography>
            )}
        </>
    );
}
