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
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getUserData, logout } from '../../redux/features/user/userSlice'

const UserMenu = () => {
    const { userData, userInfo } = useSelector((state) => state.user)
    const [menuItems, setMenuItems] = useState(['Profile', 'Logout'])
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
        userInfo.isAdmin
            ? setMenuItems(['Profile', 'Admin Dashboard', 'Logout'])
            : setMenuItems(['Profile', 'Logout'])
    }, [userInfo.isAdmin])

    const handleClick = (setting) => {
        switch (setting) {
        case 'Profile':
            navigate('/profile')
            break
        case 'Admin Dashboard':
            navigate('/admin')
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
                <Tooltip title="Open menu">
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
                    {menuItems.map((item) => (
                        <MenuItem key={item} onClick={() => handleClick(item)}>
                            <Typography textAlign="center">{item}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        )
    )
}

export default UserMenu
