import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import React from 'react'
import NewsletterSubscribe from './NewsletterSubscribe'

const Newsletter = () => {
    return (
        <Stack width='100%' sx={{ backgroundColor: '#3981BF' }}  justifyContent='center' alignItems='center'>
            <Stack direction={{xs:'column', md:'row'}} maxWidth='1440px' justifyContent='center'>
                <Stack
                    color="secondary.light"
                    justifyContent= 'center'
                    px='40px'
                    py='20px'
                >
                    <h2>Newsletter</h2>
                    <Typography sx={{ paddingBottom: '2rem' }}>
                    Sign up to our newsletter, so you can be able to find out the latest news and posts about lost, found and reunited pets!
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
        </Stack>
    )
}

export default Newsletter
