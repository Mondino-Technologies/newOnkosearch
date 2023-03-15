import React, { useState, useEffect, useContext } from "react";

import { MenuProfile } from "../../../components";
import API from "../../../utils/api";
import { DispatchContext } from "../../../store";

import { CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import cookie from "js-cookie";
import { FormattedMessage } from "react-intl";

import {
    Button,
    TextField,
    Grid,
    Box,
    Container,
    Typography,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@mui/material";

const BoxWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
}));

const FormProfile = () => {
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [gender, setGender] = useState("");
    const [snils, setSnils] = useState("");
    const [oms, setOms] = useState("");
    const [surname, setSurname] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [institution, setInstitution] = useState(1);
    const [city, setCity] = useState([{ name: "1", id: "1" }]);
    const [isOpen, setOpen] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const dispatch = useContext(DispatchContext);

    const handleUpdateProfile = () => {
        API.putAccountUser(
            {
                first_name: name,
                birth_date: date,
                sex: gender,
                snils: snils,
                oms: oms,
                last_name: surname,
                organisation: institution,
                patronymic: fatherName,
            },
            dispatch
        );
    };

    useEffect(() => {
        API.getAccountUser().then((res) => {
            const data = res.data;
            setName(data.first_name);
            setDate(data.birth_date);
            setSurname(data.last_name);
            setFatherName(data.patronymic);
            setGender(data.sex);
            setSnils(data.snils);
            setOms(data.oms);
            setInstitution(
                data.organisation == null ? 1 : data.organisation
            );
            localStorage.setItem("date", data.birth_date);
            dispatch({
                type: "modalSurvey",
                payload: { username: data.first_name },
            });
            setLoading(false);
        });
        API.getOrg().then((res) => {
            setCity(res.data.results);
        });
    }, []);
    const handleChange = (event: any) => {
        setGender(event.target.value);
    };
    const handleInstitution = (event: any) => {
        setInstitution(event.target.value);
    };
    return (
        <Container>
            <BoxWrapper>
                <MenuProfile />
                <Container
                    component="main"
                    maxWidth="xs"
                    sx={{ mt: 8 }}
                >
                    <Box>
                        <Box mt={3}>
                            <Typography
                                component="h1"
                                variant="h5"
                                align={"center"}
                            >
                                <FormattedMessage id="profile_menu" />
                            </Typography>
                        </Box>
                        {loading ? (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    width: "100%",
                                    marginTop: 3,
                                }}
                            >
                                <CircularProgress />
                            </Box>
                        ) : (
                            <Grid
                                container
                                spacing={2}
                                sx={{ mt: 3 }}
                            >
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <TextField
                                        id={"outlined-basic"}
                                        fullWidth
                                        label={
                                            <FormattedMessage id="registration_name" />
                                        }
                                        variant={"outlined"}
                                        required
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id={"outlined-basic"}
                                        fullWidth
                                        label={
                                            <FormattedMessage id="registration_last_name" />
                                        }
                                        variant={"outlined"}
                                        required
                                        value={surname}
                                        onChange={(e) => {
                                            setSurname(
                                                e.target.value
                                            );
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id={"outlined-basic"}
                                        fullWidth
                                        label={
                                            <FormattedMessage id="registration_patronymic" />
                                        }
                                        variant={"outlined"}
                                        required
                                        value={fatherName}
                                        onChange={(e) => {
                                            setFatherName(
                                                e.target.value
                                            );
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl component="fieldset">
                                        <FormLabel component="legend">
                                            <FormattedMessage id="sex_profile" />
                                        </FormLabel>
                                        <RadioGroup
                                            aria-label="gender"
                                            name="gender1"
                                            value={gender}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel
                                                value="Ж"
                                                control={<Radio />}
                                                label={
                                                    <FormattedMessage id="woman_profile" />
                                                }
                                            />
                                            <FormControlLabel
                                                value="М"
                                                control={<Radio />}
                                                label={
                                                    <FormattedMessage id="man_profile" />
                                                }
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id={"outlined-basic"}
                                        label={
                                            <FormattedMessage id="birthdate_profile" />
                                        }
                                        type={"date"}
                                        required
                                        fullWidth
                                        variant={"outlined"}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={date}
                                        onChange={(e) => {
                                            setDate(e.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id={"phone"}
                                        label={
                                            <FormattedMessage id="snils_profile" />
                                        }
                                        variant={"outlined"}
                                        name={"phone"}
                                        required
                                        fullWidth
                                        inputProps={{ maxLength: 11 }}
                                        value={snils}
                                        onChange={(e) => {
                                            const regex =
                                                /^[0-9\b]+$/;
                                            if (
                                                e.target.value ===
                                                    "" ||
                                                regex.test(
                                                    e.target.value
                                                )
                                            ) {
                                                setSnils(
                                                    e.target.value
                                                );
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id={"phone"}
                                        label={
                                            <FormattedMessage id="polis_profile" />
                                        }
                                        variant={"outlined"}
                                        name={"phone"}
                                        required
                                        fullWidth
                                        inputProps={{ maxLength: 16 }}
                                        value={oms}
                                        onChange={(e) => {
                                            const regex =
                                                /^[0-9\b]+$/;
                                            if (
                                                e.target.value ===
                                                    "" ||
                                                regex.test(
                                                    e.target.value
                                                )
                                            ) {
                                                setOms(
                                                    e.target.value
                                                );
                                            }
                                        }}
                                    />
                                </Grid>
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
                                        value={institution}
                                        onChange={handleInstitution}
                                        fullWidth
                                        variant="filled"
                                        margin="normal"
                                        defaultValue={city[0].id}
                                    >
                                        {city.map((item, index) => (
                                            <option
                                                key={index}
                                                value={item.id}
                                            >
                                                {item.name}
                                            </option>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        style={{
                                            marginTop: 20,
                                            background: "#49DDC5",
                                        }}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        onClick={handleUpdateProfile}
                                    >
                                        <FormattedMessage id="save_profile" />
                                    </Button>
                                </Grid>
                            </Grid>
                        )}
                    </Box>
                </Container>
            </BoxWrapper>
        </Container>
    );
};

export default FormProfile;
