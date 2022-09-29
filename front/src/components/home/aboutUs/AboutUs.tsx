import { Button, Typography } from '@mui/material'
import { Box, Stack } from '@mui/material'
import React from 'react'

const AboutUs = () => {
    return (
        <Box sx={{ backgroundColor: '#3981BF' }}>
            <Box sx={{ display: 'flex' }}>
                <Stack>
                    <Typography color="secondary.light">About Us</Typography>
                    <Typography color="secondary.light">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus mollitia explicabo accusantium nulla. Quas,
                        blanditiis nostrum. Vel ducimus id laudantium labore
                        iste nulla voluptates ipsum? Porro beatae architecto
                        aliquam dolore.
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <img src='https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg'/>
                        <Button sx={{ color: 'secondary.light' }}>
                            Service
                        </Button>

                        <img src='https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg'/>
                        <Button sx={{ color: 'secondary.light' }}>
                            Service
                        </Button>

                        <img src='https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg'/>
                        <Button sx={{ color: 'secondary.light' }}>
                            Service
                        </Button>
                    </Box>
                </Stack>
                <img
                    style={{ width: '50%' }}
                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049165/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/the-pretty-girl-embarcing-cat-and-dog_vortpf.jpg"
                    alt="img-aboutus"
                />
            </Box>
        </Box>
    )
}

export default AboutUs
