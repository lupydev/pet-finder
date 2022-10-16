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
    TextField,
    ToggleButtonGroup,
    ToggleButton,
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
import { BsArrowLeftShort, BsImages } from 'react-icons/bs'
import { MdPets } from 'react-icons/md'
import { HiUserCircle, HiOutlineBell, HiOutlineTrash } from 'react-icons/hi'
import { TbMessages } from 'react-icons/tb'
import { AiFillCamera, AiFillEdit } from 'react-icons/ai'
import { Form } from 'formik'

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

const ProfileDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { userData, userPets } = useSelector((state) => state.user)

    const [edit, setEdit] = useState(false)
    const [editPost, setEditPost] = useState(false)
    const [selectedPet, setSelectedPet] = useState(undefined)
    const [view, setView] = useState(menuItems[0].id)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')

    useEffect(() => {
        if (userData != undefined) {
            const [name, lastName, ...rest] = userData.fullname.split(' ')
            setName(name)
            setLastName(lastName)
        }
    }, [userData])

    const handleEditMode = () => {
        setEdit(!edit)
    }

    const handleMenuChange = (event, nextView) => {
        setView(nextView)
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
                Toast.fire({
                    icon: 'success',
                    title: 'Your post has been deleted',
                }).then(() =>
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
        <Stack width="100%" height="100%" gap={5} alignItems={'center'}>
            <Title title={'Account'} desc={`Hi ${userData.nickname}!`} />
            <Stack
                width="100%"
                py="65px"
                direction={'row'}
                justifyContent={'center'}
                sx={{
                    backgroundColor: '#E9F1F7',
                }}
            >
                <Stack
                    direction="row"
                    width="100%"
                    maxWidth="1440px"
                    height="100%"
                    gap={5}
                    alignItems={'flex-start'}
                    justifyContent={'center'}
                >
                    {/* Profile Card */}
                    <Stack
                        width="320px"
                        height="630px"
                        backgroundColor="#FDFEFF"
                        boxShadow={5}
                        borderRadius={5}
                        alignItems="center"
                        p="24px"
                        gap="20px"
                    >
                        <Stack alignItems="center" width="100%">
                            <Stack
                                width="180px"
                                height="180px"
                                p="3px"
                                sx={{ border: '3px solid #3981BF' }}
                                borderRadius="50%"
                            >
                                <Avatar
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    src={userData?.img}
                                    alt={userData?.nickname}
                                />
                            </Stack>
                            <Typography fontSize="32px" color="#0D0D0D">
                                {name}
                            </Typography>
                            <Typography fontSize="24px" color="#0D0D0D">
                                {lastName}
                            </Typography>
                        </Stack>
                        <Stack
                            width="100%"
                            height="3px"
                            backgroundColor={'#D9E6F7'}
                        />
                        <Stack width="100%">
                            <ToggleButtonGroup
                                orientation="vertical"
                                value={view}
                                onChange={handleMenuChange}
                                exclusive
                            >
                                {menuItems.map((item) => (
                                    <ToggleButton
                                        // component={ToggleButton}
                                        key={item.id}
                                        value={item.id}
                                        color="primary"
                                        fullWidth
                                        sx={{
                                            display: 'flex',
                                            direction: 'row',
                                            p: 1,
                                            justifyContent: 'flex-start',
                                            gap: '20px',
                                            border: 'none',
                                        }}
                                    >
                                        <Stack width="22px" alignItems="center">
                                            {item.icon}
                                        </Stack>
                                        <Typography
                                            color="#0D0D0D"
                                            spacing={0}
                                            textTransform="none"
                                        >
                                            {item.title}
                                        </Typography>
                                    </ToggleButton>
                                ))}
                            </ToggleButtonGroup>
                        </Stack>
                    </Stack>
                    {/* End Profile Card */}
                    {/* Side Card */}
                    <Stack
                        width="750px"
                        backgroundColor="#FDFEFF"
                        py="50px"
                        px="26px"
                        boxShadow={5}
                        borderRadius={5}
                        gap="30px"
                    >
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
                            <EditProfile
                                userData={userData}
                                setEdit={setEdit}
                            />
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
                                        Lorem ipsum dolor sit amet. In
                                        voluptatem dolor in nihil dolorem in
                                        nihil quasi ut repellendus tenetur et
                                        facere quia cum rerum molestiae. Et
                                        praesentium Quis in pariatur nostrum sit
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
                    </Stack>
                    {/* End Side Card  */}
                </Stack>
                {/* <Stack>
                    {editPost && selectedPet != undefined ? (
                        <Stack alignItems="center">
                            <Button
                                variant="contained"
                                startIcon={<BsArrowLeftShort size="24px" />}
                                onClick={() => setEditPost(!editPost)}
                                sx={{
                                    alignSelf: 'flex-start',
                                    textTransform: 'none',
                                }}
                            >
                                Back
                            </Button>
                            <PetEdit currentPet={selectedPet} />
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
                            {userPets.length > 0 ? (
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
                )} */}
            </Stack>
            <Stack
                height="100px"
                width={'100%'}
                sx={{
                    backgroundImage:
                        'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664932414/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellitas_icwbmh.svg)',
                    backgroundRepeat: 'repeat',
                }}
            ></Stack>
        </Stack>
    )
}

export default ProfileDetail
