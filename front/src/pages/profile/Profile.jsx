import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/loading/Loading'
import { getUserData } from '../../redux/asyncActions/user/getUserData'
import ProfileDetail from './ProfileDetail'
import ProfileCard from './sideCards/profile/ProfileCard'
import { BsImages } from 'react-icons/bs'
import { MdPets } from 'react-icons/md'
import { HiUserCircle, HiOutlineBell, HiOutlineTrash } from 'react-icons/hi'
import { TbMessages } from 'react-icons/tb'
import UnderConstruction from './sideCards/underConstruction/UnderConstruction'
import PublicationsCard from './sideCards/publications/PublicationsCard'

const menuItems = [
    { id: 'profile', title: 'Profile', icon: <HiUserCircle size="22px" /> },
    {
        id: 'messages',
        title: 'Messages',
        icon: <TbMessages size="22px" />,
    },
    {
        id: 'publications',
        title: 'Publications',
        icon: <BsImages size="22px" />,
    },
    {
        id: 'notifications',
        title: 'Notifications',
        icon: <HiOutlineBell size="22px" />,
    },
    { id: 'myPets', title: 'My Pets', icon: <MdPets /> },
    {
        id: 'deleteProfile',
        title: 'Delete Profile',
        icon: <HiOutlineTrash size="22px" />,
    },
]
const Profile = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector((state) => state.user)
    const [view, setView] = useState(menuItems[2].id)

    useEffect(() => {
        userData === undefined && dispatch(getUserData())
    }, [])

    return userData ? (
        <ProfileDetail menuItems={menuItems} view={view} setView={setView}>
            {view === 'profile' && <ProfileCard />}
            {view === 'messages' && <UnderConstruction />}
            {view === 'publications' && <PublicationsCard />}
            {view === 'notifications' && <UnderConstruction />}
            {view === 'myPets' && <UnderConstruction />}
            {view === 'deleteProfile' && <UnderConstruction />}
        </ProfileDetail>
    ) : (
        <Loading />
    )
}

export default Profile
