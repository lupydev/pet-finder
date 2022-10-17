import React, { useEffect, useState } from 'react'
import { Stack, Typography, Grid, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import PetCardsContainer from '../../components/home/pets/PetCardsContainer'

const About = (props) => {
    const dispatch = useDispatch()
    const { MeetPetsData } = useSelector((state) => state.pet)

    const type = props.title
    console.log(type)

    useEffect(() => {
        dispatch(getPets(type))
    }, [])

    console.log(MeetPetsData)

    return (
        <Stack sx={{ justifyContent: 'center', gap: '40px' }}>
            <Typography
                color="primary.main"
                variant="h3"
                textAlign="center"
                mt={2}
            >
                About Us
            </Typography>
            <Typography sx={{ maxWidth: '1024px', margin: '0 auto' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                odio nobis ut consequatur soluta quaerat eveniet debitis maiores
                natus. Cupiditate alias at nulla cumque eligendi dolores dolore
                nobis? Ad, excepturi! Lorem ipsum, dolor sit amet consectetur
                adipisicing elit.
                <br />
                <br />
                Voluptates corporis eum cupiditate cum ducimus facilis quo
                eveniet? Ratione reiciendis, est dolores repudiandae officia
                aliquid sapiente, id odit vero dolorem culpa.
            </Typography>
            <Stack>
                <img
                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1664324514/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint-line_tjw4x6.svg"
                    alt="footprint"
                />
            </Stack>
            <Typography color="primary.main" variant="h3" textAlign="center">
                Our services
            </Typography>
            <Grid
                display="grid"
                maxWidth="1024px"
                gridTemplateColumns="1fr 1fr 1fr"
                gap={5}
                margin="0 auto"
            >
                <Stack
                    sx={{
                        justifyContent: 'center',
                        padding: '20px',
                        gap: '10px',
                        border: '2px solid #FEF0E9',
                        borderRadius: '20px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    <img
                        width="100px"
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg"
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel saepe consectetur iste maxime explicabo fuga quidem!
                        Odio, omnis esse facere quisquam, fugit quaerat mollitia
                        aliquid facilis reprehenderit nesciunt, amet corrupti!
                    </Typography>
                    <Button
                        component={Link}
                        to="/lostPets"
                        sx={{ color: 'secundary.main' }}
                    >
                        Lost pets
                    </Button>
                </Stack>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        padding: '20px',
                        gap: '10px',
                        border: '2px solid #FEF0E9',
                        borderRadius: '20px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    <img
                        width="100px"
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg"
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel saepe consectetur iste maxime explicabo fuga quidem!
                        Odio, omnis esse facere quisquam, fugit quaerat mollitia
                        aliquid facilis reprehenderit nesciunt, amet corrupti!
                    </Typography>
                    <Button
                        component={Link}
                        to="/foundPets"
                        sx={{ color: 'primary.main' }}
                    >
                        Found pets
                    </Button>
                </Stack>
                <Stack
                    sx={{
                        justifyContent: 'center',
                        padding: '20px',
                        gap: '10px',
                        border: '2px solid #FEF0E9',
                        borderRadius: '20px',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                    }}
                >
                    <img
                        width="100px"
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664416145/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint_10_daijqn.svg"
                    />
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel saepe consectetur iste maxime explicabo fuga quidem!
                        Odio, omnis esse facere quisquam, fugit quaerat mollitia
                        aliquid facilis reprehenderit nesciunt, amet corrupti!
                    </Typography>
                    <Button component={Link} to="/createPost">
                        Post a lost pet
                    </Button>
                </Stack>
            </Grid>
            <Stack gap={10} maxWidth="1440px" width="100%">
                <PetCardsContainer title="Meet" color="primary" />
            </Stack>
        </Stack>
    )
}
export default About
