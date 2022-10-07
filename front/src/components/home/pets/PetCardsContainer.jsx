import { Stack, Typography, Button, Box } from '@mui/material'
import PetCard from './PetCard'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getPets } from '../../../redux/asyncActions/pet/getPets'

const INITIAL_PETS = [
    // {
    //     name: 'Tommy',
    //     img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-515863076_fs7aed.jpg',
    //     description:
    //         'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
    //     status: 'found',
    // },
    // {
    //     name: 'Firulais',
    //     img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664197188/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1395952991_ksmp62.jpg',
    //     description:
    //         'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
    //     status: 'found',
    // },
    // {
    //     name: 'Manchas',
    //     img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049166/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1001199382_brtfko.jpg',
    //     description:
    //         'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
    //     status: 'found',
    // },
    // {
    //     name: 'Firulais',
    //     img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664197188/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1395952991_ksmp62.jpg',
    //     description:
    //         'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
    //     status: 'found',
    // },
    {
        name: 'Huesos',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-515863076_fs7aed.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'lost',
    },
    {
        name: 'Loki',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664197188/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1395952991_ksmp62.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'lost',
    },
    {
        name: 'Zeus',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-515863076_fs7aed.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'lost',
    },
    {
        name: 'Tommy',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049166/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1001199382_brtfko.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'lost',
    },
]

const PetCardsContainer = (props) => {
    const dispatch = useDispatch()
    const type = props.title
    const { LostPetsData, FoundPetsData } = useSelector((state) => state.pet)
    const [limitedLostPetsData, setLimitedLostPetsData] = useState([])
    const [limitedFoundPetsData, setLimitedFoundPetsData] = useState([])

    useEffect(() => {
        dispatch(getPets(type))
    }, [])

    useEffect(() => {
        Object.entries(LostPetsData).length > 0 &&
            setLimitedLostPetsData(LostPetsData.pets.slice(0, 4))
    }, [LostPetsData])

    useEffect(() => {
        Object.entries(FoundPetsData).length > 0 &&
            setLimitedFoundPetsData(FoundPetsData.pets.slice(0, 4))
    }, [FoundPetsData])

    return (
        <Stack gap="25px">
            <Typography
                variant="h3"
                color={props.color}
                fontFamily={'Merriweather'}
                fontWeight="bold"
                px="30px"
            >
                {props.title} Pets
            </Typography>
            <Stack direction="row" justifyContent={'center'} gap="24px">
                <PetCard
                    pets={
                        type === 'Lost'
                            ? limitedLostPetsData
                            : limitedFoundPetsData
                    }
                />
            </Stack>
            <Button
                component={Link}
                to={`/${props.title.toLowerCase()}Pets`}
                variant="contained"
                color={
                    props.title.toLowerCase() === 'lost'
                        ? 'secondary'
                        : 'primary'
                }
                sx={{
                    textTransform: 'none',
                    px: '100px',
                    mx: 'auto',
                    borderRadius: '8px',
                }}
            >
                View all {props.title.toLowerCase()} pets
            </Button>
        </Stack>
    )
}

export default PetCardsContainer
