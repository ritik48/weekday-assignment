import { Stack, TextField, Typography } from "@mui/material";
import { MultiSelectInput } from "./MultiSelectInput";
import {
    MinPay,
    Roles,
    Tech,
    Location,
    Experience,
} from "../constants/index.js";
import { SingleInputSelect } from "./SingleInputSelect.jsx";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../redux/jobSlice.js";

export function FilterNav() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    function handleSearch(e) {
        setSearch(e.target.value);
        dispatch(addFilter({ category: "companyName", value: e.target.value }));
    }
    return (
        <Stack spacing={"20px"}>
            <Typography textAlign={"center"} variant="h5">
                Search Jobs
            </Typography>
            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                }}
                direction={"row"}
                spacing={"10px"}
                textAlign={"center"}
            >
                <MultiSelectInput values={Roles} label={"Roles"} />

                <MultiSelectInput values={Location} label={"Location"} />
                <MultiSelectInput values={Tech} label={"Tech"} />
                <MultiSelectInput values={MinPay} label={"Minimum Pay"} />
                <SingleInputSelect label={"Experience"} values={Experience} />
                <SingleInputSelect
                    label={"Remote/On-site"}
                    values={["Remote", "On-site"]}
                />
                <TextField
                    id="standard-basic"
                    label="Company"
                    value={search}
                    onChange={handleSearch}
                    variant="standard"
                    placeholder="Search company"
                    sx={{ marginTop: "15px !important" }}
                />
            </Stack>
        </Stack>
    );
}
