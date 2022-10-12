import React, { useEffect, useState } from 'react'
import {
    Container,
    Paper,
    Box,
    Typography,
    Divider,
    Avatar,
    IconButton,
    Button,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import EditProfile from './EditProfile'
import PetDetail from './PetDetail'
import { Link } from 'react-router-dom'
import { getUserPets } from '../../redux/asyncActions/user/getUserPets'
import { cleanPetsData } from '../../redux/features/user/userSlice'

const petPost = [
    {
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664197188/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1395952991_ksmp62.jpg',
        name: 'Firulais',
        description: 'Lorem ipsum apsam',
    },
    {
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049169/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/adorable-brown-and-white-basenji-dog-smiling-and-giving-high-five-isolated-on-white_pxtf8z.jpg',
        name: 'Carlito',
        description: 'Lorem ipsum apsam',
    },
]

const ProfileDetail = () => {
    const dispatch = useDispatch()
    const { userData, userPets } = useSelector((state) => state.user)

    const [editOn, setEditOn] = useState(false)

    const handleModeEdit = () => {
        setEditOn(!editOn)
    }

    useEffect(() => {
        userData.pets.map((pet) => {
            dispatch(getUserPets(pet))
        })

        return () => {
            dispatch(cleanPetsData())
        }
    }, [])

    useEffect(() => {
        console.log(userPets)
    }, [userPets])

    return (
        <Container maxWidth="sm">
            {editOn ? (
                <EditProfile />
            ) : (
                <Paper
                    elevation={6}
                    sx={{
                        backgroundColor: 'primary.main',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box
                            display="flex"
                            justifyContent="flex-end"
                            width="100%"
                        >
                            <IconButton
                                color="primary"
                                aria-label="edit"
                            ></IconButton>
                        </Box>
                        <Typography variant="h4" marginY={5} color="white">
                            My Profile
                        </Typography>

                        <Divider variante="middle"></Divider>

                        <Avatar
                            sx={{ width: 200, height: 200 }}
                            src={userData?.img}
                            alt={userData?.nickname}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                sx={{
                                    p: 1.5,
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    marginRight: '1rem',
                                    marginLeft: '1rem',
                                }}
                                border="1px solid gray"
                                color="text.primary"
                                marginTop={3}
                            >
                                <b> Nickname:</b> {userData?.nickname}
                            </Typography>
                            {userData?.fullname ? (
                                <Typography
                                    sx={{
                                        p: 1.5,
                                        borderRadius: 3,
                                        bgcolor: 'white',
                                        marginRight: '1rem',
                                        marginLeft: '1rem',
                                    }}
                                    border="1px solid gray"
                                    color="text.primary"
                                    marginTop={3}
                                >
                                    <b> Full Name:</b> {userData?.fullname}
                                </Typography>
                            ) : (
                                ''
                            )}

                            <Typography
                                sx={{
                                    p: 1.5,
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    marginRight: '1rem',
                                    marginLeft: '1rem',
                                }}
                                border="1px solid gray"
                                color="text.primary"
                                marginTop={3}
                                marginBottom={3}
                            >
                                <b> Email:</b> {userData?.email}
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            )}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1rem',
                }}
            >
                <Button
                    onClick={handleModeEdit}
                    variant="contained"
                    color="primary"
                    sx={{
                        borderRadius: 2,
                        textTransform: 'none',
                        fontWeight: 'regular',
                    }}
                >
                    {editOn ? 'Back to profile' : 'Go to edit'}
                </Button>
            </Box>
            {editOn ? (
                ''
            ) : (
                <Box mt={5} sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" color="text.primary">
                        <b>My Posts</b>
                    </Typography>
                    <Box
                        display="flex"
                        justifyContent="center"
                        gap={5}
                        mb={5}
                        mt={5}
                    >
                        {userPets.length ? (
                            userPets.map((pet) => (
                                <PetDetail key={pet._id} pets={pet} />
                            ))
                        ) : (
                            <Button
                                component={Link}
                                to="/createPost"
                                variant="outlined"
                            >
                                Make your publication!
                            </Button>
                        )}
                    </Box>
                </Box>
            )}
        </Container>
    )
}

export default ProfileDetail
