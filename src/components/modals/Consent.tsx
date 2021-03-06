import React, { useState } from 'react';
import { Box, Typography, Dialog } from "@mui/material";
import { styled } from "@mui/system";

import { ConsentProps } from '../../interface'

const Paper = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2, 4, 3),
    '&:focus': {
        outline: 'none',
    },
    borderRadius: 20,
    paddingTop: 20,
    display: 'flex',
    height: '50%',
}))

const ModalStyle = styled(Dialog)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))
const Consent: React.FC<ConsentProps> = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    };
    const body = (
        <Paper style={{ flexDirection: "column" }}>
            <Typography variant={'h5'} style={{ marginBottom: 20 }}> Согласие лица на обработку их персональных
                данных</Typography>

            <Typography variant={"body1"}>
                В соответствии с Федеральным законом РФ №152-ФЗ от 27.07.2006 «О персональных данных»,
                Я
                даю согласие на обработку нижеуказанным оператором предоставленных мною своих персональных
                данных и персональных данных специальной категории, в том числе, составляющих врачебную тайну
                (далее – персональные данные), оплаты оказанных мне услуг и осуществления контроля над её
                объемом и качеством.
                Оператор: Государственное бюджетное учреждение Республики Саха (Якутия) «Якутский
                республиканский онкологический диспансер» 677005, Республика Саха (Якутия), г. Якутск, ул.
                Феликса Кона, д. 1, корп. 3
                Мои персональные данные, в отношении которых дано согласие, включают:
                Фамилия; имя; отчество; пол; дата рождения; паспортные данные (включая регистрационные данные
                паспорта, адрес регистрации); адрес проживания; сведения о месте работы, профессии, занимаемой
                должности; контактный телефон; сведения о состоянии здоровья, диагнозе, факте обращения за
                медицинскими услугами, месте оказания медицинских услуг, виде, условиях лечения.
                Перечень действий с персональными данными, в отношении которых дано согласие, включает:
                - обработку моих персональных данных неавтоматизированным и автоматизированным способом;
                - передачу моих персональных данных в электронном виде посредством физических электронных
                носителях (флэш карта) или бумажном виде на бумажных носителях;
                - обработку, включая сбор, систематизацию, накопление, хранение, уточнение (обновление,
                изменение), использование, распространение (а именно передачу партнерам – медицинским и иным
                учреждениям, с которыми у Оператора имеются договорные отношения об оказании медицинской помощи
                и иных услуг застрахованным), обезличивание, блокирование, уничтожение моих персональных данных,
                получение моих персональных данных от партнеров Оператора.
                Срок хранения моих персональных данных соответствует сроку хранения первичных медицинских
                документов и составляет двадцать пять лет.
                Передача моих персональных данных иным лицам или иное их разглашение может осуществляться только
                с моего письменного согласия.
                Настоящее согласие действует бессрочно.
                Я оставляю за собой право отозвать свое согласие посредством составления соответствующего
                письменного документа, который может быть направлен мной в адрес оператора по почте заказным
                письмом с уведомлением о вручении либо вручен лично под расписку представителю оператора. В
                случае получения моего письменного заявления об отзыве настоящего согласия на обработку
                персональных данных оператор обязан прекратить их обработку в течение периода времени,
                необходимого для завершения взаиморасчетов по оплате оказанной мне до этого медицинской помощи.
                Я оставляю за собой право отозвать свое согласие посредством составления соответствующего
                письменного документа, который может быть направлен мной в адрес оператора по почте заказным
                письмом с уведомлением о вручении либо вручен лично под расписку представителю оператора. В
                случае получения моего письменного заявления об отзыве настоящего согласия на обработку
                персональных данных оператор обязан прекратить их обработку в течение периода времени,
                необходимого для завершения взаиморасчетов по оплате оказанной мне до этого медицинской помощи.

            </Typography>
        </Paper>
    );

    return (
        <Box>
            <ModalStyle
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                {body}
            </ModalStyle>
        </Box>
    );
};

export default Consent