import React from 'react'

import {Box, Typography, Grid, MenuItem,} from '@mui/material'
import {Link} from 'react-router-dom'
import {styled} from '@mui/system'

import {MyContainer, MyText, MyLink,} from '../../../components'
import {PageHeaderText} from '../../../constructor'
import {FormattedMessage} from "react-intl";

const Circle = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: '#F5C070',
    width: 50,
    height: 50,
    borderRadius: 25,
    color: 'white',
    marginBottom: 20
}))

const CardItem = styled(Box)(({theme}) => ({
    width: '90%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    height: 250,
    borderRadius: 24,
    textAlign: 'center',
    color: 'black',
    padding: 10,
    [theme.breakpoints.down('md')]: {
        marginTop: 20
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}))

const FiveScreen: React.FC = () => {
    const cardList = [
        {
            title: <FormattedMessage id={'registration_main_page'}/>,
            description: <FormattedMessage id={'registration_description_main_page'}/>,
            bgcolor: '#245852',
            number: '1'
        },
        {
            title: <FormattedMessage id={'questioning_main_page'}/>,
            description: <FormattedMessage id={'questioning_description_main_page'}/>,
            bgcolor: '#01996D',
            number: '2'
        },
        {
            title: <FormattedMessage id={'reception_main_page'}/>,
            description: <FormattedMessage id={'reception_description_main_page'}/>,
            bgcolor: '#61D8C5',
            number: '3'
        },

    ]
    return (
        <MyContainer wrapper={false}
                     sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 8, mb: 8}}>
            <PageHeaderText
                tag={<FormattedMessage id={'about_us'}/>}
                titleSize="h3"
                title={<FormattedMessage id={'about_title'}/>}
                description={<FormattedMessage id={'about_description'}/>}
            />
            <Grid container sx={{mt: 8, display: 'flex', justifyContent: 'center'}}>
                {cardList.map(item => (
                    <Grid item key={item.number} lg={4} xl={4} xs={11} md={4} sm={12}
                          sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                        <CardItem>
                            <Circle><MyText variant="h4" sx={{fontFamily: 'serif'}}>{item.number}</MyText></Circle>
                            <MyText variant="h4" sx={{fontWeight: 400, fontStyle: 'normal'}}>{item.title}</MyText>
                            <MyText variant="body2" sx={{mt: 2}}>{item.description}</MyText>
                        </CardItem>
                    </Grid>
                ))}
            </Grid>
        </MyContainer>
    )
}

export default FiveScreen