import { Stack } from '@mui/material'
import React, { FC, ReactNode } from 'react'
import Navbar from './navbar/Navbar'

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <Stack
            minHeight="100vh"
            alignItems="center"
            spacing="0"
            width="100%"
            // maxWidth="1440px"
            m="0 auto"
        >
            <Navbar />
            {children}
            {/* <Footer/> */}
        </Stack>
    )
}

export default Layout
