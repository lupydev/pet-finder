import React, { useEffect } from 'react'
import {
    Button,
    Typography,
    Card,
    CardContent,
    Avatar,
    Stack,
    IconButton,
    Tooltip,
    Box,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { MdPets } from 'react-icons/md'
import { FaTransgender } from 'react-icons/fa'
import { GrMap } from 'react-icons/gr'
import Loading from '../../loading/Loading'
import { AiFillDelete, AiFillEye, AiTwotoneEdit } from 'react-icons/ai'

const PetCard = ({
    pets,
    isEdit = false,
    handleViewProfile,
    handleEditPost,
    handleDelete,
}) => {
    function capitalize(text) {
        return text[0].toUpperCase() + text.slice(1).toLowerCase()
    }
    return pets.length ? (
        pets.map((pet) => {
            return (
                <Card
                    sx={{
                        width: '270px',
                        height: '400px',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                    key={pet._id}
                >
                    <CardContent
                        sx={{
                            borderRadius: '8px',
                            padding: '8px',
                            gap: '16px',
                        }}
                    >
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            flexDirection="row"
                            sx={{
                                backgroundColor:
                                    pet.type.toLowerCase() === 'lost'
                                        ? 'secondary.light'
                                        : pet.type.toLowerCase() === 'found'
                                        ? 'primary.light'
                                        : '',
                                height: '200px',
                                borderRadius: '8px',
                            }}
                        >
                            <Box
                                sx={
                                    pet?.meet && {
                                        border: ' 4px solid green',
                                        borderRadius: '7rem',
                                    }
                                }
                            >
                                <Avatar
                                    src={pet.img[0]}
                                    sx={{
                                        width: '170px',
                                        height: '170px',
                                    }}
                                />
                            </Box>
                            {pet?.meet && (
                                <img
                                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1666028425/Imagenes%20Dise%C3%B1o%20UX/Logo/Pawprint-Heart-Reunited_ilrgru.svg"
                                    alt="meet"
                                    style={{
                                        transform: 'rotate(329deg)',
                                        width: '83px',
                                    }}
                                />
                            )}
                        </Stack>
                        <Stack p="11px" gap="11px">
                            <Typography
                                noWrap
                                gutterBottom
                                fontSize="25px"
                                component="div"
                                fontWeight={'bold'}
                                m="0"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '6px',
                                }}
                            >
                                {pet.name}
                                {pet?.meet && (
                                    <Typography
                                        fontSize="14px"
                                        padding="2px"
                                        color="terciary.dark"
                                        backgroundColor="terciary.light"
                                    >
                                        Reunited
                                    </Typography>
                                )}
                            </Typography>
                            <Stack w="100%" direction="row" display="flex">
                                <Stack direction="row" width="50%">
                                    <MdPets fontSize="20px" />
                                    <Typography
                                        ml="5px"
                                        noWrap
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {capitalize(pet.species.name)}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" width="50%">
                                    <FaTransgender fontSize="20px" />
                                    <Typography
                                        ml="5px"
                                        noWrap
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {capitalize(pet.gender)}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack direction="row" width="100%">
                                <GrMap fontSize="20px" />
                                <Tooltip title={pet.location?.country}>
                                    <Typography
                                        ml="5px"
                                        noWrap
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {pet.location?.country}
                                    </Typography>
                                </Tooltip>
                            </Stack>
                            {isEdit ? (
                                <Stack direction="row" justifyContent="center">
                                    <IconButton
                                        size="large"
                                        color="primary"
                                        aria-label="delete"
                                        onClick={() => handleViewProfile(pet)}
                                    >
                                        <AiFillEye />
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        color="primary"
                                        aria-label="edit"
                                        onClick={() => handleEditPost(pet)}
                                    >
                                        <AiTwotoneEdit />
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        // color="secondary"
                                        aria-label="delete"
                                        onClick={() => handleDelete(pet)}
                                        sx={{
                                            color: 'red',
                                        }}
                                    >
                                        <AiFillDelete />
                                    </IconButton>
                                </Stack>
                            ) : (
                                <Button
                                    component={Link}
                                    to={`/${pet.type.toLowerCase()}Pets/${
                                        pet._id
                                    }`}
                                    variant={pet?.meet ? 'text' : 'contained'}
                                    color={
                                        pet.type.toLowerCase() === 'lost'
                                            ? 'secondary'
                                            : pet.type.toLowerCase() === 'found'
                                            ? 'primary'
                                            : 'terciary'
                                    }
                                    sx={
                                        ({
                                            textTransform: 'none',
                                            width: '140px',
                                            borderRadius: '8px',
                                        },
                                        pet?.meet && {
                                            color: 'terciary.dark',
                                            background: '#b6eeba',
                                        })
                                    }
                                >
                                    {pet?.meet ? 'View More' : 'More Details'}
                                </Button>
                            )}
                        </Stack>
                    </CardContent>
                </Card>
            )
        })
    ) : (
        <img
            src="https://res.cloudinary.com/diyk4to11/image/upload/v1665798878/there_no_data_jrjnmm.png"
            width="400px"
        />
    )
}

export default PetCard
