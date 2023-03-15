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

const Liver = () => {
    const navigate = useNavigate();
    const data1 = [
        {
            type: "text",
            elem: [
                <FormattedMessage id="devlopment_liver_cancer" />,
                <FormattedMessage id="reveald_liver_cancer" />,
            ],
        },
        {
            title: <FormattedMessage id="symptoms_liver_cancer" />,
            type: "text",
            elem: [
                <FormattedMessage id="signs_hepatitis_liver_cancer" />,
            ],
        },
        {
            title: "",
            type: "column",
            elem: [
                <FormattedMessage id="bloating_liver_cancer" />,
                <FormattedMessage id="jaundice_liver_cancer" />,
                <FormattedMessage id="colorless_feces_liver_cancer" />,
                <FormattedMessage id="constant_fatigue_liver_cancer" />,
                <FormattedMessage id="heaviness_liver_cancer" />,
                <FormattedMessage id="easy_bruising_liver_cancer" />,
                <FormattedMessage id="loss_appetite_liver_cancer" />,
                <FormattedMessage id="weight_loss_liver_cancer" />,
            ],
        },
    ];

    const data2 = [
        {
            align: "start",
            text: [
                <FormattedMessage id="early_diagnosis_liver_cancer" />,
                <FormattedMessage id="standart_procedure_liver_cancer" />,
            ],
        },
    ];

    const data3 = [
        {
            title: (
                <FormattedMessage id="indications_screening_liver_cancer" />
            ),
            type: "column",
            text: [
                <FormattedMessage id="loss_voice_liver_cancer" />,
                <FormattedMessage id="debilitating_cough_liver_cancer" />,
                <FormattedMessage id="chest_pain_liver_cancer" />,
                <FormattedMessage id="lymph_nodes_liver_cancer" />,
            ],
        },
    ];

    return (
        <div>
            <InfoScreen
                title={<FormattedMessage id="liver_cancer" />}
                description={
                    <FormattedMessage id="description_liver_cancer" />
                }
                img="Group1"
                infoImg="Frame27"
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

export default Liver;
