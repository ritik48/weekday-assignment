/* eslint-disable react/prop-types */
import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    useMediaQuery,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterCategory } from "../constants";
import { addFilter, removeFilter } from "../redux/jobSlice";
import { useTheme } from "@emotion/react";

export function MultiSelectInput({ values, label }) {
    const category = getFilterCategory[label];

    // when filter is selected but user hides the filter bar, then state will get lost, 
    // so we have to re-initialize the filters from redux state whenever the component mounts 
    const filters = useSelector((state) => state.job.filters);

    const dispatch = useDispatch();

    const [selectValues, setSelectValues] = useState(filters[category]);
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        dispatch(addFilter({ category, value }));

        // to remove the filter when the user clicks on the already selected filter
        const removedValue = selectValues.find((f) => !value.includes(f));
        if (removedValue) {
            dispatch(removeFilter({ category, value: removedValue }));
        }

        setSelectValues(value);
        setOpen(false);
    };

    // remove the selected value
    const handleDelete = (value) => {
        dispatch(removeFilter({ category, value }));
        setSelectValues((prevSelection) => {
            return prevSelection.filter((v) => v !== value);
        });
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
                <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
                <Select
                    size="small"
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={selectValues}
                    open={open}
                    onOpen={() => setOpen(!open)}
                    onClose={() => setOpen(!open)}
                    onChange={handleChange}
                    sx={{
                        minHeight: "50px",
                    }}
                    input={
                        <OutlinedInput
                            id="select-multiple-chip"
                            label={label}
                        />
                    }
                    renderValue={(selected) => {
                        return (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                }}
                            >
                                {selected.map((value) => (
                                    <Chip
                                        key={value}
                                        label={value}
                                        onDelete={() => {
                                            handleDelete(value);
                                        }}
                                        deleteIcon={
                                            <div
                                                onMouseDown={(event) => {
                                                    event.stopPropagation();
                                                }}
                                            >
                                                <ClearIcon />
                                            </div>
                                        }
                                        sx={{
                                            borderRadius: 1,
                                            // fontSize: "14px !important",
                                        }}
                                    />
                                ))}
                            </Box>
                        );
                    }}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: 200,
                            },
                        },
                    }}
                >
                    {values.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            // sx={{ fontSize: "14px !important" }}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
