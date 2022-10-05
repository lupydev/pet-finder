const ProfileDetail = ({ userData }) => {
    return (
        <div>
            <ul>
                <div key={userData?._id}>
                    <h3>{userData?.nickname}</h3>
                    <h3>{userData?.email}</h3>
                    <img style={{ width: '200px' }} src={userData?.img} />
                </div>
            </ul>
        </div>
    )
}

export default ProfileDetail
