import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import React from 'react'

import NewsletterSubscribe from './NewsletterSubscribe'

const Newsletter = () => {
    return (
        <Box sx={{ backgroundColor: '#3981BF' }}>
            <Stack direction={{xs:'column', md:'row'}}>
                <Stack
                    color="secondary.light"
                    justifyContent= 'center'
                    px='40px'
                    py='20px'
                >
                    <h2>Newsletter</h2>
                    <Typography sx={{ paddingBottom: '2rem' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus mollitia explicabo accusantium nulla. Quas,
                        blanditiis nostrum. Vel ducimus id laudantium labore
                        iste nulla voluptates ipsum? Porro beatae architecto
                        aliquam dolore.
                    </Typography>
                    <NewsletterSubscribe></NewsletterSubscribe>
                </Stack>
                <img
                    style={{
                        width: '100%',
                        height: '50vh',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/iStock-1333195606_yldfxa.jpg"
                    alt="NewsletterImage"
                />
            </Stack>
        </Box>
    )
}

export default Newsletter
