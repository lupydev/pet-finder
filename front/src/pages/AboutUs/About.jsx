import React, { useEffect, useState } from 'react'
import { Stack, Typography, Grid, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PetCardsReunitedContainer from './PetCardsReunitedContainer'
import SvgCard from './SvgCard'
import OurTeamContainer from './OurTeamContainer'
import { getPets } from '../../redux/asyncActions/pet/getPets'

const serviceCardsInfo = [
    {
        id: 1,
        title: 'Lost Pets',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe consectetur iste maxime explicabo fuga quidem!',
        color: 'secondary',
        link: '/lostPets',
    },
    {
        id: 2,
        title: 'Found Pets',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe consectetur iste maxime explicabo fuga quidem!',
        color: 'primary',
        link: '/foundPets',
    },
    {
        id: 3,
        title: 'Create a Post',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel saepe consectetur iste maxime explicabo fuga quidem!',
        link: '/createPost',
    },
]

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
        <>
            <Stack
                sx={{
                    justifyContent: 'center',
                    gap: '40px',
                    width: '100%',
                    alignItems: 'center',
                    px: '40px',
                }}
            >
                <Typography
                    color="primary.main"
                    variant="h3"
                    textAlign="center"
                    mt={2}
                >
                    About Us
                </Typography>
                <Typography sx={{ maxWidth: '1024px', margin: '0 auto' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime odio nobis ut consequatur soluta quaerat eveniet
                    debitis maiores natus. Cupiditate alias at nulla cumque
                    eligendi dolores dolore nobis? Ad, excepturi! Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit.
                    <br />
                    <br />
                    Voluptates corporis eum cupiditate cum ducimus facilis quo
                    eveniet? Ratione reiciendis, est dolores repudiandae officia
                    aliquid sapiente, id odit vero dolorem culpa.
                </Typography>
                <Typography
                    color="primary.main"
                    variant="h3"
                    textAlign="center"
                >
                    Our Services
                </Typography>
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    maxWidth="1024px"
                    gap={5}
                    margin="0 auto"
                    alignItems="center"
                >
                    {serviceCardsInfo.map((item) => (
                        <Stack
                            key={item.id}
                            justifyContent="center"
                            padding="20px"
                            gap="10px"
                            borderRadius="4px"
                            boxShadow={4}
                            maxWidth="380px"
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                justifyContent={{
                                    xs: 'center',
                                    md: 'space-around',
                                }}
                                gap="20px"
                            >
                                <SvgCard />
                                <Typography
                                    fontSize="24px"
                                    color="primary.main"
                                    textTransform="uppercase"
                                >
                                    {item.title}
                                </Typography>
                            </Stack>
                            <Typography fontSize="16px" fontWeight="light">
                                {item.description}
                            </Typography>
                            <Button
                                component={Link}
                                to={item.link}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                {item.title}
                            </Button>
                        </Stack>
                    ))}
                </Stack>
                <Stack gap={10} maxWidth="1440px" width="100%">
                    <PetCardsReunitedContainer
                        pets={pets}
                        title="Reunited"
                        color="primary"
                    />
                    <OurTeamContainer />
                </Stack>
                <Stack
                    height="100px"
                    width={'100%'}
                    sx={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664932414/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellitas_icwbmh.svg)',
                        backgroundRepeat: 'repeat',
                    }}
                ></Stack>
            </Stack>
        </>
    )
}
export default About
