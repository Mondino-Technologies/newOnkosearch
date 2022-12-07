import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
    Avatar,
    FormControlLabel,
    Checkbox,
    Grid,
    Box,
    Typography,
    CssBaseline,
    Container,
    TextField,
    MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { FormattedMessage } from "react-intl";

import {
    Input,
    Form,
    MyButton,
    MyLink,
    Consent,
    RegisterSuccessModal,
} from "../../components";
import themeMain from "../../theme";
import { DispatchContext } from "../../store";
import API from "../../utils/api";

const theme = createTheme();

export default function Register() {
    const [city, setCity] = useState([{ name: "1", id: "1" }]);
    const [open, setOpen] = useState(false);
    const [org, setOrg] = useState([{ name: "1", id: "1" }]);

    const dispatch = useContext(DispatchContext);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm({
        mode: "onBlur",
    });
    function Copyright(props: any) {
        return (
            <Typography
                variant="body2"
                color="text.secondary"
                align="center"
                {...props}
            >
                Copyright © Якутский республиканский онкологический
                диспансер
                {new Date().getFullYear()}.
            </Typography>
        );
    }
    const onSubmit = (data: any) => {
        API.register(data, dispatch);
    };

    const get_city = async () => {
        await API.getCity()
            .then((res) => {
                setCity(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const get_org = () => {
        API.getOrg().then((res) => {
            setOrg(res.data.results);
        });
    };
    useEffect(() => {
        get_city();
        get_org();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <RegisterSuccessModal />
            {open && <Consent open={open} setOpen={setOpen} />}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar
                        sx={{
                            m: 1,
                            bgcolor: themeMain.palette.primary.main,
                        }}
                    >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        <FormattedMessage id="registration" />
                    </Typography>
                    <Form
                        sx={{ mt: 1 }}
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Input
                            variant="outlined"
                            label={
                                <FormattedMessage id="registration_name" />
                            }
                            {...register("first_name")}
                        />
                        <Input
                            variant="outlined"
                            label={
                                <FormattedMessage id="registration_last_name" />
                            }
                            {...register("last_name")}
                        />
                        <Input
                            variant="outlined"
                            label={
                                <FormattedMessage id="registration_patronymic" />
                            }
                            {...register("patronymic")}
                        />
                        <TextField
                            id="filled-select-currency-native"
                            select
                            label={
                                <FormattedMessage id="registration_city" />
                            }
                            SelectProps={{
                                native: true,
                            }}
                            {...register("city")}
                            fullWidth
                            variant="outlined"
                            margin="normal"
                        >
                            {city.map((item, index) => (
                                <option key={index} value={item.id}>
                                    {item.name}
                                </option>
                            ))}
                        </TextField>
                        <Grid item xs={12}>
                            <TextField
                                id="filled-select-currency-native"
                                select
                                label={
                                    <FormattedMessage id="foundation_profile" />
                                }
                                SelectProps={{
                                    native: true,
                                }}
                                {...register("institution")}
                                fullWidth
                                variant="outlined"
                                margin="normal"
                            >
                                {org.map((item, index) => (
                                    <option
                                        key={index}
                                        value={item.id}
                                    >
                                        {item.name}
                                    </option>
                                ))}
                            </TextField>
                        </Grid>
                        <Input
                            variant="outlined"
                            label={
                                <FormattedMessage id="registration_phone" />
                            }
                            {...register("phone")}
                        />
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: 10,
                            }}
                        >
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label=""
                            />
                            <Typography
                                variant="body1"
                                onClick={() => setOpen(true)}
                                sx={{
                                    cursor: "pointer",
                                    color: themeMain.palette.primary
                                        .main,
                                    textDecoration: "underline",
                                }}
                            >
                                <FormattedMessage id="registration_agreement" />
                            </Typography>
                        </Box>
                        <MyButton
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                width: "100%",
                                bgcolor:
                                    themeMain.palette.primary.main,
                                color: "black",
                            }}
                        >
                            ЗАРЕГИСТРИРОВАТЬСЯ
                        </MyButton>
                    </Form>
                    <Grid container>
                        <Grid item xs>
                            <MyLink
                                href="/login"
                                sx={{
                                    fontSize: 14,
                                    color: themeMain.palette.primary
                                        .main,
                                }}
                            >
                                <FormattedMessage id="recovery_enter_phone_number" />
                            </MyLink>
                        </Grid>
                    </Grid>
                    <Copyright sx={{ mt: 2, mb: 4 }} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}
