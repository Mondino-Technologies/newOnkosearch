import React, { useEffect, useState } from 'react'

import { MenuProfile, MyContainer, CardSurveysProfile, MyText, ModalSurvey } from '../../../components'

import { Box, Grid, Typography, CircularProgress } from '@mui/material'
import { styled } from '@mui/system'
import { FormattedMessage } from "react-intl";

import Api from '../../../utils/api'
import { SurveyProps } from '../../../interface'

const DataSurveys = [
    {
        img: 'liver',
        label: 'Быары чинчийии',
        link: '/liver-form'
    },
    {
        img: 'gut',
        label: 'Суон оһоҕоһу чинчийии.',
        link: '/gut-form'
    },
    {
        img: 'breath',
        label: 'Тыҥаны чинчийии',
        link: '/breath-form'
    },
    {
        img: 'breast',
        label: 'Эмиийи чинчийии',
        link: '/breast-form'
    },
    {
        img: 'cervix',
        label: 'Киэли хапчаҕайын чинчийии',
        link: '/cervix-form'
    },
    {
        img: 'prostata',
        label: 'Самах былчархайын чинчийии',
        link: '/prostate-form'
    }
]

const BoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
}))

const Surveys = () => {
    const [data, setData] = useState<SurveyProps[]>([])
    const [loading, setLoading] = useState(true)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        Api.getSurveysTypes().then((res) => {
            const result = res.data.results.map((result: any) => {
                return {
                    'research': result.research,
                    'slug': result.slug,
                    'id': result.id,
                }
            })
            setData(result)
            setLoading(false)
            setOpen(true)
        })
    }, [])
    return (
        <MyContainer wrapper={false}>
            {open &&
                <ModalSurvey />
            }
            <BoxWrapper>
                <MenuProfile />
                <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', mt: 10, ml: 2, width: '100%' }}>
                    <MyText variant="h5"><FormattedMessage id="surveys_main_page" /></MyText>
                    {loading ?
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', marginTop: 3 }}>
                            <CircularProgress />
                        </Box> :
                        <Grid container>
                            {data.length ? data.map((item, index) => (
                                <Grid item lg={4} xl={4} md={6} sm={6} xs={12} key={index}>
                                    <CardSurveysProfile
                                        label={item.research.name}
                                        img={item.research.image}
                                        link={item.slug}
                                        id={item.id}
                                    />
                                </Grid>
                            )) : <MyText variant="h6" sx={{ margin: '0 auto', mt: 5 }}>В соответствии с Вашим полом и возрастом, доступных для Вас анкет -
                                нет.</MyText>}
                        </Grid>
                    }
                </Box>
            </BoxWrapper>
        </MyContainer>
    )
}

export default Surveys