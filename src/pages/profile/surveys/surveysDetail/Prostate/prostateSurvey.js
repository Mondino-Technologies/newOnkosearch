import {
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid, InputLabel,
    Radio,
    RadioGroup,
    TextField,
    Checkbox,
    Box,
    Typography,
    Button
} from "@mui/material";
import React, { useState, useEffect, useContext } from "react";
import { styled } from '@mui/system'
import { FormattedMessage } from "react-intl";

import Api from '../../../../../utils/api'
import { DispatchContext } from "../../../../../store";
import { Copyright, ModalSurveyStatus } from '../../../../../components'

const Root = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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

export default function ProstateLandingForm({ arr, id }) {
    const [toiletTimes, setToiletTimes] = useState(null);
    const [notFull, setNotFull] = useState(null);
    const [bloodIn, setBloodIn] = useState(null);
    const [delay, setDelay] = useState(null);
    const [oncomarkerResult, setOnkomarkerResult] = useState(null);
    const [accessMalignant, setAccessMalignant] = useState(null);
    const [inputDay, setInputDay] = useState(null);
    const [inputResult, setInputResult] = useState(null)
    const [temperature, setTemperature] = useState(null)
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
    let calculateOnkom = () => {
        if (oncomarkerResult == 0 || 2) {
            return 0;
        }
        else {
            setInputResult(new Date().getFullYear().valueOf() - inputDay)
            return inputResult > 1 ? 2 : 0
        }
    }
    useEffect(() => {
        calculateOnkom()
    }, [inputDay])

    const handleChange = async (event) => {
        await setInputDay(event.target.value)
        await console.log(inputDay)
    }
    const handlerPost = async () => {
        let scoreInc = (answer) => {
            if (answer > 0) {
                return "Да"
            } else {
                return "Нет"
            }
        }
        let scoreToilet = (answer) => {
            switch (answer) {
                case "1":
                    return "1 раз";
                    break;
                case "0":
                    return "Не просыпаюсь";
                    break;
                case "2":
                    return "2 и более раза";
            }
        }
        let scoreOnkom = (answer) => {
            switch (answer) {
                case "1":
                    return "немного повышенный";
                    break;
                case "2":
                    return "не проходил";
                    break;
                case "0":
                    return "в пределах нормы";
            }
        }
        Api.sendSurveys({
            survey_type: id,
            fields: [
                {
                    text: 'Как часто Вы просыпаетесь ночью, чтоб опорожнить мочевой пузырь?',
                    answer: scoreToilet(toiletTimes),
                    score: toiletTimes < 2 ? 0 : 2
                },
                {
                    text: 'Отмечаете ли Вы чувство неполного опорожнения мочевого пузыря?',
                    answer: scoreInc(notFull),
                    score: notFull
                },
                {
                    text: 'Бывали ли у Вас эпизоды мочеиспускания с кровью?',
                    answer: scoreInc(bloodIn),
                    score: bloodIn
                },
                {
                    text: 'Бывали ли у Вас, когда ни будь задержки мочеиспускания?',
                    answer: scoreInc(delay),
                    score: delay
                },
                {
                    text: 'Когда последний раз сдавали онкомаркер на ПСА',
                    answer: scoreOnkom(oncomarkerResult),
                    score: calculateOnkom()
                },
                {
                    text: 'Имеются ли у Вас подтверждённые злокачественные новообразования предстательной железы?',
                    answer: scoreInc(accessMalignant),
                    score: accessMalignant
                },
                {
                    text: 'Последние 10 дней были ли у Вас эпизоды повышения температуры тела выше 37,5*С',
                    answer: scoreInc(temperature),
                    score: 0
                },
            ]
        }, dispatch)
    };

    return (
        <Root component="main" maxWidth="md">
            <ModalSurveyStatus />
            <Typography component="h1" variant="h5"
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20 }}>
                <FormattedMessage id="name_prostate_survey" />
            </Typography>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">1. {arr[0]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={toiletTimes} onChange={(e) => {
                            setToiletTimes(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={toiletTimes == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer1_no_prostate_survey" />} />
                            <FormControlLabel checked={toiletTimes == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer1_1_prostate_survey" />} />
                            <FormControlLabel checked={toiletTimes == 2} value={2} control={<Radio />} label={<FormattedMessage id="answer1_2_more_prostate_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">2. {arr[1]}</FormLabel>
                        <RadioGroup value={notFull} onChange={(e) => {
                            setNotFull(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={notFull == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer2_yes_prostate_survey" />} />
                            <FormControlLabel checked={notFull == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer2_no_prostate_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">3. {arr[2]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={bloodIn} onChange={(e) => {
                            setBloodIn(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={bloodIn == 2} value={2} control={<Radio />} label={<FormattedMessage id="answer3_yes_prostate_survey" />} />
                            <FormControlLabel checked={bloodIn == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer3_no_prostate_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">4. {arr[3]}
                        </FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={delay} onChange={(e) => {
                            setDelay(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={delay == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer4_yes_prostate_survey" />} />
                            <FormControlLabel checked={delay == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer4_no_prostate_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">5. {arr[4]} </FormLabel>
                        <TextField id={"outlined-basic"} label={<FormattedMessage id="answer5_enter_year_prostate_survey" />} type={"number"}
                            required
                            fullWidth
                            placeholder={'2021'}
                            variant={"outlined"}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={handleChange}
                            value={inputDay}
                            style={{ marginTop: 20 }}
                        />
                        <RadioGroup aria-label="gender" name="gender1" value={oncomarkerResult} onChange={(e) => {
                            setOnkomarkerResult(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={oncomarkerResult == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer5_normal_prostate_survey" />} />
                            <FormControlLabel checked={oncomarkerResult == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer5_high_prostate_survey" />} />
                            <FormControlLabel checked={oncomarkerResult == 2} value={2} control={<Radio />} label={<FormattedMessage id="answer5_no_prostate_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">6. {arr[5]} </FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={accessMalignant} onChange={(e) => {
                            setAccessMalignant(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            <FormControlLabel checked={accessMalignant == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer6_yes_prostate_survey" />} />
                            <FormControlLabel checked={accessMalignant == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer6_no_prostate_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">7. {arr[6]}</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={temperature} onChange={(e) => {
                            setTemperature(e.target.value)
                        }} style={{ display: 'flex', flexDirection: 'row' }}>
                            {/*# TODO нет вариантов*/}
                            <FormControlLabel checked={temperature == 1} value={1} control={<Radio />} label={<FormattedMessage id="answer7_yes_prostate_survey" />} />
                            <FormControlLabel checked={temperature == 0} value={0} control={<Radio />} label={<FormattedMessage id="answer7_no_prostate_survey" />} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <FormStyle item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowRules" color="primary" checked={checked}
                            onChange={soldCheckbox} />}
                        label={''}
                    />
                    <LinkStyle color='primary' href={'/IDS.doc'} target={'_blank'}><FormattedMessage id="consent_prostate_survey" /></LinkStyle>
                </FormStyle>
                <Button style={{ marginTop: 20 }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={handlerPost}
                    disabled={!isActiveButton}
                >
                    <FormattedMessage id="save_prostate_survey" />
                </Button>
            </Grid>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Root>
    );
};