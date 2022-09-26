import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material'

const Home = () => {
    return (
        <Box>
            <AppBar>
                <Link to="/form">Ir a form</Link>
                <Toolbar />
                <IconButton>asd</IconButton>
            </AppBar>
        </Box>
    )
}

export default Home
