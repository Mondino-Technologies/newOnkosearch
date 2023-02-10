import React from 'react'

import { MyContainer, MyText, MyButton } from '../../../components'
import {Box, Grid} from '@mui/material'
import { styled } from '@mui/system'

const GridText = styled(Grid)(({ theme }) => ({
    padding: 30,
    [theme.breakpoints.down('sm')]: {
        padding: 5
    },
}))
const Span = styled('span')({
    marginLeft: 20,
    color: '#245852'
})
const BoxText = styled(Box)(({ theme }) => ({
    width: '70%',
    [theme.breakpoints.down('sm')]: {
        width: '100%'
    },
}))

const Line = styled(Box)(({ theme }) => ({
    width: 100,
    height: 3,
    backgroundColor: '#0B806B',
    marginBottom: 20
}))

const ThreeScreen = () => {
    const data = [
        {
            label: 'Версия и дата ПО:',
            span: 'от 25.02.2022 v1.25.2.22.'
        },
        {
            label: 'Наименования МИ:',
            span: '"Онкопоиск"'
        },
        {
            label: 'Предприятие изготовитель:',
            span: 'ГБУ РС (Я) "Якутский республиканский онкологический диспансер"'
        },
        {
            label: 'Электронная почта изготовителя:',
            span: 'yarod@gov14.ru'
        },
        {
            label: 'Телефон тех. поддержки:',
            span: '+79242414298'
        },
        {
            label: 'Проект ТУ:',
            span: 'ТУ 58.29.32-001-Код ОКПО-2023'
        },
    ]
    return (
        <MyContainer wrapper={false} sx={{ mt: 5 }} minHeight={300}>
            <GridText item lg={7} xl={7} md={7} sm={12} xs={12}>
                {data.map((item, index) => (
                    <MyText variant="h6" sm={16} sx={{ fontWeight: 'normal', mt: 1 }} key={index}>{item.label}<Span>{item.span}</Span></MyText>
                ))}
            </GridText>
        </MyContainer>
        // <MyContainer wrapper={false} minHeight={100}
        //     sx={{
        //         display: 'flex',
        //         flexDirection: 'column',
        //         alignItems: 'center',
        //         textAlign: 'center',
        //         justifyContent: 'center',
        //         mt: 8
        //     }}
        // >
        //     <Line></Line>
        //     <BoxText>
        //         <MyText variant="h6" sx={{ color: '#313131', fontWeight: 'normal' }}>
        //             Для определения группы риска просим зарегистрироваться на портале и пройти универсальный анкетный тест
        //         </MyText>
        //     </BoxText>
        //     <MyButton sx={{ mt: 3, bgcolor: '#01996D' }}>
        //         Узнать результат
        //     </MyButton>
        // </MyContainer>
    )
}

export default ThreeScreen