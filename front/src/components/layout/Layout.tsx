import { Stack } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import Footer from './footer/Footer'
import Navbar from './navbar/Navbar'

interface Props {
    children?: JSX.Element
    // any props that come into the component
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <Stack spacing="0" width="100%" alignItems='center'>
            <Navbar />
            {children}
            <Footer />
        </Stack>
    )
}

export default Layout
