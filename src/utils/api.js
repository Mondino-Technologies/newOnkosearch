import axios from "axios";
import React from "react";
import cookie from "js-cookie";
import { FormattedMessage } from "react-intl";

const testURL = "http://127.0.0.1:8000/";
const publicURL = "https://онкопоисксаха.рф/";

const api = (url) => {
    const token = cookie.get("jwttoken");
    if (token) {
        const instance = axios.create({
            baseURL: publicURL + url,
            headers: {
                Authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        });
        return instance;
    } else {
        const instance = axios.create({
            baseURL: publicURL + url,
            headers: {
                "Content-Type": "application/json",
            },
        });
        return instance;
    }
};

class API {
    getToken({ username, password }, dispatch, navigate) {
        api("api/accounts/token/")
            .post(null, {
                username: username,
                password: password,
            })
            .then((res) => {
                cookie.set("jwttoken", res.data.access);
                dispatch({
                    type: "notification",
                    payload: {
                        status: "success",
                        active: true,
                        text: "авторизация прошла успешно",
                    },
                });
                navigate("/form-profile");
                console.log(res);
            })
            .catch(() => {
                dispatch({
                    type: "notification",
                    payload: {
                        status: "error",
                        active: true,
                        text: "такого пользователя не существует",
                    },
                });
            });
    }
    register(data, dispatch) {
        api("api/accounts/user")
            .post(null, data)
            .then((res) => {
                dispatch({
                    type: "registerSuccessModal",
                    payload: {
                        open: true,
                    },
                });
            })
            .catch((error) =>
                dispatch({
                    type: "notification",
                    payload: {
                        status: "error",
                        active: true,
                        text: "такой пользователь уже существует",
                    },
                })
            );
    }
    forgotPassword(data, dispatch, navigate) {
        api("api/accounts/renew-password")
            .post(null, data)
            .then((res) => {
                dispatch({
                    type: "notification",
                    payload: {
                        status: "success",
                        active: true,
                        text: "В ближайшее время на ваш телефон придет смс сообщение с новым паролем.",
                    },
                });
                navigate("/login");
            })
            .catch((error) =>
                dispatch({
                    type: "notification",
                    payload: {
                        status: "error",
                        active: true,
                        text: " Пароль не был восстановлен. Указанный номер телефона не зарегистрирован. Пожалуйста проверьте верно ли указан номер.",
                    },
                })
            );
    }
    async getCity() {
        let result = await api(`api/locations/city/`).get(null);
        return result;
    }
    async getOrg() {
        let result = await api(`api/locations/organisation/`).get(
            null
        );
        return result;
    }
    async getSurveysTypes() {
        let result = await api(`api/surveys/survey-types/`).get(null);
        return result;
    }
    async getAccountUser() {
        let result = await api(`api/accounts/user`).get(null);
        return result;
    }
    putAccountUser(data, dispatch) {
        api("api/accounts/user")
            .put(null, data)
            .then((res) => {
                dispatch({
                    type: "notification",
                    payload: {
                        status: "success",
                        active: true,
                        text: "профиль изменен",
                    },
                });
            })
            .catch(() => {
                dispatch({
                    type: "notification",
                    payload: {
                        status: "error",
                        active: true,
                        text: "профиль не изменен",
                    },
                });
            });
    }
    sendSurveys(data, dispatch) {
        api("api/surveys/survey/")
            .post(null, data)
            .then((res) => {
                console.log("res", res);
                const danger = res.data.is_danger;
                const clinic = res.data.to_clinic;
                if (danger == true) {
                    dispatch({
                        type: "modalSurvey",
                        payload: {
                            open: true,
                            description: (
                                <FormattedMessage id="result_survey_modal2" />
                            ),
                        },
                    });
                }
                if (danger == false && clinic == false) {
                    dispatch({
                        type: "modalSurvey",
                        payload: {
                            open: true,
                            description: (
                                <FormattedMessage id="result_survey_modal" />
                            ),
                        },
                    });
                }
                if (clinic == true) {
                    dispatch({
                        type: "modalSurvey",
                        payload: {
                            open: true,
                            description:
                                " На сегодня Вам не показано прохождение скрининга, необходимо обратиться к участковому терапевту по месту жительства.",
                        },
                    });
                }
                console.log(clinic, danger);
            })
            .catch(() => {
                dispatch({
                    type: "notification",
                    payload: {
                        status: "error",
                        active: true,
                        text: "У вас ошибка в форме анкеты",
                    },
                });
            });
    }
    async schedule(date) {
        let result = await api(
            `api/schedules/schedule?date=${date}`
        ).get(null);
        return result;
    }
    sendAppointment(data, navigate) {
        api("api/schedules/schedule/")
            .post(null, data)
            .then((res) => {
                // dispatch({ type: 'authModal', payload: { register: false, login: true, forgot: false } })
                navigate("/results");
                console.log(res);
            })
            .catch((error) => console.log(error));
    }
    feedback(data, dispatch) {
        api("api/feedback")
            .post(null, data)
            .then((res) => {
                dispatch({
                    type: "notification",
                    payload: {
                        status: "success",
                        active: true,
                        text: "ваше сообщение отправлено",
                    },
                });
                console.log(res);
            })
            .catch((error) => console.log(error));
    }
    async getResults() {
        let result = await api(`api/report/report`).get(null);
        return result;
    }
}

export default new API();
