import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter } from "../redux/jobSlice";

export function TextInput() {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();

    function handleSearch(e) {
        setSearch(e.target.value);
        dispatch(addFilter({ category: "companyName", value: e.target.value }));
    }
    return (
        <TextField
            id="standard-basic"
            label="Company"
            value={search}
            onChange={handleSearch}
            variant="standard"
            placeholder="Search company"
            sx={{ marginTop: "15px !important" }}
        />
    );
}
