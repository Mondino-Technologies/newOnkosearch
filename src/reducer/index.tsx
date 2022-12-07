export const stateReducer = (state: any, action: any) => {
    switch (action.type) {
        case "notification":
            return { ...state, noti: action.payload };
        case "date":
            return { ...state, date: action.payload };
        case "modalSurvey":
            return { ...state, modalSurveys: action.payload };
        case "registerSuccessModal":
            return { ...state, registerModal: action.payload };
        default:
            throw new Error();
    }
};
