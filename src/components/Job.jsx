/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar, Button, Card, Grid, Stack, Typography } from "@mui/material";

export function Job({
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
}) {
    return (
        <Grid item md={4}>
            <Card>
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
                            <Typography variant="p" fontFamily={"sans-serif"}>
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
                    <Stack direction={"row"} spacing={"5px"}>
                        <Typography fontSize={"14px"}>
                            Estimated Salary:
                        </Typography>
                        <Typography fontSize={"14px"}>
                            {currency}
                            {minSalary} - {maxSalary} LPA ✅
                        </Typography>
                    </Stack>

                    <Stack>
                        <Typography
                            variant="p"
                            fontWeight={"bold"}
                            fontSize={"16px"}
                            fontFamily={"sans-serif"}
                        >
                            Job detail
                        </Typography>
                        <Typography>
                            {details.toString().slice(0, 240)}
                        </Typography>
                    </Stack>
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
                            {minExperience} - {maxExperience} years
                        </Typography>
                    </Stack>
                    <Button variant="contained" size="medium">
                        Easy Apply
                    </Button>
                </Stack>
            </Card>
        </Grid>
    );
}