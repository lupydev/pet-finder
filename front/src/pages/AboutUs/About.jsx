import React, { useEffect, useState } from 'react'
import { Stack, Typography, Grid, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PetCardsReunitedContainer from './PetCardsReunitedContainer' 
import SvgCard from './SvgCard'
import OurTeamContainer from './OurTeamContainer'
import { getPets } from '../../redux/asyncActions/pet/getPets'

const About = () => {
    const { LostPetsData, FoundPetsData } = useSelector((state) => state.pet)
    const dispatch = useDispatch()
    const [allPets, setAllPets] = useState([])
    const [pets, setPets] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getPets('Found'))
        dispatch(getPets('Lost'))
    }, [])

    useEffect(() => {
        if (LostPetsData?.length > 0 && FoundPetsData?.length > 0) {
            setAllPets([...FoundPetsData, ...LostPetsData])
        }
    }, [LostPetsData, FoundPetsData])

    useEffect(() => {
        allPets?.length > 0 && setLoading(false)
    }, [allPets])

    useEffect(() => {
        if (allPets.length > 0) {
            setPets(allPets.filter((pet) => pet.meet))
        }
    }, [allPets])

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
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}
                    >
                        <SvgCard />
                        <Typography color="secundary.main">
                            Lost Pets
                        </Typography>
                    </Box>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel saepe consectetur iste maxime explicabo fuga quidem!
                    </Typography>
                    <Button
                        component={Link}
                        to="/lostPets"
                        sx={{
                            color: 'secundary.main',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
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
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}
                    >
                        <SvgCard />
                        <Typography color="secundary.main">
                            Found pets
                        </Typography>
                    </Box>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel saepe consectetur iste maxime explicabo fuga quidem!
                    </Typography>
                    <Button
                        component={Link}
                        to="/foundPets"
                        sx={{
                            color: 'primary.main',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
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
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                        }}
                    >
                        <SvgCard />
                        <Typography color="secundary.main">
                            Post a lost pet
                        </Typography>
                    </Box>
                    <Typography>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vel saepe consectetur iste maxime explicabo fuga quidem!
                    </Typography>
                    <Button
                        sx={{ display: 'flex', justifyContent: 'flex-end' }}
                        component={Link}
                        to="/createPost"
                    >
                        Post a lost pet
                    </Button>
                </Stack>
            </Grid>
            <Stack gap={10} maxWidth="1440px" width="100%">
                <PetCardsReunitedContainer
                    pets={pets}
                    title="Reunited"
                    color="primary"
                />
                <OurTeamContainer />
            </Stack>
        </Stack>
    )
}
export default About
