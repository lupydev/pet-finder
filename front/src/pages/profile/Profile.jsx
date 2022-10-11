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
            {status === 'success' && userData ? (
                <ProfileDetail userData={userData} />
            ) : (
                <Loading />
            )}
        </div>
    )
}

export default Profile
