import React from 'react'

const ProfileDetail = ({ details }) => {
    console.log(details)
    return (
        <div>
            ProfileDetail
            {details.map((item) => (
                <div key={item._id}>
                    <h1>{item.nickname}</h1>
                </div>
            ))}
        </div>
    )
}

export default ProfileDetail
