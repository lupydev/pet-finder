import { Typography } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import ProfileDetail from './ProfileDetail'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

const Profile = () => {
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        const getUser = async () => {
            const infoLocalStorage = JSON.parse(
                window.localStorage.getItem('user')
            )

            const { id, token } = infoLocalStorage

            const options = {
                headers: {
                    token,
                },
            }

            try {
                const response = await axios(
                    `${API_ROUTE}/users/${id}`,
                    options
                )
                setUserInfo(response.data.user)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [])

    return (
        <div>
            <Typography variant="h2">User Profile</Typography>
            <div>
                <ProfileDetail details={userInfo} />
            </div>
        </div>
    )
}

export default Profile
