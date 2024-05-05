import { Button, Stack, Typography, useMediaQuery } from "@mui/material";
import { MultiSelectInput } from "./MultiSelectInput";
import {
    MinPay,
    Roles,
    Tech,
    Location,
    Experience,
} from "../constants/index.js";
import { SingleInputSelect } from "./SingleInputSelect.jsx";
import { TextInput } from "./TextInput.jsx";
import { useTheme } from "@emotion/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getFilteredJobs } from "../redux/jobSlice.js";

export function FilterNav() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    
    const filteredJob = useSelector(getFilteredJobs);
    const [showFilter, setShowFilter] = useState(true);

    return (
        <Stack spacing={"20px"}>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Typography textAlign={"center"} variant="h5">
                    Search Jobs
                </Typography>
                <sup className="results">{filteredJob.length}</sup>
            </div>
            {showFilter && (
                <Stack
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: isSmallScreen ? "6px" : "10px",
                    }}
                    direction={isSmallScreen ? "column" : "row"}
                    textAlign={"center"}
                >
                    <MultiSelectInput values={Roles} label={"Roles"} />

                    <MultiSelectInput values={Location} label={"Location"} />
                    <MultiSelectInput values={Tech} label={"Tech"} />
                    <MultiSelectInput values={MinPay} label={"Minimum Pay"} />
                    <SingleInputSelect
                        label={"Experience"}
                        values={Experience}
                    />
                    <SingleInputSelect
                        label={"Remote/On-site"}
                        values={["Remote", "On-site"]}
                    />
                    <TextInput />
                </Stack>
            )}
            {isSmallScreen && (
                <Button
                    variant="outlined"
                    onClick={() => setShowFilter(!showFilter)}
                >
                    {showFilter ? "Hide Filters" : "Show Filters"}
                </Button>
            )}
        </Stack>
    );
}
