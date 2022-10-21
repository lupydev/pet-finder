import { Button, Grid, Typography } from '@mui/material'
import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";

const AboutUs = () => {
    return (
        <Stack
            direction="row"
            width="100%"
            justifyContent="center"
            sx={{ backgroundColor: '#3981BF' }}
            height={{ xs: 'auto', md: '500px' }}
        >
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                height="100%"
                width="100%"
                maxWidth="1440px"
                justifyContent="space-between"
                gap="30px"
            >
                <Stack
                    pl="40px"
                    py={{ xs: '20px', md: '0px' }}
                    width={{ sx: '100%', md: '55%' }}
                    sx={{
                        alignSelf: 'center',
                        justifySelf: 'end',
                        maxWidth: '600px',
                        gap: '30px',
                    }}
                >
                    <Typography color="secondary.light" variant="h2">
                        About Us
                    </Typography>
                    <Typography color="secondary.light">
                    We want to be a platform trough which our users can find those beings that are so important to them. 
                    <br />
                    We want users to be able to publish their lost pet or if they find one, help them find their family!
                    </Typography>
                    <Button
                        component={Link}
                        to="/aboutUs"
                        sx={{
                            color: 'secondary.light',
                            fontWeight: '700',
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                    >
                        Learn more
                    </Button>

                    <Stack
                        sx={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <motion.div
                            whileHover={{ scale: [null, 1.1, 1.1] }}
                            transition={{ duration: 0.3 }}
                            whileTap={{ scale: 0.8 }}
                        >
                            <Button
                                component={Link}
                                to="/lostPets"
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    color: 'secondary.light',
                                    fontWeight: '700',
                                    textTransform: 'none',
                                }}
                            >
                                <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg" />
                                Lost pet
                            </Button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: [null, 1.1, 1.1] }}
                            transition={{ duration: 0.3 }}
                            whileTap={{ scale: 0.8 }}
                        >
                        <Button
                            component={Link}
                            to="/foundPets"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                color: 'secondary.light',
                                fontWeight: '700',
                                textTransform: 'none',
                            }}
                        >
                            <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg" />
                            Found pet
                        </Button>
                        </motion.div>
                        
                        <motion.div
                            whileHover={{ scale: [null, 1.1, 1.1] }}
                            transition={{ duration: 0.3 }}
                            whileTap={{ scale: 0.8 }}
                        >
                        <Button
                            component={Link}
                            to="/createPost"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: 'secondary.light',
                                fontWeight: '700',
                                textTransform: 'none',
                            }}
                        >
                            <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg" />
                            Post a lost pet
                        </Button>
                        </motion.div>
                    </Stack>
                </Stack>
                <Stack
                    justifyContent="center"
                    width={{ xs: '100%', md: '55%' }}
                    height={{ xs: '400px', md: '100%' }}
                    sx={{
                        clipPath: {
                            xs: 'none',
                            md: 'circle(62.9% at 60% 50%)',
                        },
                        overflow: 'hidden',
                        backgroundImage:
                            'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664049165/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/the-pretty-girl-embarcing-cat-and-dog_vortpf.jpg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                />
            </Stack>
        </Stack>
    )
}

export default AboutUs
