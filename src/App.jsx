/* eslint-disable no-unused-vars */
import { Button, Container, Stack } from "@mui/material";
import { JobList } from "./components/JobList";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "./redux/jobSlice";

function App() {
    return (
        <Container>
            <Stack spacing={"40px"}>
                <JobList />
            </Stack>
        </Container>
    );
}

export default App;
