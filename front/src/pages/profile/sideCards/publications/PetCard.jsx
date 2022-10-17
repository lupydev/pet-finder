import { Stack, Avatar, Button, Typography, styled, Chip } from '@mui/material'
import React from 'react'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { editPet } from '../../../../redux/asyncActions/pet/editPet'
import { useNavigate } from 'react-router-dom'

const CustomButton = styled(Button)(({ theme }) => ({
    color: theme.palette.secondary.main,
    borderRadius: '10px',
    textTransform: 'none',
    backgroundColor: theme.palette.secondary.light,
    '&:hover': {
        color: theme.palette.secondary.light,
        backgroundColor: theme.palette.secondary.main,
    },
}))

const PetCard = ({ pet, handleEditClick }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleStatusClick = (e) => {
        Swal.fire({
            title:
                pet?.type === 'Lost'
                    ? 'Did you find your pet?'
                    : 'Did you find the owner of this pet?',
            showCancelButton: true,
            confirmButtonColor: '#3981BF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I found it!',
        }).then((result) => {
            if (result.isConfirmed) {
                let petValues = { ...pet }

                petValues.meet = !petValues.meet

                dispatch(editPet({ id: pet._id, newData: petValues }))

                Swal.fire(
                    'Congratulations!',
                    "We're happy to hear that!.",
                    'success'
                )
            }
        })
    }

    const handleClick = () => {
        navigate(`/${pet.type.toLowerCase()}Pets/${pet._id}`)
    }

    const getColor = () => {
        if (pet.meet) {
            return '#D0F5E1'
        } else if (pet?.type === 'Lost') {
            return 'secondary.light'
        }
        return 'primary.light'
    }

    return (
        <Stack
            width="260px"
            boxShadow={4}
            p="8px"
            gap="16px"
            borderRadius="8px"
            sx={{
                '&:hover': {
                    transform: 'scale(1.02)',
                    transition: 'all .2s',
                },
            }}
        >
            <Stack
                width="100%"
                height="250px"
                p="40px"
                backgroundColor={getColor}
                borderRadius="8px"
                onClick={handleClick}
                sx={{
                    transition: 'all .3s',
                    '&:hover': {
                        backgroundColor:
                            pet.type === 'Lost'
                                ? 'secondary.main'
                                : 'primary.main',
                    },
                    cursor: 'pointer',
                }}
            >
                <Avatar
                    src={pet?.img[0]}
                    sx={{ width: '100%', height: '100%' }}
                />
            </Stack>
            <Stack direction="row" alignItems="center">
                <Typography px="16px" fontWeight="bold" fontSize="20px">
                    {pet?.name}
                </Typography>
                {pet?.meet && (
                    <Chip label="Reunited" color="success" size="small" />
                )}
            </Stack>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap="12px"
            >
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        borderRadius: '10px',
                        textTransform: 'none',
                    }}
                    fullWidth
                    onClick={handleStatusClick}
                >
                    Status
                </Button>
                <CustomButton
                    variant="contained"
                    onClick={() => handleEditClick(pet)}
                    fullWidth
                >
                    Edit
                </CustomButton>
            </Stack>
        </Stack>
    )
}

export default PetCard
