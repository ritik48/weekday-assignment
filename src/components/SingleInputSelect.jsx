/* eslint-disable react/prop-types */
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../redux/jobSlice";
import { getFilterCategory } from "../constants";
import { useTheme } from "@emotion/react";

export function SingleInputSelect({ label, values }) {
    const category = getFilterCategory[label];

    const [open, setOpen] = useState(false);

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
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <div
            style={{
                marginBlock: "2px",
                minWidth: `${isSmallScreen ? "200px" : "170px"}`,
            }}
        >
            <FormControl
                sx={{
                    width: "100%",
                }}
                focused={open}
            >
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label={label}
                    onOpen={() => setOpen(!open)}
                    onClose={() => setOpen(!open)}
                    onChange={handleChange}
                    size="small"
                    sx={{
                        minHeight: "50px",
                    }}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {values.map((v) => (
                        <MenuItem
                            key={v}
                            value={v}
                            // sx={{ fontSize: "14px !important" }}
                        >
                            {v}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
