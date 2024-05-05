import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../redux/jobSlice";

export function TextInput() {
    // when filter is selected but user hides the filter bar, then state will get lost,
    // so we have to re-initialize the filters from redux state whenever the component mounts
    const filters = useSelector((state) => state.job.filters);

    const [search, setSearch] = useState(filters["companyName"] ?? "");

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
