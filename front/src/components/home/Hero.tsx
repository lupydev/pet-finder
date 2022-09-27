import { Stack, Typography, Button } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

const Hero = () => {
    return (
        <Stack gap={20}>
            <Stack width="100%" alignItems="center" position="relative">
                <Stack position="absolute" zIndex={-1}>
                    <img
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664207806/Imagenes%20Dise%C3%B1o%20UX/Logo/paws_blue_nh6vyt.png"
                        width="100%"
                    />
                </Stack>
                <Stack alignItems="center" width={{ xs: '18rem', lg: '34rem' }}>
                    <img
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049160/Imagenes%20Dise%C3%B1o%20UX/Logo/Frame_7_cbmjbf.png"
                        width="100%"
                    />
                </Stack>
            </Stack>
            <Stack
                width="100%"
                alignItems="center"
                position="relative"
                height="28rem"
            >
                <Stack position="absolute" zIndex={-1} right={0}>
                    <img
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664207810/Imagenes%20Dise%C3%B1o%20UX/Logo/paws_orange_astxim.png"
                        width="100%"
                    />
                </Stack>
                <Stack direction="row" alignItems='flex-end' gap={10}>
                    <Stack width={{ xs: '5rem', lg: '30rem' }} gap={3}>
                        <Typography
                            variant="h1"
                            fontWeight="bold"
                            color="primary.main"
                            fontSize="4rem"
                        >
                            Find your best friend!
                        </Typography>

                        <img
                            src="https://res.cloudinary.com/diyk4to11/image/upload/v1664229461/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/Vector_1_ot1yi9.png"
                            width="80%"
                        />
                        <Typography variant="subtitle1" color="primary.dark">
                            In voluptatem dolor in nihil dolorem in nihil quasi
                            ut repellendus.
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ borderRadius: 2, textTransform:'none', fontWeight: 'regular' }}
                        >
                            Post Lost Pet
                        </Button>
                    </Stack>
                    <Stack width={{ xs: '18rem', lg: '34rem' }}>
                        <img
                            src="https://res.cloudinary.com/diyk4to11/image/upload/v1664231254/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/res-console.cloudinary-removebg-preview_tvxbcu.png"
                            width="100%"
                        />
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Hero
