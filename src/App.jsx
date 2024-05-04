/* eslint-disable no-unused-vars */
import { Container, Stack } from "@mui/material";
import { JobList } from "./components/JobList";
import { FilterNav } from "./components/FilterNav";

function App() {
    return (
        <Container>
            <Stack spacing={"40px"} marginTop={"40px"}>
                <FilterNav />
                <JobList />
            </Stack>
        </Container>
    );
}

export default App;
