import React, { useState } from "react";

import {
    InfoScreen,
    TextInfoScreen,
    ThreeScreen,
    FourScreen,
    LinkToSurveysScreen,
    MyContainer,
    MyButton,
} from "../../../components";

import { CaruselSurvey, TitleScreen } from "../../../constructor";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";

const Breath = () => {
    const navigate = useNavigate();
    const data1 = [
        {
            type: "text",
            elem: [
                <FormattedMessage id="development_lung_cancer" />,
                <FormattedMessage id="role_smoking_lung_cancer" />,
                <FormattedMessage id="reveald_lung_cancer" />,
            ],
        },
        {
            title: <FormattedMessage id="symptoms_lung_cancer" />,
            type: "text",
            elem: [
                <FormattedMessage id="asymptomatic_development_lung_cancer" />,
                <FormattedMessage id="manifestation_symptoms_lung_cancer" />,
                <FormattedMessage id="main_symptoms_lung_cancer" />,
            ],
        },
        {
            title: "",
            type: "column",
            elem: [
                <FormattedMessage id="dyspnea_lung_cancer" />,
                <FormattedMessage id="dry_cough_lung_cancer" />,
                <FormattedMessage id="hoarseness_lung_cancer" />,
                <FormattedMessage id="constant_weakness_lung_cancer" />,
                <FormattedMessage id="weight_reduction_lung_cancer" />,
            ],
        },
        {
            title: "",
            type: "text",
            elem: [
                <FormattedMessage id="specific_symptom_lung_canser" />,
            ],
        },
        {
            title: "",
            type: "column",
            elem: [
                <FormattedMessage id="loss_voice_lung_cancer" />,
                <FormattedMessage id="debilitating_cough_lung_cancer" />,
                <FormattedMessage id="chest_pain_lung_cancer" />,
                <FormattedMessage id="lymph_nodes_lung_cancer" />,
            ],
        },
    ];

    const data2 = [
        {
            align: "start",
            text: [<FormattedMessage id="lung_ldct_lung_cancer" />],
        },
    ];
    const data3 = [
        {
            title: (
                <FormattedMessage id="indications_ldct_lung_cancer" />
            ),
            type: "text",
            text: [
                <FormattedMessage id="procedures_lung_cancer" />,
                <FormattedMessage id="smokers_lung_cancer" />,
            ],
        },
        {
            title: (
                <FormattedMessage id="contraindications_ldct_lung_cancer" />
            ),
            type: "column",
            text: [
                <FormattedMessage id="age_lung_cancer" />,
                <FormattedMessage id="covid_lung_cancer" />,
                <FormattedMessage id="malignant_neoplasms_lung_cancer" />,
                <FormattedMessage id="year_ct_lung_cancer" />,
                <FormattedMessage id="fever_lung_cancer" />,
                <FormattedMessage id="elderly_lung_cancer" />,
            ],
        },
    ];

    return (
        <div>
            <InfoScreen
                title={<FormattedMessage id="lung_cancer" />}
                description={
                    <FormattedMessage id="description_lung_cancer" />
                }
                img="Group"
                infoImg="Frame7"
            />
            <TextInfoScreen data={data1} />
            <ThreeScreen data={data2} showInfoText={true} />
            <FourScreen data={data3} />
            <LinkToSurveysScreen link="" />
            <div
                style={{ display: "flex", justifyContent: "center" }}
            >
                <MyButton
                    sx={{ bgcolor: "#EB5757", mb: 2 }}
                    onClick={() => {
                        navigate(
                            localStorage.getItem("jwttoken")
                                ? "/surveys"
                                : "/login"
                        );
                    }}
                >
                    <FormattedMessage id="view_surveys_lung_cancer" />
                </MyButton>
            </div>
            <MyContainer wrapper={false} minHeight={600}>
                <CaruselSurvey />
            </MyContainer>
        </div>
    );
};

export default Breath;
