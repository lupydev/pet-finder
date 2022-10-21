import React, { useEffect, useState } from 'react'
import { Stack, Typography, Grid, Button, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PetCardsReunitedContainer from './PetCardsReunitedContainer'
import SvgCard from './SvgCard'
import OurTeamContainer from './OurTeamContainer'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import { motion } from 'framer-motion'

const serviceCardsInfo = [
    {
        id: 1,
        title: 'Lost Pets',
        description:
            'In this section, users who lost their pet will be able to find pet posts that have been posted as found by other users.',
        color: 'secondary',
        link: '/lostPets',
    },
    {
        id: 2,
        title: 'Found Pets',
        description:
            'In this section, users who found a lost pet will be able to find pet posts that have been posted as lost by other users.',
        color: 'primary',
        link: '/foundPets',
    },
    {
        id: 3,
        title: 'Create a Post',
        description:
            'Here you can make posts, either because you lost your pet or because you found one far from home and want to help it.',
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
                justifyContent="center"
                gap="40px"
                width="100%"
                alignItems="center"
                px="40px"
                pt="100px"
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
                    PetFinder was born with the purpose of promoting community
                    cooperation, we seek that both people who lose their best
                    friends and people who find a lost friend from home, have a
                    means by which they can be reunited.
                    <br />
                    <br />
                    We are a platform that seeks to be that means by which our
                    user can find those beings that are so important to each
                    one. We want users to be able to publish their requested pet
                    or if they find a pet that has lost its human, help them
                    find it!
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
                        <motion.div
                            whileHover={{ scale: [null, 1.1, 1.1] }}
                            transition={{ duration: 0.4 }}
                            key={item.id}
                        >
                            <Stack
                                
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
                        </motion.div>
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
