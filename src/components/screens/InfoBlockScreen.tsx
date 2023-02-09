import React from 'react'

import { Grid } from '@mui/material'
import { styled } from '@mui/system'

import { MyContainer, MyText } from '..'
import { InfoBlockScreenProps } from '../../interface'

import themeMain from '../../theme'

const RootGrid = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        paddingTop: 50,
        paddingBottom: 50
    },
}))

const GridImg = styled(Grid)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    justifyContent: 'center'
}))

const ImgCustom = styled('img')(({ theme }) => ({
    width: 300,
    position: 'absolute',
    marginTop: 150,
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        position: 'relative',
        marginTop: 80,
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: 20,
        width: 350,
    },
}))

const BackgroundImage = styled('img')(({ theme }) => ({
    position: 'absolute',
    height: 600,
    marginLeft: '-200px',
    marginBottom: '-100px',
    [theme.breakpoints.down('xl')]: {
        height: 600,
        marginLeft: '-300px'
    },
    [theme.breakpoints.down('md')]: {
        marginBottom: '-50px'
    },
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    },
}))

const MainImg = styled('img')(({ theme }) => ({
    width: '100%',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
        width: 250,
    },
    [theme.breakpoints.down('sm')]: {
        marginTop: '-40px'
    },
}))

const InfoBlockScreen: React.FC<InfoBlockScreenProps> = ({ title, description, img, infoImg }) => {
    return (
        <MyContainer
            wrapper={true}
            sx={{
                bgcolor: themeMain.palette.primary.main,
                borderEndEndRadius: 50,
                borderEndStartRadius: 50,
                color: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            minHeight={800}
        >
            <RootGrid container>
                <Grid item lg={6} xl={6} md={6} sm={12} xs={12}>
                    <MyText variant="h3" sx={{ mt: 4, mb: 4 }}>{title}</MyText>
                    <MyText variant="h6">
                        {description}
                    </MyText>
                </Grid>
                <Grid item lg={3} xl={3} md={3} sm={6} xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <ImgCustom src={`/img/Element/${infoImg}.svg`} />
                </Grid>
                <GridImg item lg={3} xl={3} md={3} sm={6} xs={12}>
                    <MainImg src={`/img/Element/${img}.png`} />
                    <BackgroundImage src={'/img/Element/Group70.png'} />
                </GridImg>
            </RootGrid>
        </MyContainer>
    )
}

export default InfoBlockScreen