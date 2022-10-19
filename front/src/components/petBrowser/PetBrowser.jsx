import { Stack, Typography } from '@mui/material'
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
import { useRef } from 'react'

const INITIAL_FILTER = {
    species: '',
    gender: '',
    city: '',
    date: '',
    name: '',
    color: '',
    size: '',
    isReunited: true,
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
    const { LostPetsData, FoundPetsData, status } = useSelector(
        (state) => state.pet
    )
    const [filter, setFilter] = useState(INITIAL_FILTER)
    const type = props.title
    const [page, setPage] = useState(1)
    const [perPage, setPerPage] = useState(8)
    const [limitedPetsData, setLimitedPetsData] = useState([])
    const [limitedFoundPetsData, setLimitedFoundPetsData] = useState([])
    const [location, setLocation] = useState(undefined)
    const [showReunited, setShowReunited] = useState(true)
    const [max, setMax] = useState(0)
    const [dataFiltered, setDataFiltered] = useState([])

    const autocompleteRef = useRef(null)

    const setMaxPages = () => {
        setMax(dataFiltered.length / perPage)
    }

    const filterLocation = (data) => {
        let filterArray = []
        let found = false

        const loc = location.country.toLowerCase().split(',')

        for (const pet of data) {
            // separar en calle, ciudad, pais
            let petLoc = pet.location.country.toLowerCase().split(',')
            found = false

            if (loc.at(-1) === petLoc.at(-1)) {
                // eliminar pais de la coincidencia
                petLoc.pop()

                // [PET LOCATION]
                for (const petStreet of petLoc) {
                    // [INPUT LOCATION]
                    for (const locStreet of loc) {
                        if (petStreet.includes(locStreet)) {
                            found = true
                            break
                        }
                    }

                    if (found) {
                        break
                    }
                }

                if (found) {
                    filterArray.push(pet)
                }
            }
        }

        return filterArray
    }

    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    const handleReset = () => {
        setPage(1)
        setFilter(INITIAL_FILTER)
        setLocation(undefined)
        setShowReunited(true)
        if (autocompleteRef.current !== null) {
            autocompleteRef.current.value = ''
        }
        dispatch(getPetsBrowser({ type, filter: { ...INITIAL_FILTER } }))
    }

    const handleShowReunited = () => {
        setShowReunited(!showReunited)
        handleSubmit()
    }

    const handleSubmit = () => {
        dispatch(getPetsBrowser({ type, filter }))
        setPage(1)
    }

    useEffect(() => {
        setMaxPages()
        if (dataFiltered?.length === 0) {
            setLimitedPetsData([])
        }
    }, [dataFiltered])

    useEffect(() => {
        dispatch(cleanPetData())
        handleReset()
        setPage(1)
    }, [props.title])

    useEffect(() => {
        dispatch(getSpecies())
        handleReset()
        setPage(1)
    }, [])

    useEffect(() => {
        let data = []

        if (LostPetsData?.length > 0 || FoundPetsData?.length > 0) {
            if (LostPetsData?.length > 0) {
                data = LostPetsData
            } else {
                data = FoundPetsData
            }

            if (location !== undefined) {
                data = filterLocation(data)
            }

            if (!showReunited) {
                data = data.filter((pet) => pet.meet === false)
            }

            setDataFiltered(data)
        } else {
            setLimitedPetsData([])
        }
    }, [LostPetsData, FoundPetsData])

    useEffect(() => {
        if (dataFiltered?.length > 0) {
            setLimitedPetsData(
                dataFiltered.slice(
                    (page - 1) * perPage,
                    (page - 1) * perPage + perPage
                )
            )
        }
    }, [page, dataFiltered])

    return (
        <>
            <Title
                title={`${props.title} Pets`}
                desc={'Here you can find your Pet'}
            />

            <FilterBar
                title={props.title}
                principalInputs={principalInputs}
                extraInputs={extraInputs}
                setLocation={setLocation}
                showReunited={showReunited}
                setShowReunited={setShowReunited}
                filter={filter}
                handleChange={handleChange}
                handleClick={handleReset}
                handleShowReunited={handleShowReunited}
                handleSubmit={handleSubmit}
                autocompleteRef={autocompleteRef}
            />

            <Stack
                direction="row"
                justifyContent={'center'}
                flexWrap="wrap"
                gap="24px"
                maxWidth="1440px"
            >
                {status === 'success' ? (
                    <PetCard pets={limitedPetsData} />
                ) : (
                    <Loading />
                )}
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
