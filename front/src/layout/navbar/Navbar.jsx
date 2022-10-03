import React, { useState } from 'react'
import { Button, Menu, MenuItem, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { BsFillCaretDownFill } from 'react-icons/bs'

const buttonStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'none',
    color: 'black',
    '&:hover': {
        color: 'primary.main',
        backgroundColor: 'transparent',
        transition: 'none',
    },
    '&:focus': {
        color: 'primary.main',
        backgroundColor: 'transparent',
    },
}

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <Stack
            position="sticky"
            width="100%"
            maxWidth="1440px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="0 0 20px 20px"
            px={10}
            py="22px"
            zIndex={20}
            sx={{ backgroundColor: '#F6F8F8' }}
        >
            <Link to="/">
                <img
                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049160/Imagenes%20Dise%C3%B1o%20UX/Logo/Frame_7_cbmjbf.png"
                    alt="logo"
                    width="200px"
                />
            </Link>
            <Stack direction="row" gap={5}>
                <Button component={Link} to="/" sx={buttonStyle} disableRipple>
                    Home
                </Button>
                <Stack>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        sx={buttonStyle}
                        endIcon={<BsFillCaretDownFill size="15px" />}
                        disableRipple
                    >
                        Pet Browser 
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem component={Link} to='/lostPets' onClick={handleClose}>Lost Pets</MenuItem>
                        <MenuItem component={Link} to='/foundPets'  onClick={handleClose}>Found Pets</MenuItem>
                        <MenuItem component={Link} to='/createPost'  onClick={handleClose}>Create Post</MenuItem>
                    </Menu>
                </Stack>
                
                <Button
                    component={Link}
                    to="/aboutUs"
                    sx={buttonStyle}
                    disableRipple
                >
                    About Us
                </Button>
                
                <Button
                    component={Link}
                    to="/contact"
                    sx={buttonStyle}
                    disableRipple
                >
                    Contact
                </Button>
            </Stack>
            <Stack direction="row">
                <Button
                    variant="contained"
                    component={Link}
                    to="/login"
                    
                    sx={{textTransform:'none',px:'40px'}}
                    disableRipple
                >
                    Login
                </Button>
            </Stack>
        </Stack>
    )
}

export default Navbar
