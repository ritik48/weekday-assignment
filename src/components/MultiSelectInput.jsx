/* eslint-disable react/prop-types */
import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export function MultiSelectInput({ values, label }) {
    const [selectValues, setSelectValues] = useState([]);
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;

        setSelectValues(value);
        setOpen(false);
    };

    const handleDelete = (value) => {
        setSelectValues((prevSelection) => {
            return prevSelection.filter((v) => v !== value);
        });
    };
    return (
        <div style={{ marginBlock: "2px" }}>
            <FormControl sx={{ minWidth: 200 }}>
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
                                        sx={{ borderRadius: 1 }}
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
                        <MenuItem key={name} value={name}>
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
