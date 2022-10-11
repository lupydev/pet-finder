import React, { useEffect } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Grid, Typography } from '@mui/material'
import TextfieldWrapper from './Textfield/Textfield'
import SelectWrapper from './Select/Select'
import DateTimePicker from './DateTimePicker/DateTimePicker'
import specie from './Data/Specie/specie.json'
import gender from './Data/Gender/gender.json'
import breed from './Data/Breed/breed.json'
import size from './Data/Size/size.json'
import age from './Data/Age/age.json'
import color from './Data/Color/color.json'
import types from './Data/Type/types.json'
import ButtonWrapper from './Button/ButtonWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { getSpecies } from '../../redux/asyncActions/pet/getSpecies'
import { createPet } from '../../redux/asyncActions/pet/createPet'
import GMapsApi from './GMapsAutocomplete/GMapsApi'

const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().max(15),
    description: Yup.string(),
    species: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    size: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    breed: Yup.string().required('Required'),
    age: Yup.string(),
    color: Yup.string().required('Required'),
    location: Yup.string(),
    status: Yup.string(),
    date: Yup.date().required('Required'),
    observation: Yup.string(),
})

export const CreatePostFinal = () => {
    const dispatch = useDispatch()
    const { species, breeds } = useSelector((state) => state.pet)

    const getUserId = () => {
        let user = JSON.parse(window.localStorage.getItem('user'))
        return user.id
    }

    const INITIAL_FORM_STATE = {
        name: '',
        userId: getUserId(),
        description: '',
        species: '',
        gender: '',
        size: '',
        type: '',
        breed: '',
        age: '',
        color: '',
        img: [
            'https://res.cloudinary.com/diyk4to11/image/upload/v1664395969/avatar_whzrdg.webp',
        ],
        location: '',
        date: '',
        observation: '',
    }

    useEffect(() => {
        dispatch(getSpecies())
    }, [])

    const handleSubmit = (values, resetForm) => {
        dispatch(createPet(values))
        resetForm()
    }

    return (
        <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, { resetForm }) => {
                handleSubmit(values, resetForm)
            }}
        >
            <Form>
                <Grid container spacing={2} columns={6} margin={3} width={800}>
                    <Grid item xs={6}>
                        <Typography>Pet details</Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <TextfieldWrapper
                            id="name"
                            name="name"
                            label="Pet name"
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <DateTimePicker id="date" name="date" size="small" />
                    </Grid>
                    <Grid item xs={2}>
                        <SelectWrapper
                            id="species"
                            name="species"
                            label="Specie"
                            options={species}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <SelectWrapper
                            id="breed"
                            name="breed"
                            label="Breed"
                            options={breed}
                            size="small"
                        />
                    </Grid>

                    <Grid item xs={2}>
                        <SelectWrapper
                            id="gender"
                            name="gender"
                            label="Gender"
                            options={gender}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <SelectWrapper
                            id="size"
                            name="size"
                            label="Size"
                            options={size}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <SelectWrapper
                            id="age"
                            name="age"
                            label="Age"
                            options={age}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <SelectWrapper
                            id="color"
                            name="color"
                            label="Color"
                            options={color}
                            size="small"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextfieldWrapper
                            id="observation"
                            name="observation"
                            label="Observation"
                            multiline={true}
                            rows={4}
                            size="small"
                        />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography>Location</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <SelectWrapper
                            id="type"
                            name="type"
                            label="Type"
                            options={types}
                            size="small"
                        />
                    </Grid>

                    <Grid item xs={3}>
                        <GMapsApi />
                    </Grid>

                    <Grid item xs={6}>
                        <TextfieldWrapper
                            id="description"
                            name="description"
                            label="Description"
                            multiline={true}
                            rows={6}
                            size="small"
                        />
                    </Grid>

                    {/* <Grid item xs={3}>
                        <TextfieldWrapper
                            id="map"
                            name="map"
                            label="Map"
                            multiline={true}
                            rows={6}
                        />
                    </Grid> */}
                    <Grid item xs={6}>
                        <Typography>Pictures</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {/* agregar cloudinary widget */}
                        {/* <TextfieldWrapper
                            id="img"
                            name="img"
                            label="Pictures"
                            multiline={true}
                            rows={6}
                        /> */}
                    </Grid>
                    <Grid item xs={6}>
                        <ButtonWrapper>Submit form</ButtonWrapper>
                    </Grid>
                </Grid>
            </Form>
        </Formik>
    )
}
