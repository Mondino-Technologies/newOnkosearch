import React, { useEffect, useState } from 'react';
import axios from "axios";
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
import { styled } from '@mui/system'
import { AppBar, Box, LinearProgress, Tab, Tabs, Typography, Grid } from "@mui/material";

import { TabPanelProps } from "../../../interface";
import { MyContainer, MenuProfile, ResearchCard } from '../../../components';
import Api from '../../../utils/api'

const moment = extendMoment(Moment);
const currentDay = moment(new Date())
const interval = moment.rangeFromInterval('week', 2, currentDay)
const days = Array.from(interval.by('day', { step: 1 }));

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box pt={3} display={'flex'} flexDirection={'row'}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const Root = styled(Box)(({ theme }) => ({
    flexGrow: 1,
    width: '70%',
    margin: '20px 0px',
    marginTop: 102,
    marginLeft: 20,
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginLeft: 0,
    },
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
}))

const Schedule = () => {
    const [schedules, setSchedules] = useState([])
    const [value, setValue] = React.useState(0);
    const [index, setIndex] = useState(0)
    const [loading, setLoading] = useState<boolean>(false)

    const fetchSchedules = async (date: string) => {
        setLoading(true)
        await Api.schedule(date).then((res) => {
            const result = res.data.schedule.map((schedule: any) => {
                return schedule
            })
            setSchedules(result)
        })
        setLoading(false)
    }

    const handleSchedule = (index: number, date: string) => {
        fetchSchedules(date)
        setIndex(index)
    }

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        fetchSchedules(days[0].format('YYYY-MM-DD'))
    }, [])

    return (
        <MyContainer wrapper={false}>
            <BoxWrapper>
                <MenuProfile />
                <Root>
                    <AppBar position="relative" color={'inherit'}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="scrollable"
                            aria-label="scrollable auto tabs example"
                        >
                            {days.map((day, index) => {
                                return (
                                    <Tab key={index} onClick={() => handleSchedule(index, day.format('YYYY-MM-DD'))}
                                        label={day.format('DD-MM-YYYY')} {...a11yProps(index)} />
                                )
                            })}
                        </Tabs>
                    </AppBar>
                    <Box height={2}>
                        {loading && <LinearProgress />}
                    </Box>
                    <TabPanel value={value} index={index}>
                        <Grid style={{ display: "flex", flexWrap: "wrap" }} container>
                            {schedules.length != 0 ? schedules.map((schedule, index) => {
                                return <Grid item lg={4} key={index}><ResearchCard schedule={schedule} /></Grid>
                            }) : <Typography>На это день нет доступных приемов.</Typography>}
                        </Grid>
                    </TabPanel>
                </Root>
            </BoxWrapper>
        </MyContainer>
    );
}

export default Schedule