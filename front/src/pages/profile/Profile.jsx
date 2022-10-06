import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileDetail from './ProfileDetail'

const Profile = () => {
    const { status, userData } = useSelector((state) => state.user)

    return (
        <div>
            <Typography
                variant="h4"
                sx={{ textAlign: 'center', margin: '1rem' }}
            >
                User Profile
            </Typography>
            <div>
                {userData
                    ? status === 'success' && (
                          <ProfileDetail userData={userData} />
                      )
                    : 'Profile is loading, please reload the page'}
            </div>
        </div>
    )
}

export default Profile
