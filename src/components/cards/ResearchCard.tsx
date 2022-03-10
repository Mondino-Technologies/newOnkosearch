import * as React from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Modal,
    Typography,
    Checkbox,
    FormControlLabel,
    CardActions, DialogTitle, DialogContent, DialogContentText, DialogActions, Dialog,
    Button
} from "@mui/material";

import { CardProps, TimeButtonProps } from "../../interface";
import { Consent } from '..'
import Api from '../../utils/api'
import { useState } from "react";
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom'

const ModalWindow = styled(Card)(({ theme }) => ({
    backgroundColor: 'white',
    maxWidth: 350,
    margin: 'auto',
    borderRadius: 10,
    '&:focus': {
        outline: 'none'
    }
}))

const ModalActions = styled(CardActions)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
}))


export const ResearchCard = ({ schedule }: CardProps) => {
    const [licenseCheck, setLicenseCheck] = useState<boolean>(false)
    const [isOpenDialog, setOpenDialog] = useState<boolean>(false)
    const [dialogMsg, setDialogMsg] = useState<string>('')
    const [showModal, setShowModal] = useState<boolean>(false)
    const [showConsent, setShowConsent] = useState<boolean>(false)
    const [pickedTime, setPickedTime] = useState<number>(0)
    const navigate = useNavigate()

    const createAppointment = async () => {
        try {
            await Api.sendAppointment({
                id: schedule.appointments[pickedTime].id
            }, navigate)
            setDialogMsg('Успешно! Вы записаны на прием!')
            setOpenDialog(true)
        } catch (e) {
            setDialogMsg('Запись на выбраное время невозможна!')
            setOpenDialog(true)
        }
    }

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }

    const handleShowModal = () => {
        setShowModal(true)
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleOpenConsent = () => {
        setShowConsent(true)
    }

    const handleCloseConsent = () => {
        setShowConsent(false)
    }

    const handleAccept = () => {
        createAppointment()
        setShowModal(false)
    }

    const TimeButton = ({ appointment, index }: TimeButtonProps) => {
        return (
            <Box margin={'5px 9px'}>
                <Button onClick={() => {
                    handleShowModal();
                    setPickedTime(index)
                }} variant={'contained'} color={'primary'}
                    disabled={appointment.allowed}>{appointment.time.substring(0, 5)}
                </Button>
            </Box>
        )
    }

    return (
        <>
            <Consent open={showConsent} setOpen={setShowConsent} />
            <Card style={{
                width: '95%',
                margin: 10,
                display: "flex",
                flexDirection: 'column',
                alignItems: 'space-between',
                justifyContent: 'space-between'
            }}>
                <Box style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                    <CardMedia height={200} sx={{ objectFit: 'cover', width: 200 }} component={'img'} alt={'img'}
                        src={`http://онкопоисксаха.рф${schedule.research.image}`} />
                    <CardContent>
                        <Typography variant={'h5'}>{schedule.research.name}</Typography>
                    </CardContent>
                </Box>
                <CardContent style={{ display: 'flex', flexWrap: 'wrap', marginTop: '-20px' }}>
                    {schedule.appointments.map((item: any, index: number) => {
                        return (
                            <TimeButton appointment={item} index={index} key={index} />
                        )
                    })}
                </CardContent>
            </Card>
            <div>
                <Modal
                    open={showModal}
                    onClose={handleCloseModal}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    style={{ display: "flex", alignItems: 'center' }}
                >
                    <ModalWindow>
                        <CardContent>
                            <Typography paragraph variant={'h5'} align={'center'}>Запись к врачу</Typography>
                            <Typography >{schedule.research.name}</Typography>
                            <Box mt={1}>
                                <Typography ><b>Дата:</b> {schedule.date}
                                </Typography>
                                <Typography
                                ><b>Время</b>: {schedule.appointments[pickedTime].time}
                                </Typography>
                            </Box>
                            <Box mt={1} display={'flex'} flexDirection={"row"} flexWrap={'wrap'} alignItems={'center'}>
                                <FormControlLabel
                                    value="top"
                                    control={<Checkbox value={licenseCheck} onChange={e => setLicenseCheck(!licenseCheck)} color="primary" />}
                                    label={<Typography>Принимаю условия </Typography>}
                                    labelPlacement="end"
                                />
                                <Typography color={"primary"} style={{ cursor: "pointer" }}
                                    onClick={handleOpenConsent}>соглашения</Typography>
                            </Box>
                        </CardContent>
                        <ModalActions>
                            <Button color={'secondary'} onClick={handleCloseModal}>Закрыть</Button>
                            <Button color={'primary'} disabled={!licenseCheck} onClick={handleAccept}>Принять</Button>
                        </ModalActions>
                    </ModalWindow>
                </Modal>
            </div>
            <Dialog
                open={isOpenDialog}
                onClose={handleCloseDialog}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">{"Регистрация на прием"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {dialogMsg}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary" autoFocus>
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
