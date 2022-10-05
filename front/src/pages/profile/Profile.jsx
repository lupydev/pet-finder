import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

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
    const { status, userData } = useSelector((state) => state.user)

    return (
        <div>
            <Typography variant="h2">User Profile</Typography>
            <div>
                {status === 'success' && (
                    <ul>
                        <div key={userData._id}>
                            <li>{userData.fullname}</li>
                            <li>{userData.email}</li>
                            <img
                                style={{ width: '200px' }}
                                src={userData.img}
                            />
                        </div>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Profile
