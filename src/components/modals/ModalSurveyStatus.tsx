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

const ModalSurveyStatus = () => {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();
  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      open={state.modalSurveys.open}
    >
      <div style={{ paddingTop: 5 }}>
        <Typography variant="h5" gutterBottom style={{ paddingLeft: 15 }}>
          Ваш результат:
        </Typography>
        <DialogContent dividers>
          <Typography style={{ marginBottom: 15 }}>
          Благодарим вас за успешное прохождение тестирования!
          </Typography>
          <Typography gutterBottom>{state.modalSurveys.description}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color={"primary"}
            autoFocus
            onClick={() => {
              navigate("/surveys");
              dispatch({
                type: "modalSurvey",
                payload: { open: false, description: "" },
              });
            }}
          >
            Остальные анкеты
          </Button>
        </DialogActions>
      </div>
    </Dialog>
  );
};

export default ModalSurveyStatus;
