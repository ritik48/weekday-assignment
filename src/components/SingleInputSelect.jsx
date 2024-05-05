/* eslint-disable react/prop-types */
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../redux/jobSlice";
import { getFilterCategory } from "../constants";

export function SingleInputSelect({ label, values }) {
    const category = getFilterCategory[label];

    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.value.length < 1) {
            dispatch(removeFilter({ category, value: event.target.value }));
        } else {
            dispatch(addFilter({ category, value: event.target.value }));
        }
        setValue(event.target.value);
    };
    return (
        <div style={{ marginBlock: "2px" }}>
            <FormControl sx={{ minWidth: 120 }}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {values.map((v) => (
                        <MenuItem key={v} value={v}>
                            {v}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
