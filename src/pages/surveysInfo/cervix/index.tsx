import React, { useState } from 'react'

import { InfoScreen, TextInfoScreen, ThreeScreen, FourScreen, LinkToSurveysScreen, MyContainer, MyButton } from '../../../components'

import { CaruselSurvey, TitleScreen } from '../../../constructor'
import { FormattedMessage } from "react-intl";
import { useNavigate } from 'react-router-dom'
import cookie from 'js-cookie'

const Cervix = () => {
    const [state, setState] = useState(false)
    const navigate = useNavigate()
    const data1 = [
        {
            type: 'text',
            elem: [
                <FormattedMessage id="cervix_data1_text1" />,
                <FormattedMessage id="cervix_data1_text2" />,
                <FormattedMessage id="cervix_data1_title_column1" />
            ],
        },
        {
            type: 'column',
            elem: [
                <FormattedMessage id="cervix_data1_text1_column1" />,
                <FormattedMessage id="cervix_data1_text2_column1" />,
                <FormattedMessage id="cervix_data1_text3_column1" />,
                <FormattedMessage id="cervix_data1_text4_column1" />,
                <FormattedMessage id="cervix_data1_text5_column1" />,
                <FormattedMessage id="cervix_data1_text6_column1" />,
                <FormattedMessage id="cervix_data1_text7_column1" />,
                <FormattedMessage id="cervix_data1_text8_column1" />,
            ],
        },
        {
            title: <FormattedMessage id="cervix_symptoms" />,
            type: 'text',
            elem: [
                <FormattedMessage id="cervix_data1_text3" />,
                <FormattedMessage id="cervix_data1_text5" />,
            ],
        },
    ]

    const data2 = [
        {
            align: 'start',
            text: [
                <FormattedMessage id="cervix_data1_title_column2" />,
                <FormattedMessage id="cervix_data1_text1_column2" />,
                <FormattedMessage id="cervix_data1_text2_column2" />,
                <FormattedMessage id="cervix_data1_text3_column2" />
            ],
        },
    ]

    const data3 = [
        {
            text: [
                <FormattedMessage id="cervix_data3_text1" />,
                <FormattedMessage id="cervix_data3_text2" />,
            ],
        },
    ]

    return (
        <div>
            <InfoScreen
                title={<FormattedMessage id="cervix_cancer" />}
                description={<FormattedMessage id="cervix_cancer_description" />}
                img="Group66"
                infoImg="Frame8"
            />
            <TextInfoScreen data={data1} />
            <ThreeScreen data={data2} showInfoText={true} />
            <FourScreen data={data3} />
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

export default Cervix