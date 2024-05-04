import { Button, Card, Grid, Stack, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { useSelector } from "react-redux";

export function Category() {
    const loading = useSelector((state) => state.job.loading);

    return loading ? (
        <Typography variant="h4" textAlign={"center"}>
            Loading...
        </Typography>
    ) : (
        <Grid container spacing={2}>
            <Grid item md={4}>
                <Card>
                    <Stack padding={"20px"} spacing={"14px"}>
                        <Stack direction={"row"} spacing={"10px"}>
                            <AdbIcon />
                            <Stack spacing={"5px"}>
                                <Typography
                                    variant="p"
                                    fontWeight={"bold"}
                                    fontFamily={"sans-serif"}
                                    color={"grey"}
                                >
                                    Firefle
                                </Typography>
                                <Typography
                                    variant="p"
                                    fontFamily={"sans-serif"}
                                >
                                    Frontend Engineer
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    fontFamily={"sans-serif"}
                                >
                                    India
                                </Typography>
                            </Stack>
                        </Stack>
                        <Typography fontSize={"14px"}>
                            Estimated Salary: ₹30 - 50 LPA ✅
                        </Typography>
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
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta, error minus! Unde, et
                                officia voluptatem in eum laborum nihil quod
                                saepe doloremque facere asperiores maxime
                                maiores vitae aut porro aliquid? Quibusdam
                                cumque obcaecati dolorem eveniet et, rem at
                                magni id consequatur, voluptatibus
                            </Typography>
                        </Stack>
                        <Stack spacing={"4px"}>
                            <Typography
                                variant="p"
                                color={"grey"}
                                fontFamily={"sans-serif"}
                            >
                                Min Experience 4 years
                            </Typography>
                            <Typography
                                variant="p"
                                color={"grey"}
                                fontFamily={"sans-serif"}
                            >
                                4 years
                            </Typography>
                        </Stack>
                        <Button variant="contained" size="medium">
                            Easy Apply
                        </Button>
                    </Stack>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card>
                    <Stack padding={"20px"} spacing={"14px"}>
                        <Stack direction={"row"} spacing={"10px"}>
                            <AdbIcon />
                            <Stack spacing={"5px"}>
                                <Typography
                                    variant="p"
                                    fontWeight={"bold"}
                                    fontFamily={"sans-serif"}
                                    color={"grey"}
                                >
                                    Firefle
                                </Typography>
                                <Typography
                                    variant="p"
                                    fontFamily={"sans-serif"}
                                >
                                    Frontend Engineer
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    fontFamily={"sans-serif"}
                                >
                                    India
                                </Typography>
                            </Stack>
                        </Stack>
                        <Typography fontSize={"14px"}>
                            Estimated Salary: ₹30 - 50 LPA ✅
                        </Typography>
                        <Stack>
                            <Typography
                                variant="p"
                                fontWeight={"bold"}
                                fontSize={"16px"}
                                fontFamily={"sans-serif"}
                            >
                                About us
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta, error minus! Unde, et
                                officia voluptatem in eum laborum nihil quod
                                saepe doloremque facere asperiores maxime
                                maiores vitae aut porro aliquid? Quibusdam
                                cumque obcaecati dolorem eveniet et, rem at
                                magni id consequatur, voluptatibus
                            </Typography>
                        </Stack>
                        <Stack spacing={"4px"}>
                            <Typography
                                variant="p"
                                color={"grey"}
                                fontFamily={"sans-serif"}
                            >
                                Min Experience 4 years
                            </Typography>
                            <Typography
                                variant="p"
                                color={"grey"}
                                fontFamily={"sans-serif"}
                            >
                                4 years
                            </Typography>
                        </Stack>
                        <Button variant="contained" size="medium">
                            Easy Apply
                        </Button>
                    </Stack>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card>
                    <Stack padding={"20px"} spacing={"14px"}>
                        <Stack direction={"row"} spacing={"10px"}>
                            <AdbIcon />
                            <Stack spacing={"5px"}>
                                <Typography
                                    variant="p"
                                    fontWeight={"bold"}
                                    fontFamily={"sans-serif"}
                                    color={"grey"}
                                >
                                    Firefle
                                </Typography>
                                <Typography
                                    variant="p"
                                    fontFamily={"sans-serif"}
                                >
                                    Frontend Engineer
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    fontFamily={"sans-serif"}
                                >
                                    India
                                </Typography>
                            </Stack>
                        </Stack>
                        <Typography fontSize={"14px"}>
                            Estimated Salary: ₹30 - 50 LPA ✅
                        </Typography>
                        <Stack>
                            <Typography
                                variant="p"
                                fontWeight={"bold"}
                                fontSize={"16px"}
                                fontFamily={"sans-serif"}
                            >
                                About us
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta, error minus! Unde, et
                                officia voluptatem in eum laborum nihil quod
                                saepe doloremque facere asperiores maxime
                                maiores vitae aut porro aliquid? Quibusdam
                                cumque obcaecati dolorem eveniet et, rem at
                                magni id consequatur, voluptatibus
                            </Typography>
                        </Stack>
                        <Stack spacing={"4px"}>
                            <Typography
                                variant="p"
                                color={"grey"}
                                fontFamily={"sans-serif"}
                            >
                                Min Experience 4 years
                            </Typography>
                            <Typography
                                variant="p"
                                color={"grey"}
                                fontFamily={"sans-serif"}
                            >
                                4 years
                            </Typography>
                        </Stack>
                        <Button variant="contained" size="medium">
                            Easy Apply
                        </Button>
                    </Stack>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card>
                    <Stack padding={"20px"} spacing={"14px"}>
                        <Stack direction={"row"} spacing={"10px"}>
                            <AdbIcon />
                            <Stack spacing={"5px"}>
                                <Typography
                                    variant="p"
                                    fontWeight={"bold"}
                                    fontFamily={"sans-serif"}
                                    color={"grey"}
                                >
                                    Firefle
                                </Typography>
                                <Typography
                                    variant="p"
                                    fontFamily={"sans-serif"}
                                >
                                    Frontend Engineer
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    fontFamily={"sans-serif"}
                                >
                                    India
                                </Typography>
                            </Stack>
                        </Stack>
                        <Typography fontSize={"14px"}>
                            Estimated Salary: ₹30 - 50 LPA ✅
                        </Typography>
                        <Stack>
                            <Typography
                                variant="p"
                                fontWeight={"bold"}
                                fontSize={"16px"}
                                fontFamily={"sans-serif"}
                            >
                                About us
                            </Typography>
                            <Typography>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Soluta, error minus! Unde, et
                                officia voluptatem in eum laborum nihil quod
                                saepe doloremque facere asperiores maxime
                                maiores vitae aut porro aliquid? Quibusdam
                                cumque obcaecati dolorem eveniet et, rem at
                                magni id consequatur, voluptatibus
                            </Typography>
                        </Stack>
                        <Stack spacing={"4px"}>
                            <Typography
                                variant="p"
                                color={"grey"}
                                fontFamily={"sans-serif"}
                            >
                                Min Experience 4 years
                            </Typography>
                            <Typography
                                variant="p"
                                color={"grey"}
                                fontFamily={"sans-serif"}
                            >
                                4 years
                            </Typography>
                        </Stack>
                        <Button variant="contained" size="medium">
                            Easy Apply
                        </Button>
                    </Stack>
                </Card>
            </Grid>
        </Grid>
    );
}
