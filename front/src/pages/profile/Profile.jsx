import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/loading/Loading'
import { getUserData } from '../../redux/asyncActions/user/getUserData'
import ProfileDetail from './ProfileDetail'

const Profile = () => {
    const {userData } = useSelector((state) => state.user)

    return (
        <div>
            {userData ? (
                <ProfileDetail />
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Profile
