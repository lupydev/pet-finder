import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileDetail from './ProfileDetail'

const Profile = () => {
    const { status, userData } = useSelector((state) => state.user)

    return (
        <div>
            <Typography variant="h2">User Profile</Typography>
            <div>
                {status === 'success' && <ProfileDetail userData={userData} />}
            </div>
        </div>
    )
}

export default Profile
