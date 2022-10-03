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

    return pets.map((pet,index) => {
        return (
            <Card
                sx={{
                    maxWidth: '300px',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
                key={index}
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
                                pet.status === 'lost'
                                    ? 'secondary.light'
                                    : 'primary.light',
                            height: '180px',
                            borderRadius: '8px',
                        }}
                    >
                        <Avatar
                            alt="Remy Sharp"
                            src={pet.img}
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
                                pet.status === 'lost'
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
}

export default PetCard
