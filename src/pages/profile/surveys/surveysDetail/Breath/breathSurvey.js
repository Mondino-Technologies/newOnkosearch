import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { styled } from '@mui/system'
import {
    Button,
    Box,
    Typography,
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    InputLabel,
    Radio,
    RadioGroup,
    TextField,
    Checkbox
} from '@mui/material'
import { FormattedMessage } from "react-intl";

import Api from '../../../../../utils/api'
import { DispatchContext } from "../../../../../store";
import { Copyright, ModalSurveyStatus } from '../../../../../components'

const Root = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const FormStyle = styled(Grid)({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
})

const LinkStyle = styled('a')({
    textDecoration: 'underline',
    '&:hover': {
        cursor: 'pointer'
    }
})

export default function BreathSurvey({ arr, id }) {
    const [smoke, setSmoke] = useState(null);
    const [smokeAge, setSmokeAge] = useState(null);
    const [smokeBundles, setSmokeBundles] = useState(null);
    const [tomography, setTomography] = useState(null);
    const [blood, setBlood] = useState(null);
    const [weigh, setWeigh] = useState(null);
    const [access, setAccess] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [smokeResult, setSmokeResult] = useState(0)
    const [show, setShow] = useState(false)
    const [showFalse, setShowFalse] = useState(false)
    const [showMiddle, setShowMiddle] = useState(false)
    const [district, setDistrict] = useState(1)
    const [checked, setChecked] = useState(false)
    const [isActiveButton, setActiveButton] = useState(false)
    const dispatch = useContext(DispatchContext)

    const checkFormValid = () => {
        checked ? setActiveButton(true) : setActiveButton(false)
    }
    useEffect(checkFormValid, [checked])
    const soldCheckbox = ({ target: { checked } }) => {
        setChecked(checked);
    };

    const calculateSmoke = () => {
        if (!smokeAge || !smokeBundles) {
            return 1
        } else {
            setSmokeResult(smokeAge * smokeBundles / 20)
            return smokeResult > 10 ? 2 : 0
        }
    }

    useEffect(() => {
        calculateSmoke()
    }, [smokeAge, smokeBundles])

    const handlerPost = async () => {
        let scoreInc = (answer) => {
            if (answer > 0) {
                return "Да"
            } else {
                return "Нет"
            }
        }
        let scoreInc2 = (answer) => {
            if (answer <= 1) {
                return "нет"
            } else {
                return "да"
            }
        }
        Api.sendSurveys({
            survey_type: id,
            fields: [
                {
                    text: '1. Сколько вы курите?',
                    answer: smokeResult,
                    score: calculateSmoke()
                },
                {
                    text: '2. Проходили ли вы в последний год компьютерную томографию',
                    answer: scoreInc(tomography),
                    score: tomography,
                },
                {
                    text: '3. У Вас бывает кровохарканье?',
                    answer: scoreInc(blood),
                    score: blood
                },
                {
                    text: '4. Имеется ли у Вас необъясняемое снижение массы тела?',
                    answer: scoreInc2(weigh),
                    score: weigh
                },
                {
                    text: '5. Имеются ли у Вас подтверждённые злокачественные новообразования',
                    answer: scoreInc2(access),
                    score: access
                },
                {
                    text: '6. Последние 10 дней были ли у Вас эпизоды повышения температуры тела выше 37,5*С',
                    answer: scoreInc(temperature),
                    score: 0
                },
            ]
        }, dispatch)
        // .then((res) => {
        //     if (res.status == 200) {
        //         console.log("result", res);
        //         const danger = res.data.is_danger
        //         const clinic = res.data.to_clinic
        //         if (danger == true && clinic == false) {
        //             setShow(true)
        //         }
        //         if (danger == false && clinic == false) {
        //             setShowFalse(true)
        //         }
        //         if (clinic == true) {
        //             setShowMiddle(true)
        //         }
        //     }
        // })
    };
    return (
        <Root component="main" maxWidth="md">
            <ModalSurveyStatus />
            <Typography component="h1" variant="h5"
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20 }}>
                <FormattedMessage id="name_lung_survey" />
            </Typography>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">1. {arr[0]}</FormLabel>
                        <Grid item xs={12} sm={12}>
                            <TextField id={"outlined-basic"} margin="normal" type="number" label={<FormattedMessage id="answer1_how_cigarettes_lung_survey" />}
                                variant={"outlined"} value={smokeBundles}
                                onChange={(e) => {
                                    setSmokeBundles(e.target.value)
                                }} style={{ marginLeft: 10, }} />
                            <TextField id={"outlined-basic"} margin="normal" type="number" label={<FormattedMessage id="answer1_how_years_lung_survey" />}
                                variant={"outlined"} value={smokeAge}
                                onChange={(e) => {
                                    setSmokeAge(e.target.value)
                                }} style={{ marginLeft: 10, }} />
                            <TextField id={"outlined-basic"} margin="normal" type="number" variant={"outlined"} aria-readonly={true}
                                value={smokeResult}
                                style={{ marginLeft: 10 }} />
                            <RadioGroup onChange={() => {
                                setSmokeResult(0)
                            }}>
                                <FormControlLabel checked={smokeResult == 0} value={0} control={<Radio />}
                                    label={<FormattedMessage id="answer1_no_lung_survey" />}
                                    style={{ marginLeft: 10, marginTop: 5 }} />
                            </RadioGroup>
                        </Grid>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">2. {arr[1]}</FormLabel>
                        <RadioGroup value={tomography} onChange={(e) => {
                            setTomography(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={tomography == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer2_yes_lung_survey" />} />
                            <FormControlLabel checked={tomography == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer2_no_lung_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">3. {arr[2]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={blood} onChange={(e) => {
                            setBlood(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={blood == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer3_yes_lung_survey" />} />
                            <FormControlLabel checked={blood == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer3_no_lung_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">4. {arr[3]}
                        </FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={weigh} onChange={(e) => {
                            setWeigh(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={weigh == 10} value={10} control={<Radio />} label={<FormattedMessage id="answer4_yes_lung_survey" />} />
                            <FormControlLabel checked={weigh == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer4_no_lung_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">5. {arr[4]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={access} onChange={(e) => {
                            setAccess(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={access == 10} value={10} control={<Radio />} label={<FormattedMessage id="answer5_yes_lung_survey" />} />
                            <FormControlLabel checked={access == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer5_no_lung_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">6. {arr[5]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={temperature} onChange={(e) => {
                            setTemperature(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={temperature == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer6_yes_lung_survey" />} />
                            <FormControlLabel checked={temperature == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer6_no_lung_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <FormStyle item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowRules" color="primary" checked={checked}
                            onChange={soldCheckbox} />}
                        label={''}
                    />
                    <LinkStyle color='primary' href={'/IDS.doc'} target={'_blank'}><FormattedMessage id="consent_lung_survey" /></LinkStyle>
                </FormStyle>
                <Button style={{ marginTop: 20 }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handlerPost}
                    disabled={!isActiveButton}
                >
                    <FormattedMessage id="save_lung_survey" />
                </Button>
            </Grid>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Root>
    );
};