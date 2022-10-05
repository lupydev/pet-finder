import { Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

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
