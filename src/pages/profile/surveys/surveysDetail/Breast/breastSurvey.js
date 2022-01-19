import {
    Container,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    Checkbox,
    Typography,
    Box,
    Button
} from "@mui/material";
import React, { useState, useEffect } from "react";
// import { Copyright } from "../layout/components/Copyright";
import { styled } from '@mui/system'
// import ModalFalse from '../modals/surveyModals/ModalFalse'
// import ModalTrue from '../modals/surveyModals/ModalTrue'
// import ModalMiddle from '../modals/surveyModals/ModalMiddle'

const Root = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
})

const Avatar = styled(Box)((theme) => ({
    margin: 20,
    backgroundColor: theme.palette.secondary.main,
}))

const Form = styled(Box)((theme) => ({
    width: '100%',
    marginTop: 30
}))

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

const BreastSurvey = ({ arr }) => {
    const [accessFamily, setAccessFamily] = useState(null);
    const [touching, setTouching] = useState(null);
    const [lemon, setLemon] = useState(null);
    const [excreta, setExcreta] = useState(null);
    const [changes, setChanges] = useState(null);
    const [mammography, setMammography] = useState(null);
    const [mammoResult, setMammoResult] = useState(null)
    const [accessMalignant, setAccessMalignant] = useState(null);
    const [menstruation, setMenstruation] = useState("");
    const [childBirth, setChildBirth] = useState(null);
    const [temperature, setTemperature] = useState(null);
    const [show, setShow] = useState(false)
    const [showFalse, setShowFalse] = useState(false)
    const [showMiddle, setShowMiddle] = useState(false)
    const [district, setDistrict] = useState(1)
    const [checked, setChecked] = useState(false)
    const [isActiveButton, setActiveButton] = useState(false)
    const checkFormValid = () => {
        checked ? setActiveButton(true) : setActiveButton(false)
    }
    useEffect(checkFormValid, [checked])
    const soldCheckbox = ({ target: { checked } }) => {
        setChecked(checked);
    };
    // let calculateMammography = () => {
    //     if (mammography == 0) {
    //         return 0;
    //     }
    //     if (mammography == 1) {
    //         setMammoResult(new Date().getFullYear().valueOf() - date)
    //         return mammoResult > 49 ? 2 : 0
    //     }
    //     if (mammography == 3) {
    //         return 3
    //     }
    // }

    // const handlerPost = async () => {
    //     let scoreInc = (answer) => {
    //         if (answer > 0) {
    //             return "Да"
    //         } else {
    //             return "Нет"
    //         }
    //     }
    //     let scoreMammograpgy = (answer) => {
    //         switch (answer) {
    //             case "1":
    //                 return "Прошла в прошлом году";
    //                 break;
    //             case "3":
    //                 return "Никогда не проходила";
    //                 break;
    //             case "0":
    //                 return "Прошла в этом году";
    //         }
    //     }
    //     axios.post("/api/front/surveys_api/surveys", {
    //         survey_type: 1,
    //         fields: [
    //             {
    //                 text: arr[0],
    //                 answer: scoreInc(accessFamily),
    //                 score: accessFamily
    //             },
    //             {
    //                 text: arr[1],
    //                 answer: scoreInc(touching),
    //                 score: touching
    //             },
    //             {
    //                 text: arr[2],
    //                 answer: scoreInc(lemon),
    //                 score: lemon
    //             },
    //             {
    //                 text: arr[3],
    //                 answer: scoreInc(excreta),
    //                 score: excreta
    //             },
    //             {
    //                 text: arr[4],
    //                 answer: scoreInc(changes),
    //                 score: changes
    //             },
    //             {
    //                 text: arr[5],
    //                 answer: scoreMammograpgy(mammography),
    //                 score: calculateMammography()
    //             },
    //             {
    //                 text: arr[6],
    //                 answer: scoreInc(accessMalignant),
    //                 score: accessMalignant
    //             },
    //             {
    //                 text: arr[7],
    //                 answer: menstruation,
    //                 score: 0
    //             },
    //             {
    //                 text: arr[8],
    //                 answer: scoreInc(childBirth),
    //                 score: 0
    //             },
    //             {
    //                 text: arr[9],
    //                 answer: scoreInc(temperature),
    //                 score: 0
    //             }
    //         ]
    //     })
    //         .then((res) => {
    //             if (res.status == 200) {
    //                 console.log("result", res.data.is_danger);
    //                 const danger = res.data.is_danger
    //                 console.log('danger', danger)
    //                 const clinic = res.data.to_clinic
    //                 if (danger == true && clinic == false) {
    //                     setShow(true)
    //                 }
    //                 if (danger == false && clinic == false) {
    //                     setShowFalse(true)
    //                 }
    //                 if (clinic == true) {
    //                     setShowMiddle(true)
    //                 }

    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //             alert("У вас ошибка в форме анкеты");
    //         });
    // };

    return (
        <Root component="main" maxWidth="md">
            {/* {show && <ModalTrue />}
            {showFalse && <ModalFalse />}
            {showMiddle && <ModalMiddle />} */}
            <Typography component="h1" variant="h5"
                style={{ display: 'flex', justifyContent: "center", alignItems: "center", padding: 20 }}>
                Эмиий ыарыыларын тургутуу
            </Typography>
            <Box style={{ width: '100%' }}>
                <Grid container spacing={6}>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">1. {arr[0]}</FormLabel>
                            <RadioGroup value={accessFamily} onChange={(e) => {
                                setAccessFamily(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={accessFamily == 3} value={3} control={<Radio />} label="Ыалдьан" />
                                <FormControlLabel checked={accessFamily == 0} value={0} control={<Radio />} label="Суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">2. {arr[1]}</FormLabel>
                            <RadioGroup value={touching} onChange={(e) => {
                                setTouching(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={touching == 1} value={1} control={<Radio />} label="Баар" />
                                <FormControlLabel checked={touching == 0} value={0} control={<Radio />} label="Суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">3. {arr[2]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={lemon} onChange={(e) => {
                                setLemon(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={lemon == 2} value={2} control={<Radio />} label="Баар" />
                                <FormControlLabel checked={lemon == 0} value={0} control={<Radio />} label="Суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">4. {arr[3]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={excreta} onChange={(e) => {
                                setExcreta(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={excreta == 1} value={1} control={<Radio />} label="Тахсар" />
                                <FormControlLabel checked={excreta == 0} value={0} control={<Radio />} label="Суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">5. {arr[4]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={changes} onChange={(e) => {
                                setChanges(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={changes == 1} value={1} control={<Radio />} label="Уларыйда" />
                                <FormControlLabel checked={changes == 0} value={0} control={<Radio />} label="суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">6. {arr[5]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={mammography} onChange={(e) => {
                                setMammography(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>

                                <FormControlLabel checked={mammography == 0} value={0} control={<Radio />}
                                    label="Быйыл" />
                                <FormControlLabel checked={mammography == 1} value={1} control={<Radio />}
                                    label="Былырыын" />
                                <FormControlLabel checked={mammography == 3} value={3} control={<Radio />}
                                    label="Хаһан да барбатаҕым" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">7. {arr[6]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={accessMalignant} onChange={(e) => {
                                setAccessMalignant(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={accessMalignant == 1} value={1} control={<Radio />}
                                    label="Баар" />
                                <FormControlLabel checked={accessMalignant == 0} value={0} control={<Radio />}
                                    label="Суох " />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">8. {arr[7]}</FormLabel>
                            <Grid item xs={12} sm={6}>
                                <TextField id={"outlined-basic"}
                                    type="number"
                                    variant={"outlined"}
                                    required
                                    value={menstruation}
                                    onChange={(e) => {
                                        setMenstruation(e.target.value)
                                    }} />
                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">9. {arr[8]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={childBirth} onChange={(e) => {
                                setChildBirth(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={childBirth == 1} value={1} control={<Radio />}
                                    label="Баар" />
                                <FormControlLabel checked={childBirth == 0} value={0} control={<Radio />}
                                    label="Суох" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">10. {arr[9]}</FormLabel>
                            <RadioGroup aria-label="gender" name="gender1" value={temperature} onChange={(e) => {
                                setTemperature(e.target.value)
                            }} style={{ display: 'flex', flexDirection: 'row' }}>
                                <FormControlLabel checked={temperature == 1} value={1} control={<Radio />} label="Тахсан" />
                                <FormControlLabel checked={temperature == 0} value={0} control={<Radio />} label="Суох " />
                            </RadioGroup>
                        </FormControl>
                        <FormStyle item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowRules" color="primary" checked={checked}
                                    onChange={soldCheckbox} />}
                                label={''}
                            />
                            <LinkStyle color='primary' href={'/IDS.doc'} target={'_blank'}>Тэрили өйдөөн хааларга</LinkStyle>
                        </FormStyle>
                    </Grid>
                    <Button style={{ marginTop: 20 }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        // onClick={handlerPost}
                        disabled={!isActiveButton}
                    >
                        ЫЫТАРГА
                    </Button>
                </Grid>
            </Box>
            <Box mt={5}>
                {/* <Copyright /> */}
            </Box>
        </Root>
    );
};

export default BreastSurvey