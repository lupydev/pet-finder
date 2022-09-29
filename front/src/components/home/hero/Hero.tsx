import { Stack, Typography, Button, Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Hero = () => {
    return (
        <Stack
            width="100%"
            alignItems="center"
            position="relative"
            justifyContent="flex-end"
            height="500px"
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
                direction="row"
                alignItems="flex-end"
                gap={10}
                maxWidth="1440px"
            >
                <Stack width="100%" gap={3}>
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
                        In voluptatem dolor in nihil dolorem in nihil quasi ut
                        repellendus.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{
                            borderRadius: 2,
                            textTransform: 'none',
                            fontWeight: 'regular',
                        }}
                    >
                        Post Lost Pet
                    </Button>
                </Stack>
                <Stack width="100%">
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
