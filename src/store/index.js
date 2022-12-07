import React from "react";

export const defaultStore = {
    noti: {
        status: "",
        text: "",
        active: false,
    },
    date: {
        root: "",
    },
    registerModal: {
        open: false,
    },
    modalSurveys: {
        description: "",
        open: false,
        username: "",
    },
};

export const StateContext = React.createContext();
export const DispatchContext = React.createContext();
export const LanguageContext = React.createContext();
