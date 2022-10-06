import { Pagination, Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PetCard from '../home/pets/PetCard'
import Title from './Title'
import FilterBar from './FilterBar'
import { useDispatch, useSelector } from 'react-redux'
import { createPet } from '../../redux/asyncActions/pet/createPet'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import { cleanPetData } from '../../redux/features/pet/PetSlice'

const INITIAL_FILTER = {
    specie: '',
    gender: '',
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
        name: 'gender',
        label: 'Gender',
        values: ['Male', 'Female','Unknown'],
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
            { label: 'Ascending order', value: false },
            { label: 'Descending order', value: true },
        ],
    },
    {
        type: 'select',
        name: 'name',
        label: 'Name',
        values: [
            { label: 'Ascending order', value: false },
            { label: 'Descending order', value: true },
        ],
    },
    {
        type: 'select',
        name: 'color',
        label: 'Color',
        values: [
            { label: 'White', value: 'White' },
            { label: 'Grey', value: 'Black' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Black', value: 'Black' },
            { label: 'Grey', value: 'Grey' },
        ],
    },
    {
        type: 'select',
        name: 'size',
        label: 'Size',
        values: [
            { label: 'Small', value: 'Small' },
            { label: 'Medium', value: 'Medium' },
            { label: 'Large', value: 'Large' },
        ],
    },
]

const PetBrowser = (props) => {
    const dispatch = useDispatch()
    const { LostPetsData, FoundPetsData } = useSelector((state) => state.pet)
    const [filter, setFilter] = useState(INITIAL_FILTER)
    const type = props.title

    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        dispatch(cleanPetData())
        // setFilter(INITIAL_FILTER)
        dispatch(getPets(type))
    }, [props.title])

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
                <PetCard
                    pets={type === 'Lost' ? LostPetsData : FoundPetsData}
                />
            </Stack>

            <Pagination sx={{marginTop: '20px'}} count={10} showFirstButton showLastButton />

            {type === 'Lost' ?
            <Stack
                height="100px"
                width={'100%'}
                sx={{
                    backgroundImage: `url(https://res.cloudinary.com/diyk4to11/image/upload/v1664324514/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint-line_tjw4x6.svg)`,
                    backgroundRepeat: 'repeat',
                }}
            ></Stack>
            :
            <Stack
                height="100px"
                width={'100%'}
                sx={{
                    backgroundImage: `url(https://res.cloudinary.com/diyk4to11/image/upload/v1664932414/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellitas_icwbmh.svg)`,
                    backgroundRepeat: 'repeat',
                }}
            ></Stack>}


        </>
    )
}

export default PetBrowser
