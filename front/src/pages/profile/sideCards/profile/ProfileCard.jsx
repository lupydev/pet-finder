import { IconButton, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from '../../../../redux/asyncActions/user/getAllUsers'
import { getUserData } from '../../../../redux/asyncActions/user/getUserData'
import EditProfile from './EditProfile'

const Profile = () => {
    const { userData } = useSelector((state) => state.user)
    const dispatch= useDispatch();

    const [edit, setEdit] = useState(false)

    const handleEditMode = () => {
        setEdit(!edit)
    }

    useEffect(() =>{
        dispatch(getUserData())
    },[])

    return (
        <>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography variant="h5" fontWeight="bold">
                    This is your Profile
                </Typography>
                <IconButton
                    sx={{
                        backgroundColor: '#3981BF',
                        '&:hover': {
                            backgroundColor: '#569cd9',
                        },
                    }}
                    color="primary"
                    onClick={handleEditMode}
                >
                    <AiFillEdit color="white" />
                </IconButton>
            </Stack>
            {edit ? (
                <EditProfile userData={userData} setEdit={setEdit} />
            ) : (
                <>
                    <Stack direction="row" alignItems={'center'}>
                        <Typography
                            fontWeight="bold"
                            sx={{ opacity: '.5' }}
                            width="20%"
                        >
                            Nickname
                        </Typography>

                        <Typography>{userData.nickname}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems={'center'}>
                        <Typography
                            fontWeight="bold"
                            width="20%"
                            sx={{ opacity: '.5' }}
                        >
                            Full Name
                        </Typography>

                        <Typography>{userData.fullname}</Typography>
                    </Stack>

                    <Stack direction="row">
                        <Typography
                            fontWeight="bold"
                            width="20%"
                            sx={{ opacity: '.5' }}
                        >
                            About You
                        </Typography>
                        <Typography width="80%">
                            Lorem ipsum dolor sit amet. In voluptatem dolor in
                            nihil dolorem in nihil quasi ut repellendus tenetur
                            et facere quia cum rerum molestiae. Et praesentium
                            Quis in pariatur nostrum sit
                        </Typography>
                    </Stack>
                    <Stack direction="row" mb="45px">
                        <Typography
                            fontWeight="bold"
                            width="20%"
                            sx={{ opacity: '.5' }}
                        >
                            Country
                        </Typography>
                        <Typography>Argentina</Typography>
                    </Stack>
                </>
            )}
        </>
    )
}

export default Profile
