import React from 'react'
import {
    Button,
    Typography,
    Card,
    CardContent,
    CardMedia,
    CardActions,
} from '@mui/material'

const CardsLostPets = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-515863076_fs7aed.jpg"
                alt="lost-pet"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Tommy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Tommy Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Culpa similique incidunt laborum, rerum deserunt
                    reprehenderit perspiciatis? Repellat nostrum temporibus
                    nesciunt. Necessitatibus eos ipsum dolorum veritatis.
                    Quaerat molestiae consectetur nisi libero.
                </Typography>
            </CardContent>
            <CardActions>
                <Button sx={{ color: 'black' }} size="small">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    )
}

export default CardsLostPets
