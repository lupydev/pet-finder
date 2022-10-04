import React from 'react'
import Typography from '@mui/material/Typography'

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

const User = (props) => {
    return (
        <div>
            <Typography variant="h2">User Dashboard</Typography>
            <div>
                <ul>
                    {users.map((item) => (
                        <div key={item._id}>
                            <li>{item.fullname}</li>
                            <li>{item.email}</li>
                            <img style={{ width: '200px' }} src={item.img} />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default User
