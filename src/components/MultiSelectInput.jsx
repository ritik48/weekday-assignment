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
import { useDispatch } from "react-redux";
import { getFilterCategory } from "../constants";
import { addFilter, removeFilter } from "../redux/jobSlice";
import { useTheme } from "@emotion/react";

export function MultiSelectInput({ values, label }) {
    const category = getFilterCategory[label];

    const dispatch = useDispatch();

    const [selectValues, setSelectValues] = useState([]);
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        dispatch(addFilter({ category, value }));

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
                // width: "15%",
                minWidth: `${isSmallScreen ? "200px" : "130px"}`,
            }}
        >
            <FormControl
                sx={{
                    width: "100%",
                }}
            >
                <InputLabel id="demo-multiple-chip-label">{label}</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={selectValues}
                    open={open}
                    onOpen={() => setOpen(!open)}
                    onClose={() => setOpen(!open)}
                    onChange={handleChange}
                    sx={
                        {
                            fontSize: "13px !important",
                            paddingBottom: "6px",
                        }
                    }
                    input={
                        <OutlinedInput
                            id="select-multiple-chip"
                            label={label}
                            sx={{
                                border: "1px solid red !important",
                                padding: "0 !important",
                                fontSize: "2px !important",
                            }}
                        />
                    }
                    renderValue={(selected) => {
                        return (
                            <Box
                                sx={{
                                    display: "flex",
                                    width: "fit-content",
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
                                            fontSize: "14px !important",
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
                            sx={{ fontSize: "14px !important" }}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
