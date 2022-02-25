import React from "react";

import { FormattedMessage } from "react-intl";

const CardSurveyCaruselList = [
    {
        img: 'liver',
        label: <FormattedMessage id={'screening_liver'} />,
        link: '/liver'
    },
    {
        img: 'gut',
        label: <FormattedMessage id={'screening_colon'} />,
        link: '/gut'
    },
    {
        img: 'breath',
        label: <FormattedMessage id={'screening_lungs'} />,
        link: '/breath'
    },
    {
        img: 'breast',
        label: <FormattedMessage id={'screening_mammary_gland'} />,
        link: '/breast'
    },
    {
        img: 'cervix',
        label: <FormattedMessage id={'screening_cervix'} />,
        link: '/cervix'
    },
    {
        img: 'prostata',
        label: <FormattedMessage id={'screening_prostate'} />,
        link: '/prostate'
    }
]

export default CardSurveyCaruselList