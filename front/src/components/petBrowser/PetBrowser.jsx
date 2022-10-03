import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import PetCard from '../home/pets/PetCard'
import Title from './Title'
import FilterBar from './FilterBar'
import { useDispatch, useSelector } from 'react-redux'
import { createPet } from '../../redux/asyncActions/pet/createPet'
import { getPets } from '../../redux/asyncActions/pet/getPets'

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
    const dispatch = useDispatch()
    const { petsData } = useSelector((state) => state.pet)
    const [filter, setFilter] = useState(INITIAL_FILTER)
    const type = props.title

    const handleChange = (e) => {
        setFilter({ ...filter, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setFilter(INITIAL_FILTER)
        dispatch(getPets(type))
    }, [])
    
    useEffect(()=>{

     console.log(petsData);

    },[petsData])

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
                <PetCard pets={petsData} />
            </Stack>
        </>
    )
}

export default PetBrowser
