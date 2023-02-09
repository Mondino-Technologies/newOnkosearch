import React, { useState } from 'react'

import { InfoScreen, TextInfoScreen, ThreeScreen, FourScreen, LinkToSurveysScreen, MyContainer, MyButton } from '../../../components'

import { CaruselSurvey, TitleScreen } from '../../../constructor'
import { FormattedMessage } from "react-intl";
import { useNavigate } from 'react-router-dom'
import cookie from 'js-cookie'

const Prostate = () => {
    const navigate = useNavigate()
    const data1 = [
        {
            type: 'text',
            elem: [
                <FormattedMessage id="prostate_data1_text1" />,
                <FormattedMessage id="prostate_data1_text2" />,
                <FormattedMessage id="prostate_data1_text3" />
            ],
        },
        {
            title: <FormattedMessage id="prostate_symptoms" />,
            type: 'text',
            elem: [
                <FormattedMessage id="prostate_data1_title_column1" />
            ],
        },
        {
            type: 'column',
            elem: [
                <FormattedMessage id="prostate_data1_text1_column1" />,
                <FormattedMessage id="prostate_data1_text2_column1" />,
                <FormattedMessage id="prostate_data1_text3_column1" />
            ],
        },
    ]

    const data2 = [
        {
            align: 'start',
            text: [
                <FormattedMessage id="prostate_data1_title_column2" />,
                <FormattedMessage id="prostate_data1_text1_column2" />,
                <FormattedMessage id="prostate_data1_text2_column2" />,
                <FormattedMessage id="prostate_data1_text3_column2" />
            ],
        },
    ]

    return (
        <div>
            <InfoScreen
                title={<FormattedMessage id="prostate_cancer" />}
                description={<FormattedMessage id="prostate_description" />}
                img="prostata"
                infoImg="Frame28"
            />
            <TextInfoScreen data={data1} />
            <ThreeScreen data={data2} showInfoText={true} />
            <FourScreen />
            <LinkToSurveysScreen link="" />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <MyButton sx={{ bgcolor: '#EB5757', mb: 2 }}
                    onClick={() => {
                        navigate(cookie.get('jwttoken') ? '/surveys' : '/login')
                    }}
                >
                    <FormattedMessage id="view_surveys_lung_cancer" />
                </MyButton>
            </div>
            <MyContainer
                wrapper={false}
                minHeight={600}
            >
                <CaruselSurvey />
            </MyContainer>
        </div>
    )
}

export default Prostate