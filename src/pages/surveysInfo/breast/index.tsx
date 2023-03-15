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

const Gut = () => {
    const navigate = useNavigate();
    const data1 = [
        {
            type: "text",
            elem: [
                <FormattedMessage id="breast_data1_text1" />,
                <FormattedMessage id="breast_data1_text2" />,
                <FormattedMessage id="breast_data1_title_column1" />,
            ],
        },
        {
            title: "",
            type: "column",
            elem: [
                <FormattedMessage id="breast_data1_text1_column1" />,
                <FormattedMessage id="breast_data1_text2_column1" />,
                <FormattedMessage id="breast_data1_text3_column1" />,
                <FormattedMessage id="breast_data1_text4_column1" />,
                <FormattedMessage id="breast_data1_text5_column1" />,
                <FormattedMessage id="breast_data1_text6_column1" />,
                <FormattedMessage id="breast_data1_text7_column1" />,
                <FormattedMessage id="breast_data1_text8_column1" />,
            ],
        },
        {
            title: <FormattedMessage id="breast_symptoms" />,
            type: "text",
            elem: [
                <FormattedMessage id="breast_data1_title_column2" />,
            ],
        },
        {
            type: "column",
            elem: [
                <FormattedMessage id="breast_data1_text1_column2" />,
                <FormattedMessage id="breast_data1_text2_column2" />,
                <FormattedMessage id="breast_data1_text3_column2" />,
                <FormattedMessage id="breast_data1_text4_column2" />,
            ],
        },
        {
            type: "text",
            elem: [
                <FormattedMessage id="breast_data1_title_column3" />,
            ],
        },
        {
            type: "column",
            elem: [
                <FormattedMessage id="breast_data1_text1_column3" />,
                <FormattedMessage id="breast_data1_text2_column3" />,
                <FormattedMessage id="breast_data1_text3_column3" />,
                <FormattedMessage id="breast_data1_text4_column3" />,
            ],
        },
    ];

    const data2 = [
        {
            align: "start",
            text: [
                <FormattedMessage id="breast_data2_text1_column1" />,
                <FormattedMessage id="breast_data2_text2_column1" />,
            ],
        },
    ];

    return (
        <div>
            <InfoScreen
                title={<FormattedMessage id="breast_cancer" />}
                description={
                    <FormattedMessage id="breast_description" />
                }
                img="Group368"
                infoImg="Frame6"
            />
            <TextInfoScreen data={data1} />
            <ThreeScreen data={data2} showInfoText={true} />
            <FourScreen />
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

export default Gut;
