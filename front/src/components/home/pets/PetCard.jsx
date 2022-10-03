import React from 'react'
import {
    Button,
    Typography,
    Card,
    CardContent,
    Avatar,
    Stack,
} from '@mui/material'

const PetCard = ({ pets }) => {
    return pets.pets ? (
        pets.pets.map((pet) => {
            return (
                <Card
                    sx={{
                        maxWidth: '300px',
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
                            sx={{
                                backgroundColor:
                                    pet.type.toLowerCase() === 'lost'
                                        ? 'secondary.light'
                                        : 'primary.light',
                                height: '180px',
                                borderRadius: '8px',
                            }}
                        >
                            <Avatar
                                alt="Remy Sharp"
                                src={pet.img[0]}
                                sx={{ width: '150px', height: '150px' }}
                            />
                        </Stack>
                        <Stack p="16px" gap="16px">
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                fontWeight={'bold'}
                                m="0"
                            >
                                {pet.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {pet.description}
                            </Typography>
                            <Button
                                variant="contained"
                                color={
                                    pet.type.toLowerCase() === 'lost'
                                        ? 'secondary'
                                        : 'primary'
                                }
                                sx={{
                                    textTransform: 'none',
                                    width: '140px',
                                    borderRadius: '8px',
                                }}
                            >
                                More Details
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            )
        })
    ) : (
        <Typography>Loading</Typography>
    )
}

export default PetCard
