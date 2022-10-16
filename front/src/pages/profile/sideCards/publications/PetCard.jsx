import { Stack, Avatar, Button, Typography, styled } from '@mui/material'
import React from 'react'

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

const PetCard = ({ pet }) => {
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
                    cursor: 'pointer',
                    transition: 'all .2s',
                },
            }}
        >
            <Stack
                width="100%"
                height="250px"
                p="40px"
                backgroundColor={pet.type === 'Lost' ? 'secondary.light' : 'primary.light' }
                borderRadius='8px'
            >
                <Avatar
                    src={pet?.img[0]}
                    sx={{ width: '100%', height: '100%' }}
                />
            </Stack>
            <Typography px='16px' fontWeight='bold' fontSize='20px' >{pet?.name}</Typography>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                gap="8px"
            >
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        borderRadius: '10px',
                        textTransform: 'none',
                    }}
                    fullWidth
                >
                    Status
                </Button>
                <CustomButton variant="contained" sx={{}} fullWidth>
                    Edit
                </CustomButton>
            </Stack>
        </Stack>
    )
}

export default PetCard
