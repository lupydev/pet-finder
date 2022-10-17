import { Stack } from '@mui/material'
import React from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

const Layout = ({ children }) => {
    return (
        <Stack
            spacing="0"
            width="100%"
            alignItems="center"
            height="100vh"
            justifyContent="space-between"
        >
            <Navbar />
            {children}
            <Footer />
        </Stack>
    )
}

export default Layout
