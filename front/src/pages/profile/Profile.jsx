import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData } from '../../redux/asyncActions/user/getUserData'
import ProfileDetail from './ProfileDetail'

const Profile = () => {
    const dispatch = useDispatch()
    const { status, userData } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getUserData())
    }, [])

    return (
        <div>
            <Typography
                variant="h4"
                sx={{ textAlign: 'center', margin: '1rem' }}
            >
                User Profile
            </Typography>
            <div>
                {status === 'success' && userData ? (
                    <ProfileDetail />
                ) : (
                    'Profile is loading, please reload the page'
                )}
            </div>
        </div>
    )
}

export default Profile
