import { Button, Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../../components/home/Hero'
import Newsletter from '../../components/newsletter/Newsletter'

const Home = () => {
    return (
        <Stack width="100%">
            <Hero />
            <Newsletter/>
        </Stack>
    )
}

export default Home
