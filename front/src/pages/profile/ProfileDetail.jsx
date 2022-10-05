import React from 'react'

const ProfileDetail = ({ userData }) => {
    return (
        <div>
            <ul>
                <div key={userData._id}>
                    <li>{userData.fullname}</li>
                    <li>{userData.email}</li>
                    <img style={{ width: '200px' }} src={userData.img} />
                </div>
            </ul>
        </div>
    )
}

export default ProfileDetail
