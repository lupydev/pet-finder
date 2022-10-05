import { Typography } from '@mui/material'
import axios from 'axios'
import { useEffect } from 'react'
import ProfileDetail from './ProfileDetail'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

const users = [
    {
        _id: '6335b95d39217f29f0585bc5',
        nickname: 'Francisco',
        fullname: 'Francisco Rey',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664465188/Integrantes/Francisco_rqloby.jpg',
        password:
            '$2a$10$xrwNdB0B1kiTVs5vRnQ3MuRUrwgLQUa49E2eQo4guUKBlLInuI0ZG',
        email: 'reyfrancisco98@hotmail.com',
        pets: [],
        admin: true,
        email_verified: true,
        status: 'Active',
        __v: 0,
    },
]

const Profile = () => {
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
                console.log(response)
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
                <ProfileDetail details={users} />
            </div>
        </div>
    )
}

export default Profile
