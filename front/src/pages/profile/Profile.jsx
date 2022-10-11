import { Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/loading/Loading'
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
<<<<<<< HEAD
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
=======
            {status === 'success' && userData ? (
                <ProfileDetail userData={userData} />
            ) : (
                <Loading />
            )}
>>>>>>> fac77f9733e692314bf0b775d455f0cc7896674e
        </div>
    )
}

export default Profile
