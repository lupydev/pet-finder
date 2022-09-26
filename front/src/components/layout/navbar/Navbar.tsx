import React from 'react'
import { Button, ButtonProps, Stack } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'

const ButtonStyle = styled(Button)<ButtonProps>(({theme}) => {
    return {
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        textTransform: 'none',
        color:'black',
        px:4,
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
    }
})

const Navbar = () => {
    return (
        <Stack
            position="sticky"
            height="64px"
            width="100%"
            maxWidth="1280px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            my={5}
            borderRadius="0 0 20px 20px"
            zIndex={20}
        >
            <Link to="/">
                <img
                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1664207629/Imagenes%20Dise%C3%B1o%20UX/Logo/Pet_qcvo4b.png"
                    alt="logo"
                />
            </Link>
            <Stack direction="row">
                <ButtonStyle
                    component={Link}
                    to="/"
                    variant="text"
                >
                    Home
                </ButtonStyle>
                <ButtonStyle component={Link} to="/found" variant="text">
                    Found Pets
                </ButtonStyle>
                <ButtonStyle component={Link} to="/lost" variant="text">
                    Lost Pets
                </ButtonStyle>
                <ButtonStyle component={Link} to="/form" variant="text">
                    Contact
                </ButtonStyle>
            </Stack>
            <Stack direction="row">
                <ButtonStyle component={Link} to="/login" variant="text">
                    Login
                </ButtonStyle>
                <ButtonStyle component={Link} to="/signin" variant="text">
                    Sign In
                </ButtonStyle>
            </Stack>
        </Stack>
    )
}

export default Navbar
