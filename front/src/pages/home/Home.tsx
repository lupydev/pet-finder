import { Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/home/Hero'
import PetsContainer from '../../components/home/pets/PetsContainer'
import Newsletter from '../../components/newsletter/Newsletter'
import AboutUs from '../../components/home/aboutUs/AboutUs'

const Home = () => {
    return (
        <Stack width="100%" gap='100px'>
            <Hero />
            <AboutUs/>
            <PetsContainer />
            <Newsletter/>
        </Stack>
    )
}

export default Home
