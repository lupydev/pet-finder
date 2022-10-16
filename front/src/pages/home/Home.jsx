import { Stack } from '@mui/material'
import React, { useEffect } from 'react'
import Hero from '../../components/home/hero/Hero'
import PetsContainer from '../../components/home/pets/PetsContainer'
import Newsletter from '../../components/newsletter/Newsletter'
import AboutUs from '../../components/home/aboutUs/AboutUs'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const dispatch = useDispatch()

    const { MeetPetsData } = useSelector((state) => state.pet)
    useEffect(() => {
        dispatch(getPets('Meet'))
    }, [])

    console.log(MeetPetsData)
    return (
        <Stack width="100%" gap="100px" alignItems="center">
            <Hero />
            <AboutUs />
            <PetsContainer />
            <Newsletter />
        </Stack>
    )
}

export default Home
