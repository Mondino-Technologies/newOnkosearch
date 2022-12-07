import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
    Button,
    Dialog,
    DialogContent,
    DialogActions,
    Typography,
} from "@mui/material";

import { StateContext, DispatchContext } from "../../store";

const RegisterSuccessModal = () => {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);
    const navigate = useNavigate();

    const onSubmit = () => {
        navigate("/login");
        dispatch({
            type: "registerSuccessModal",
            payload: {
                open: false,
            },
        });
    };

    return (
        <Dialog
            aria-labelledby="customized-dialog-title"
            open={state.registerModal.open}
        >
            <div style={{ paddingTop: 5 }}>
                <DialogContent>
                    <Typography style={{ fontSize: 20 }}>
                        Вы прошли регистрацию! Вам придет
                        смс-сообщение на номер телефона с паролем от
                        вашего личного кабинета
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color={"primary"}
                        autoFocus
                        onClick={onSubmit}
                    >
                        Вход
                    </Button>
                </DialogActions>
            </div>
        </Dialog>
    );
};

export default RegisterSuccessModal;
