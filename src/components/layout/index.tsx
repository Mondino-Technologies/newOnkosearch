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
    // const csrftoken = cookie.get("csrftoken");
    // const sessionid = cookie.get("sessionid");
    function CookiesDelete() {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i];
            var eqPos = cookie.indexOf("=");
            var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie =
                name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;";
            document.cookie =
                name +
                "=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);
    useEffect(() => {
        CookiesDelete();
    }, []);

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
