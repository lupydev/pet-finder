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
    Chip,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { MdPets } from 'react-icons/md'
import { FaTransgender } from 'react-icons/fa'
import { GrMap } from 'react-icons/gr'
import Loading from '../../loading/Loading'
import { AiFillDelete, AiFillEye, AiTwotoneEdit } from 'react-icons/ai'
import { motion } from 'framer-motion'

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
                <motion.div
                    whileHover={{ scale: [null, 1.05, 1.05] }}
                    transition={{ duration: 0.4 }}
                    key={pet._id}
                >
                    <Card
                        sx={{
                            width: '270px',
                            height: '400px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        }}
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
                                position="relative"
                                sx={{
                                    backgroundColor: pet.meet
                                        ? ''
                                        : pet.type === 'Lost'
                                        ? 'secondary.light'
                                        : 'primary.light',
                                    height: '200px',
                                    borderRadius: '8px',
                                }}
                            >
                                <Stack
                                    sx={{
                                        border: pet.meet && '4px solid #2eaa2a',
                                        borderRadius: '7rem',
                                    }}
                                >
                                    <Avatar
                                        src={pet.img[0]}
                                        sx={{
                                            width: '170px',
                                            height: '170px',
                                        }}
                                    />
                                </Stack>
                                {pet?.meet && (
                                    <Stack
                                        position="absolute"
                                        right="0"
                                        bottom="0"
                                    >
                                        <img
                                            src="https://res.cloudinary.com/diyk4to11/image/upload/v1666200542/Pawprint-Heart-Reunited-Small_ara0j5.png"
                                            alt="meet"
                                            style={{
                                                transform: 'rotate(329deg)',
                                                width: '65px',
                                            }}
                                        />
                                    </Stack>
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
                                        justifyContent: 'flex-start',
                                        gap: '16px',
                                    }}
                                >
                                    {pet.name}
                                    {pet?.meet && (
                                        <Chip
                                            label="Reunited"
                                            sx={{
                                                backgroundColor:
                                                    'terciary.main',
                                                color: 'terciary.light',
                                            }}
                                        />
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
                                <Stack direction="row" width="100%" gap="5px">
                                    <GrMap fontSize="20px" />
                                    <Tooltip title={pet.location?.country}>
                                        <Typography
                                            // ml="5px"
                                            noWrap
                                            variant="body2"
                                            color="text.secondary"
                                            width="100%"
                                        >
                                            {pet.location?.country}
                                        </Typography>
                                    </Tooltip>
                                </Stack>
                                {isEdit ? (
                                    <Stack
                                        direction="row"
                                        justifyContent="center"
                                    >
                                        <IconButton
                                            size="large"
                                            color="primary"
                                            aria-label="delete"
                                            onClick={() =>
                                                handleViewProfile(pet)
                                            }
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
                                    <motion.div whileTap={{ scale: 0.98 }}>
                                        <Button
                                            component={Link}
                                            to={`/${pet.type.toLowerCase()}Pets/${
                                                pet._id
                                            }`}
                                            variant={'contained'}
                                            color={
                                                pet.meet
                                                    ? 'terciary'
                                                    : pet.type === 'Lost'
                                                    ? 'secondary'
                                                    : 'primary'
                                            }
                                            sx={{
                                                textTransform: 'none',
                                                width: '140px',
                                                borderRadius: '8px',
                                                color: pet.meet
                                                    ? 'terciary.light'
                                                    : 'white',
                                            }}
                                        >
                                            More Details
                                        </Button>
                                    </motion.div>
                                )}
                            </Stack>
                        </CardContent>
                    </Card>
                </motion.div>
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
