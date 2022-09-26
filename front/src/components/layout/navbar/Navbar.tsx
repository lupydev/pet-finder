import React from 'react'
import { Button, ButtonProps, Stack } from '@mui/material'
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom'

// const ButtonStyle = styled(Button)<ButtonProps>(({theme}) => {
//     return {
//         fontSize: theme.typography.htmlFontSize*2,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         textTransform: 'none',
//         color:'black',
//         px:4,
//         '&:hover': {
//             backgroundColor: theme.palette.secondary.light,
//         },
//     }
// })

const Navbar = () => {
    return (
        <Stack
            position="sticky"
            height="64px"
            width="100%"
            maxWidth="1440px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            my={5}
            borderRadius="0 0 20px 20px"
            px={10}
            zIndex={20}
        >
            <Link to="/">
                <img
                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1664207629/Imagenes%20Dise%C3%B1o%20UX/Logo/Pet_qcvo4b.png"
                    alt="logo"
                />
            </Link>
            <Stack direction="row" gap={5}>
                <Button
                    component={Link}
                    to="/"
                >
                    Home
                </Button>
                <Button component={Link} to="/found" >
                    Found Pets
                </Button>
                <Button component={Link} to="/lost">
                    Lost Pets
                </Button>
                <Button component={Link} to="/form">
                    Contact
                </Button>
            </Stack>
            <Stack direction="row">
                <Button component={Link} to="/login">
                    Login
                </Button>
                <Button component={Link} to="/signin">
                    Sign In
                </Button>
            </Stack>
        </Stack>
    )
}

export default Navbar
