/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useTheme } from "@emotion/react";
import {
    Avatar,
    Box,
    Button,
    Card,
    Grid,
    Modal,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { forwardRef, useState } from "react";

export const Job = forwardRef(
    (
        {
            details,
            maxSalary,
            minSalary,
            role,
            company,
            logo,
            minExperience,
            maxExperience,
            location,
            jdLink,
            currency,
        },
        ref
    ) => {
        const limit = 240;
        const [showMore, setShowMore] = useState(false);

        const theme = useTheme();
        const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

        return (
            <Grid item md={4} ref={ref}>
                <Card
                    sx={{
                        boxShadow: 3,
                        borderRadius: 4,
                        marginTop: isSmallScreen ? "10px" : "",
                    }}
                >
                    <Stack padding={"20px"} spacing={"14px"}>
                        <Stack direction={"row"} spacing={"10px"}>
                            <Avatar alt="Remy Sharp" src={`${logo}`} />
                            <Stack spacing={"5px"}>
                                <Typography
                                    variant="p"
                                    fontWeight={"bold"}
                                    fontFamily={"sans-serif"}
                                    color={"grey"}
                                >
                                    {company}
                                </Typography>
                                <Typography
                                    variant="p"
                                    fontFamily={"sans-serif"}
                                >
                                    {role}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    fontFamily={"sans-serif"}
                                >
                                    {location}
                                </Typography>
                            </Stack>
                        </Stack>
                        {currency && minSalary && maxSalary && (
                            <Stack direction={"row"} spacing={"5px"}>
                                <Typography fontSize={"14px"}>
                                    Estimated Salary:
                                </Typography>
                                <Typography fontSize={"14px"}>
                                    {currency + " "}
                                    {minSalary} - {maxSalary} LPA ✅
                                </Typography>
                            </Stack>
                        )}

                        <Stack>
                            <Typography
                                variant="p"
                                fontWeight={"bold"}
                                fontSize={"16px"}
                                fontFamily={"sans-serif"}
                            >
                                Job detail
                            </Typography>
                            <Stack>
                                <Typography>
                                    {showMore
                                        ? details.toString()
                                        : details.toString().slice(0, limit) +
                                          "..."}
                                </Typography>
                                {details.toString().length !== limit && (
                                    <Button
                                        onClick={() => setShowMore(!showMore)}
                                        variant="text"
                                        size="small"
                                    >
                                        {!showMore ? "Show more" : "Hide"}
                                    </Button>
                                )}
                            </Stack>
                        </Stack>
                        {minExperience && (
                            <Stack spacing={"4px"}>
                                <Typography
                                    variant="p"
                                    color={"grey"}
                                    fontFamily={"sans-serif"}
                                    fontWeight={"bold"}
                                >
                                    Experience Required :
                                </Typography>
                                <Typography
                                    variant="p"
                                    color={"grey"}
                                    fontFamily={"sans-serif"}
                                >
                                    {minExperience} {maxExperience ? "-" : ""}{" "}
                                    {maxExperience} years
                                </Typography>
                            </Stack>
                        )}
                        <Button
                            variant="contained"
                            size="medium"
                            sx={{
                                backgroundColor: "#0af2e7",
                                color: "black",
                                paddingBlock: "10px",
                            }}
                            href={jdLink}
                            target="_blank"
                        >
                            ⚡ Easy Apply
                        </Button>
                    </Stack>
                </Card>
            </Grid>
        );
    }
);
