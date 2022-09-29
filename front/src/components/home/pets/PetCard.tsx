import React from 'react'
import {
    Button,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Avatar,
    Container,
    Stack,
} from '@mui/material'

type PetData = {
    name: string
    img: string
    description: string
    status: string
}

const CardsLostPets = (props: PetData) => {
    return (
        <Card
            sx={{
                maxWidth: '300px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
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
                    sx={{
                        backgroundColor:
                            props.status === 'lost'
                                ? 'secondary.light'
                                : 'primary.light',
                        height: '180px',
                        borderRadius: '8px',
                    }}
                >
                    <Avatar
                        alt="Remy Sharp"
                        src={props.img}
                        sx={{ width: '150px', height: '150px' }}
                    />
                </Stack>
                <Stack p="16px" gap='16px'>
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        fontWeight={'bold'}
                        m='0'
                    >
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.description}
                    </Typography>
                    <Button
                        variant="contained"
                        color={
                            props.status === 'lost' ? 'secondary' : 'primary'
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
}

export default CardsLostPets
