import React from 'react'

import { Grid, Box } from '@mui/material'
import { styled } from '@mui/system'
import { MyContainer, MyText } from '../../../components'
import { FormattedMessage } from "react-intl";

const Companys = styled(Grid)(({ }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',

}))

const CompanyItem = styled(Box)(({ theme }) => ({
    marginLeft: 15,
    marginRight: 15,
    [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 0
    },
}))

const Box1 = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
    flexWrap: 'wrap',
    [theme.breakpoints.down('lg')]: {
        justifyContent: 'center',
    },
}))

const ThreeScreen: React.FC = () => {
    const CompanyList = ['brand_1_yarod', 'brand_2_min', 'brand_3_iarm', 'brand_4_esph', 'brand_5_aor']
    return (
        <MyContainer wrapper={true}
            sx={{
                pt: 5,
                bgcolor: '#F3FEFF'
            }}
        >
            <Companys container>
                <MyText variant="h5">
                    <FormattedMessage id={'partners_project'} />
                </MyText>
                <Box1>
                    {CompanyList.map((itemCompany) => (
                        <CompanyItem key={itemCompany}>
                            <img src={`/img/Element/${itemCompany}.svg`} />
                        </CompanyItem>
                    ))}
                </Box1>
            </Companys>
        </MyContainer>
    )
}

export default ThreeScreen