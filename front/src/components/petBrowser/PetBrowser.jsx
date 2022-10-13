import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PetCard from '../home/pets/PetCard'
import Title from './Title'
import FilterBar from './FilterBar'
import { useDispatch, useSelector } from 'react-redux'
import { createPet } from '../../redux/asyncActions/pet/createPet'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import { getPetsBrowser } from '../../redux/asyncActions/pet/getPetsBrowser'
import { getSpecies } from '../../redux/asyncActions/pet/getSpecies'
import { getBreeds } from '../../redux/asyncActions/pet/getBreeds'
import { cleanPetData } from '../../redux/features/pet/petSlice'
import { Paginationn } from './Pagination'
import Loading from '../loading/Loading'

const INITIAL_FILTER = {
    species: '',
    gender: '',
    city: '',
    date: '',
    name: '',
    color: '',
    size: '',
    isRefound: '',
}

const principalInputs = [
    {
        type: 'select',
        name: 'species',
        label: 'Specie',
        values: ['Dog', 'Cat'],
    },
    {
        type: 'select',
        name: 'gender',
        label: 'Gender',
        values: ['Male', 'Female', 'Unknown'],
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
            { label: 'Asc order', value: 'asc' },
            { label: 'Desc order', value: 'desc' },
        ],
    },
    {
        type: 'select',
        name: 'name',
        label: 'Name',
        values: [
            { label: 'Asc order', value: 'asc' },
            { label: 'Desc order', value: 'desc' },
        ],
    },
    {
        type: 'select',
        name: 'color',
        label: 'Color',
        values: [
            { label: 'White', value: 'White' },
            { label: 'Black', value: 'Black' },
            { label: 'Brown', value: 'Brown' },
            { label: 'LightBrown', value: 'LightBrown' },
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
    const { LostPetsData, FoundPetsData, species, breeds } = useSelector(
        (state) => state.pet
    )
    const [filter, setFilter] = useState(INITIAL_FILTER)
    const type = props.title
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(10)
    const [limitedLostPetsData, setLimitedLostPetsData] = useState([])
    const [limitedFoundPetsData, setLimitedFoundPetsData] = useState([])
    let max
    if (type === 'Lost') {
        max = LostPetsData.pets?.length / perPage
    } else {
        max = FoundPetsData.pets?.length / perPage
    }

    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    useEffect(() => {}, [])

    useEffect(() => {
        dispatch(cleanPetData())
        setPage(1)

        dispatch(getPetsBrowser({ type, filter }))
        dispatch(getSpecies())
    }, [props.title])

    useEffect(() => {
        dispatch(getPetsBrowser({ type, filter }))
        setPage(1)
    }, [filter])

    useEffect(() => {
        Object.entries(LostPetsData).length > 0 &&
            setLimitedLostPetsData(
                LostPetsData.pets.slice(
                    (page - 1) * perPage,
                    (page - 1) * perPage + perPage
                )
            )
    }, [page, LostPetsData])

    useEffect(() => {
        Object.entries(FoundPetsData).length > 0 &&
            setLimitedFoundPetsData(
                FoundPetsData.pets.slice(
                    (page - 1) * perPage,
                    (page - 1) * perPage + perPage
                )
            )
    }, [page, FoundPetsData])

    return (
        <>
            <Title title={props.title} color={props.color} desc={'Here you can find your Pet'} />

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
                maxWidth='1440px'
            >
                <PetCard
                    pets={
                        type === 'Lost'
                            ? limitedLostPetsData
                            : limitedFoundPetsData
                    }
                />
            </Stack>

            {max > 1 ? (
                <Paginationn page={page} setPage={setPage} max={max} />
            ) : null}

            {type === 'Lost' ? (
                <Stack
                    height="100px"
                    width={'100%'}
                    sx={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664324514/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint-line_tjw4x6.svg)',
                        backgroundRepeat: 'repeat',
                    }}
                ></Stack>
            ) : (
                <Stack
                    height="100px"
                    width={'100%'}
                    sx={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664932414/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellitas_icwbmh.svg)',
                        backgroundRepeat: 'repeat',
                    }}
                ></Stack>
            )}
        </>
    )
}

export default PetBrowser
