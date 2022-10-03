import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PetCard from '../home/pets/PetCard'
import Title from './Title'
import FilterBar from './FilterBar'

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

const INITIAL_FILTER = {
    specie: '',
    breed: '',
    city: '',
    date: true,
    name: true,
    color: '',
    size: '',
    isRefound: true,
}

const principalInputs = [
    { type: 'select', name: 'specie', label: 'Specie', values: ['Dog', 'Cat'] },
    {
        type: 'select',
        name: 'breed',
        label: 'Breed',
        values: ['Chihuahua', 'Persian', 'Pug', 'Bengal', 'Boxer', 'Siames'],
    },
    {
        type: 'select',
        name: 'city',
        label: 'City',
        values: ['Buenos Aires', 'Lima', 'Medellin', 'Monterrey'],
    },
]

const extraInputs = [
    {
        type: 'select',
        name: 'date',
        label: 'Date',
        values: [
            { label: 'ascending order', value: false },
            { label: 'descending order', value: true },
        ],
    },
    {
        type: 'select',
        name: 'name',
        label: 'Name',
        values: [
            { label: 'ascending order', value: false },
            { label: 'descending order', value: true },
        ],
    },
    {
        type: 'select',
        name: 'color',
        label: 'Color',
        values: [
            { label: 'Black', value: 'black' },
            { label: 'White', value: 'white' },
        ],
    },
    {
        type: 'select',
        name: 'size',
        label: 'Size',
        values: [
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
        ],
    },
]

const PetBrowser = (props) => {
    const [pets, setPets] = useState([])
    const [filter, setFilter] = useState(INITIAL_FILTER)

    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setPets(INITIAL_PETS)
        setFilter(INITIAL_FILTER)
    }, [])

    return (
        <>
            <Title title={props.title} color={props.color} />

            <FilterBar
                title={props.title}
                principalInputs={principalInputs}
                extraInputs={extraInputs}
                handleChange={handleChange}
                filter={filter}
            />

            <Stack
                direction="row"
                justifyContent={'center'}
                flexWrap="wrap"
                gap="24px"
            >
                <PetCard pets={pets} />
            </Stack>
        </>
    )
}

export default PetBrowser
