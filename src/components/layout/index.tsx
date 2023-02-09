import React, {useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import { styled } from '@mui/system'
import { Box } from '@mui/material'

import Header from './Header'
import Footer from './Footer'
import { Notification } from '..'

const Main = styled(Box)(({ theme }) => ({
    minHeight: '100vh',
    overflow: 'hidden'
}))

const Layout: React.FC = () => {
    const location = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return (
        <div>
            <Header />
            <Notification />

            <Main>
                <Outlet />
            </Main>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout