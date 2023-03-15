import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import cookie from "js-cookie";

import Header from "./Header";
import { Notification } from "..";

const Main = styled(Box)(({ theme }) => ({
    minHeight: "100vh",
    overflow: "hidden",
}));

const Layout: React.FC = () => {
    const location = useLocation();
    const csrftoken = cookie.get("csrftoken");
    const sessionid = cookie.get("sessionid");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    useEffect(() => {
        cookie.remove("csrftoken");
        cookie.remove("sessionid");
    }, [csrftoken, sessionid]);

    return (
        <div>
            <Header />
            <Notification />

            <Main>
                <Outlet />
            </Main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;
