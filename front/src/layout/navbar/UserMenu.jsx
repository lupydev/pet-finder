import React, { useEffect, useState } from 'react'
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
<<<<<<< HEAD
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUserData, logout } from '../../redux/features/user/userSlice'
=======
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/features/user/userSlice'
>>>>>>> fac77f9733e692314bf0b775d455f0cc7896674e

const settings = ['Profile', 'Logout']

const UserMenu = () => {
    const { userData } = useSelector((state) => state.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    useEffect(() => {
        dispatch(getUserData())
    }, [])

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
        userData !== undefined && (
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                    <Button
                        onClick={handleOpenUserMenu}
                        startIcon={<IoMdArrowDropdown color="black" />}
                        sx={{ p: 0, px: 1 }}
                    >
                        <Avatar alt={userData?.nickname} src={userData?.img} />
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
                            <Typography textAlign="center">
                                {setting}
                            </Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        )
    )
}

export default UserMenu
