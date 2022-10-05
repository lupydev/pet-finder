import React from 'react'

const ProfileDetail = ({ details }) => {
    console.log(details)
    return (
        <div>
            {/* {details.map((item) => (
                <div key={item._id}>
                    <h3>{item.nickname}</h3>
                    <h3>{item.email}</h3>
                    <img style={{ width: '200px' }} src={item.img} />
                </div>
            ))} */}
        </div>
    )
}

export default ProfileDetail
