import { Button, Grid, Typography } from '@mui/material'
import { Box, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <Box sx={{ backgroundColor: '#3981BF' }}>
            <Grid
                display="grid"
                gridTemplateColumns="55% 45%"
                alignContent="center"
                height="100%"
            >
                <Stack
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus mollitia explicabo accusantium nulla. Quas,
                        blanditiis nostrum. Vel ducimus id laudantium labore
                        iste nulla voluptates ipsum? Porro beatae architecto
                        aliquam dolore.{' '}
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
                    </Typography>
                    <Stack
                        sx={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        <Button
                            component={Link}
                            to="/lostPets"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: 'secondary.light',
                                fontWeight: '700',
                                textTransform: 'none',
                            }}
                        >
                            <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg" />
                            Lost pet
                        </Button>

                        <Button
                            component={Link}
                            to="/foundPets"
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                color: 'secondary.light',
                                fontWeight: '700',
                                textTransform: 'none',
                            }}
                        >
                            <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg" />
                            Found pet
                        </Button>

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
                    </Stack>
                </Stack>

                <img
                    style={{
                        width: '100%',
                        clipPath: 'circle(62.9% at 60% 50%)',
                    }}
                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049165/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/the-pretty-girl-embarcing-cat-and-dog_vortpf.jpg"
                    alt="img-aboutus"
                />
            </Grid>
        </Box>
    )
}

export default AboutUs
