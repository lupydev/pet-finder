import { Stack } from '@mui/material'
import React, { useEffect } from 'react'
import Hero from '../../components/home/hero/Hero'
import PetsContainer from '../../components/home/pets/PetsContainer'
import Newsletter from '../../components/newsletter/Newsletter'
import AboutUs from '../../components/home/aboutUs/AboutUs'

const Home = () => {
    return (
        <Stack width="100%" gap="100px" alignItems="center" pt="100px">
            <Hero />
            <AboutUs />
            <PetsContainer />
            <Newsletter />
        </Stack>
    )
}

export default Home
