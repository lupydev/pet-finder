import React, { useState } from 'react'
import {
    Avatar,
    Box,
    Button,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from '@mui/material'
import { IoMdArrowDropdown } from 'react-icons/io'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/features/user/userSlice'
const settings = ['Profile', 'Dashboard', 'Logout']

const UserMenu = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    const handleClick = (setting) => {
        switch (setting) {
            case 'Profile':
                navigate('/profile')
                break
            case 'Dashboard':
                navigate('/user')
                break
            case 'Logout':
                dispatch(logout())
                navigate('/')
                break

            default:
                break
        }
        setAnchorElUser(null)
    }

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <Button
                    onClick={handleOpenUserMenu}
                    startIcon={<IoMdArrowDropdown color="black" />}
                    sx={{ p: 0, px: 1 }}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664465328/Integrantes/Jeyter_v3omxg.jpg"
                    />
                </Button>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem
                        key={setting}
                        onClick={() => handleClick(setting)}
                    >
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    )
}

export default UserMenu
