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

export function FilterNav() {
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
                <TextField
                    id="standard-basic"
                    label="Company"
                    variant="standard"
                    placeholder="Search company"
                    sx={{ marginTop: "15px !important" }}
                />
            </Stack>
        </Stack>
    );
}
