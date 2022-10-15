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
    Stack,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import EditProfile from './EditProfile'
import PetDetail from './PetDetail'
import { Link, useNavigate } from 'react-router-dom'
import { getUserPets } from '../../redux/asyncActions/user/getUserPets'
import { cleanPetsData } from '../../redux/features/user/userSlice'
import PetEdit from './PetEdit'
import PetCard from '../../components/home/pets/PetCard'
import Swal from 'sweetalert2'
import { editPet } from '../../redux/asyncActions/pet/editPet'
import Title from '../../components/petBrowser/Title'
import { PublicationForm } from '../../components/formPost/PublicationForm'
import { BsArrowLeftShort } from 'react-icons/bs'

const ProfileDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { userData, userPets } = useSelector((state) => state.user)

    const [editProfile, setEditProfile] = useState(false)
    const [editPost, setEditPost] = useState(false)
    const [selectedPet, setSelectedPet] = useState(undefined)

    const handleModeEdit = () => {
        setEditProfile(!editProfile)
    }

    const handleViewProfile = (pet) => {
        const type = pet.type.toLowerCase()
        const id = pet._id

        navigate(`/${type}Pets/${id}`)
    }

    const handleEditPost = (pets) => {
        setEditPost(!editPost)
        setSelectedPet(pets)
    }

    const handleDelete = (pet) => {
        Swal.fire({
            title: `Do you really want to delete ${pet.name}?`,
            icon: 'warning',
            showDenyButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(
                    editPet({ id: pet._id, newData: { status: 'Deleted' } })
                )
                Swal.fire('Your post has been deleted!').then(() =>
                    userData.pets.map((pet) => {
                        dispatch(cleanPetsData())
                        dispatch(getUserPets(pet))
                    })
                )
            }
        })
    }

    useEffect(() => {
        dispatch(cleanPetsData())
        userData.pets.map((pet) => {
            dispatch(getUserPets(pet))
        })

        return () => {
            dispatch(cleanPetsData())
        }
    }, [])

    return (
        <Stack width="100%" gap={5} alignItems={'center'}>
            <Title title={'Profile'} />
            <Stack
                width="100%"
                maxWidth="1440px"
                direction={'row'}
                alignItems={'flex-start'}
                justifyContent={'center'}
                gap={10}
            >
                <Stack>
                    {editPost && selectedPet != undefined ? (
                        <Stack alignItems="center">
                            <Button
                                variant="contained"
                                startIcon={<BsArrowLeftShort size='24px' />}
                                onClick={() => setEditPost(!editPost)}
                                sx={{
                                    alignSelf: 'flex-start',
                                    textTransform: 'none',
                                }}
                            >
                                Back
                            </Button>
                            <PublicationForm selectedPet={selectedPet} />
                        </Stack>
                    ) : editProfile && !editPost ? (
                        <EditProfile userData={userData} />
                    ) : (
                        <Stack
                            alignItems="center"
                            justifyContent="space-between"
                            p="15px"
                            sx={{
                                backgroundColor: 'primary.main',
                                width: '400px',
                                // height: '600px',
                                borderRadius: '10px',
                            }}
                            gap={2}
                        >
                            <Avatar
                                sx={{ width: 200, height: 200 }}
                                src={userData?.img}
                                alt={userData?.nickname}
                            />

                            <Typography
                                sx={{
                                    p: 1.5,
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    m: 0,
                                    width: '100%',
                                }}
                                border="1px solid gray"
                                color="text.primary"
                                marginTop={3}
                            >
                                <b> Nickname:</b>
                                <br></br>
                                {userData?.nickname}
                            </Typography>

                            {userData?.fullname && (
                                <Typography
                                    sx={{
                                        p: 1.5,
                                        borderRadius: 3,
                                        bgcolor: 'white',
                                        m: 0,
                                        width: '100%',
                                    }}
                                    border="1px solid gray"
                                    color="text.primary"
                                    marginTop={3}
                                >
                                    <b> Full Name:</b>
                                    <br></br>
                                    {userData?.fullname}
                                </Typography>
                            )}

                            <Typography
                                sx={{
                                    p: 1.5,
                                    borderRadius: 3,
                                    bgcolor: 'white',
                                    m: 0,
                                    width: '100%',
                                }}
                                color="text.primary"
                                marginTop={3}
                                marginBottom={3}
                            >
                                <b> Email:</b>
                                <br></br>
                                {userData?.email}
                            </Typography>
                        </Stack>
                    )}

                    {editPost ? null : (
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
                                {editProfile ? 'Back to profile' : 'Go to edit'}
                            </Button>
                        </Box>
                    )}
                </Stack>
                {editPost ? null : (
                    <Stack alignItems="center" gap={5} width="100%">
                        <Typography
                            variant="h4"
                            color="primary.main"
                            fontWeight="bold"
                        >
                            My Publications
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            flexWrap="wrap"
                            gap={5}
                        >
                            {userPets.length ? (
                                <PetCard
                                    pets={userPets}
                                    isEdit={true}
                                    handleEditPost={handleEditPost}
                                    handleDelete={handleDelete}
                                    handleViewProfile={handleViewProfile}
                                />
                            ) : (
                                <Button
                                    component={Link}
                                    to="/createPost"
                                    variant="outlined"
                                    sx={{ my: '60px' }}
                                >
                                    Make your publication
                                </Button>
                            )}
                        </Stack>
                    </Stack>
                )}
            </Stack>
        </Stack>
    )
}

export default ProfileDetail
