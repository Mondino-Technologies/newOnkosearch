import React, { useState, useEffect, useContext } from "react";
import {
    AppBar,
    Toolbar,
    MenuItem,
    Box,
    Drawer,
    IconButton,
    Container,
    FormControl,
    Select,
    Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import cookie from "js-cookie";

import { LOCALES } from "../../i18n/locales";
import { LanguageContext } from "../../store";
import { FormattedMessage } from "react-intl";

const Root = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: 110,
}));
const BoxLinks = styled(Box)(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        justifyContent: "center",
    },
}));
const BoxLogo = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    [theme.breakpoints.down("lg")]: {
        marginLeft: 0,
        marginRight: 0,
    },
}));

const Cuslink = styled(Link)(({ theme }) => ({
    color: "white",
    textDecoration: "none",
    marginLeft: 5,
    marginRight: 5,
    [theme.breakpoints.down("lg")]: {
        flexDirection: "column",
        justifyContent: "center",
        marginTop: theme.spacing(1),
        color: "black",
    },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: 20,
    minWidth: 125,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const AppBarCustom = styled(AppBar)(({ theme }) => ({
    background: "#49DDC5",
    [theme.breakpoints.down("lg")]: {
        height: 80,
    },
}));

const SelectCustom = styled(Select)(({ theme }) => ({
    color: "white",
    [theme.breakpoints.down("lg")]: {
        color: "black",
        width: 150,
    },
}));

const Header: React.FC = () => {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });
    const navigate = useNavigate();
    const cookieVar = localStorage.getItem("jwttoken");
    const { mobileView, drawerOpen } = state;

    const languages = [
        { name: "Русский", code: LOCALES.RUSSIAN },
        { name: "Саха тыла", code: LOCALES.SAKHA },
    ];
    const { currentLocale, changeLocale } =
        useContext(LanguageContext);

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1200
                ? setState((prevState) => ({
                      ...prevState,
                      mobileView: true,
                  }))
                : setState((prevState) => ({
                      ...prevState,
                      mobileView: false,
                  }));
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    }, []);

    const headerData: any = [
        {
            text: <FormattedMessage id="question_answers_menu" />,
            link: "/faq",
        },
        {
            text: <FormattedMessage id="about_menu" />,
            link: "/about",
        },
        {
            text: <FormattedMessage id="index_menu" />,
            link: "/",
        },
        {
            text: <FormattedMessage id="contacts_menu" />,
            link: "/contacts",
        },
        // {
        //     text: <FormattedMessage id="profile_menu" />,
        //     link: ,
        // },
    ];

    const navigateToLogin = () => {
        navigate(cookieVar ? "form-profile" : "login");
    };

    const Links = () => {
        return (
            <BoxLinks>
                {headerData.map((item: any) => (
                    <Cuslink to={item.link} key={item.link}>
                        <CustomMenuItem>{item.text}</CustomMenuItem>
                    </Cuslink>
                ))}
                <MenuItem
                    sx={{
                        color: {
                            xs: "black",
                            lg: "white",
                        },
                        border: {
                            xs: "1px solid black",
                            lg: "1px solid white",
                        },
                        borderRadius: 1,
                        fontSize: 20,
                        marginLeft: 0.5,
                        marginTop: {
                            xs: 1,
                            lg: 0,
                        },
                    }}
                    onClick={navigateToLogin}
                >
                    {cookieVar
                        ? "Личный кабинет"
                        : "Вход/Регистрация"}
                </MenuItem>
            </BoxLinks>
        );
    };
    const Logo = () => {
        return (
            <BoxLogo>
                <MenuItem onClick={() => navigate("/")}>
                    <img
                        src={"/img/Element/Group69.png"}
                        style={{ width: 60 }}
                    />
                </MenuItem>
            </BoxLogo>
        );
    };
    const FormControlBox = () => {
        return (
            <FormControl>
                {/* <InputLabel id="demo-simple-select-label">Выбор языка</InputLabel> */}
                <SelectCustom
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentLocale}
                    onChange={(e: any) => {
                        changeLocale(e.target.value);
                    }}
                    size="small"
                    variant="standard"
                >
                    {languages.map(({ name, code }) => (
                        <MenuItem key={name} value={code}>
                            {name}
                        </MenuItem>
                    ))}
                </SelectCustom>
            </FormControl>
        );
    };
    const Desktop = () => {
        return (
            <Root>
                <Logo />
                <FormControlBox />
                <Links />
            </Root>
        );
    };
    const Mobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({
                ...prevState,
                drawerOpen: true,
            }));
        const handleDrawerClose = () =>
            setState((prevState) => ({
                ...prevState,
                drawerOpen: false,
            }));
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                }}
            >
                <IconButton
                    {...{
                        edge: "start",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon
                        fontSize="large"
                        style={{ color: "#1B1642" }}
                    />
                </IconButton>
                <FormControlBox />
                <Drawer
                    {...{
                        anchor: "left",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <Box
                        style={{
                            width: 250,
                            padding: 15,
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            alignItems: "center",
                        }}
                    >
                        <Logo />
                        <Links />
                    </Box>
                </Drawer>
            </Box>
        );
    };
    return (
        <AppBarCustom position="static">
            <Container sx={{ height: "100%" }}>
                <Toolbar
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                    }}
                >
                    {mobileView ? Mobile() : Desktop()}
                </Toolbar>
            </Container>
        </AppBarCustom>
    );
};

export default Header;
