import { Stack, Typography, Button, Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import PetCard from './PetCard'
import SvgFingerPrint from '../../layout/svgFingerPrint'
import paws from '../../../../public/paws.svg'
import { Link } from 'react-router-dom'

const data: any[] = [
    {
        name: 'Tommy',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-515863076_fs7aed.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'found',
    },
    {
        name: 'Firulais',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664197188/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1395952991_ksmp62.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'found',
    },
    {
        name: 'Manchas',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049166/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1001199382_brtfko.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'found',
    },
    {
        name: 'Firulais',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664197188/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1395952991_ksmp62.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'found',
    },
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

type Info = {
    title: string
    color: string
}

const PetCardsContainer = (props: Info) => {
    return (
        <Stack gap="25px" width='100%'>
            <Typography
                variant="h3"
                color={props.color}
                fontFamily={'Merriweather'}
                fontWeight="bold"
            >
                {props.title} Pets
            </Typography>
            <Stack direction="row" justifyContent={'center'} gap="24px">
                {data.map(
                    (item) =>
                        item.status.toLowerCase() ===
                            props.title.toLowerCase() && (
                            <PetCard
                                name={item.name}
                                img={item.img}
                                description={item.description}
                                status={item.status}
                            />
                        )
                )}
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
