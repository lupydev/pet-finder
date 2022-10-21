import React, { useState } from 'react'
import { Button, Menu, MenuItem, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import UserMenu from './UserMenu'
import DrawerMenu from './Drawer'
import { motion } from 'framer-motion'

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
    const { userInfo } = useSelector((state) => state.user)
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
            position="fixed"
            width="100%"
            maxWidth="1440px"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            borderRadius="0 0 20px 20px"
            px={{ xs: 3, sm: 5, md: 5 }}
            py="22px"
            zIndex={20}
            gap={1}
            sx={{ backgroundColor: '#F6F8F8' }}
        >
            <DrawerMenu />
            <Link to="/">
                <Stack maxWidth="180px">
                    <img
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049160/Imagenes%20Dise%C3%B1o%20UX/Logo/Frame_7_cbmjbf.png"
                        alt="logo"
                        width="100%"
                    />
                </Stack>
            </Link>
            <Stack
                direction="row"
                gap={'38px'}
                display={{ xs: 'none', md: 'flex' }}
            >
                <motion.div
                    whileHover={{ scale: [null, 1.05, 1.05] }}
                    transition={{ duration: 0.4 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button
                        component={Link}
                        to="/"
                        sx={buttonStyle}
                        disableRipple
                    >
                        Home
                    </Button>
                </motion.div>

                <Stack>
                    <motion.div
                        whileHover={{ scale: [null, 1.05, 1.05] }}
                        transition={{ duration: 0.4 }}
                        whileTap={{ scale: 0.98 }}
                    >
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
                    </motion.div>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem
                            component={Link}
                            to="/lostPets"
                            onClick={handleClose}
                        >
                            Lost Pets
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            to="/foundPets"
                            onClick={handleClose}
                        >
                            Found Pets
                        </MenuItem>
                        <MenuItem
                            component={Link}
                            to="/createPost"
                            onClick={handleClose}
                        >
                            Create Post
                        </MenuItem>
                    </Menu>
                </Stack>

                <motion.div
                    whileHover={{ scale: [null, 1.05, 1.05] }}
                    transition={{ duration: 0.4 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button
                        component={Link}
                        to="/aboutUs"
                        sx={buttonStyle}
                        disableRipple
                    >
                        About Us
                    </Button>
                </motion.div>

                <motion.div
                    whileHover={{ scale: [null, 1.05, 1.05] }}
                    transition={{ duration: 0.4 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <Button
                        component={Link}
                        to="/contact"
                        sx={buttonStyle}
                        disableRipple
                    >
                        Contact
                    </Button>
                </motion.div>
            </Stack>

            <Stack direction="row">
                {userInfo.isLogged ? (
                    <UserMenu />
                ) : (
                    <Button
                        variant="contained"
                        component={Link}
                        to="/login"
                        sx={{
                            textTransform: 'none',
                            px: '30px',
                            display: { xs: 'none', md: 'flex' },
                        }}
                        size="small"
                        disableRipple
                    >
                        Login
                    </Button>
                )}
            </Stack>
        </Stack>
    )
}

export default Navbar
