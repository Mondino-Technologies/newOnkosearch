import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useForm } from 'react-hook-form'
import InputMask from "react-input-mask";

import { Avatar, Box, Typography, CssBaseline, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FormattedMessage } from "react-intl";

import { Input, Form, MyButton, MyLink } from '../../components'
import { DispatchContext } from '../../store';
import themeMain from '../../theme'
import API from '../../utils/api'

const theme = createTheme();

export default function ForgotPassword() {
    const dispatch = useContext(DispatchContext)
    const navigate = useNavigate()
    function Copyright(props: any) {
        return (
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                Copyright © Якутский республиканский онкологический диспансер
                {new Date().getFullYear()}.
            </Typography>
        );
    }
    const { register, handleSubmit } = useForm({
        mode: "onBlur"
    })
    const onSubmit = (data: any) => {
        API.forgotPassword({ ...data }, dispatch, navigate)
    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: themeMain.palette.primary.main }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        <FormattedMessage id="recovery_password" />
                    </Typography>
                    <Form sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
                        <Typography component="h1" variant="body2" style={{ marginBottom: '-10px', fontWeight: 600 }}>
                            <FormattedMessage id="recovery_enter_phone_number" />
                        </Typography>
                        <InputMask
                            mask="79999999999"
                            disabled={false}
                            {...register('phone')}
                        >
                            {() => <Input variant="outlined" {...register('phone')} id="phone" label={<FormattedMessage id="registration_phone" />} required/>}
                        </InputMask>
                        <MyButton
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: '100%', bgcolor: themeMain.palette.primary.main, color: 'black' }}
                        >
                            <FormattedMessage id="forgotButtonText" />
                        </MyButton>
                    </Form>
                    <Copyright sx={{ mt: 2, mb: 4 }} />
                </Box>
            </Container>
        </ThemeProvider>
    );
}