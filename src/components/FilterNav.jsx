import { Stack, Typography, useMediaQuery } from "@mui/material";
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

export function FilterNav() {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
                    gap: isSmallScreen ? "6px" : "10px",
                }}
                direction={isSmallScreen ? "column" : "row"}
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
                <TextInput />
            </Stack>
        </Stack>
    );
}
