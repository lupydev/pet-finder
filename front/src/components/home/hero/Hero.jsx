import { Stack, Typography, Button, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <Stack
            width="100%"
            alignItems="center"
            position="relative"
            justifyContent="flex-end"
            height={{ xs: 'auto', md: '500px' }}
        >
            <Stack position="absolute" zIndex={-1} left="0" top="0">
                <img
                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1664207806/Imagenes%20Dise%C3%B1o%20UX/Logo/paws_blue_nh6vyt.png"
                    width="100%"
                />
            </Stack>
            <Stack position="absolute" zIndex={-1} right={0}>
                <img
                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1664207810/Imagenes%20Dise%C3%B1o%20UX/Logo/paws_orange_astxim.png"
                    width="100%"
                />
            </Stack>
            <Stack
                direction={{ xs: 'column', md: 'row' }}
                alignItems="flex-end"
                gap={10}
                maxWidth="1440px"
                py="20px"
            >
                <Stack
                    width="100%"
                    gap={3}
                    px={{ xs: '40px', md: '0' }}
                    pl={{ md: '40px' }}
                >
                    <Typography
                        variant="h1"
                        fontWeight="bold"
                        color="primary.main"
                        fontSize="4rem"
                    >
                        Find your best friend!
                    </Typography>

                    <img
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664294010/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/Vector_1_my3suh.svg"
                        width="60%"
                    />
                    <Typography variant="subtitle1" color="primary.dark">
                    We know how hard it is to lose your pet, that's why we want to help you!
                    </Typography>
                    <motion.div whileTap={{ scale: 0.98 }}>
                        <Button
                            component={Link}
                            to="/createPost"
                            variant="contained"
                            color="primary"
                            sx={{
                                alignSelf: { xs: 'center', md: 'auto' },
                                width: { xs: '200px', md: 'auto' },
                                borderRadius: 2,
                                textTransform: 'none',
                                fontWeight: 'regular',
                            }}
                        >
                            Create a Post
                        </Button>
                    </motion.div>
                </Stack>
                <Stack width="100%" display={{ xs: 'none', md: 'flex' }}>
                    <img
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664418265/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/res-console.cloudinary-removebg-preview_xq0yo7.png"
                        width="100%"
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Hero
