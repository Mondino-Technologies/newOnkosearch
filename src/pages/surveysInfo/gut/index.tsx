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
import cookie from "js-cookie";
import { useNavigate } from "react-router-dom";

import { CaruselSurvey, TitleScreen } from "../../../constructor";
import { FormattedMessage } from "react-intl";

const Gut = () => {
    const navigate = useNavigate();
    const [state, setState] = useState(false);
    const data1 = [
        {
            type: "text",
            elem: [
                <FormattedMessage id="gut_data1_text1" />,
                <FormattedMessage id="gut_data1_text2" />,
                <FormattedMessage id="gut_data1_title_column1" />,
            ],
        },
        {
            type: "column",
            elem: [
                <FormattedMessage id="gut_data1_text1_column1" />,
                <FormattedMessage id="gut_data1_text2_column1" />,
                <FormattedMessage id="gut_data1_text3_column1" />,
                <FormattedMessage id="gut_data1_text4_column1" />,
                <FormattedMessage id="gut_data1_text5_column1" />,
                <FormattedMessage id="gut_data1_text6_column1" />,
            ],
        },
        {
            title: <FormattedMessage id="gut_symptoms" />,
            type: "text",
            elem: [
                <FormattedMessage id="gut_data1_text1_column2" />,
                <FormattedMessage id="gut_data1_text2_column2" />,
                <FormattedMessage id="gut_data1_text3_column2" />,
                <FormattedMessage id="gut_data1_text4_column2" />,
            ],
        },
    ];

    const data2 = [
        {
            align: "start",
            text: [<FormattedMessage id="gut_data2_text1" />],
        },
    ];

    return (
        <div>
            <InfoScreen
                title={<FormattedMessage id="gut_cancer" />}
                description={
                    <FormattedMessage id="gut_description" />
                }
                img="gut2"
                infoImg="Frame72"
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
