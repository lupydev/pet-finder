import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import {
    Autocomplete,
    Box,
    Chip,
    CircularProgress,
    FormControl,
    Grid,
    IconButton,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    TextField,
    Typography,
} from '@mui/material'
import TextfieldWrapper from '../../components/formPost/Textfield/Textfield'
import SelectWrapper from '../../components/formPost/Select/Select'
import DateTimePicker from '../../components/formPost/DateTimePicker/DateTimePicker'
import gender from '../../components/formPost/Data/Gender/gender.json'
import breed from '../../components/formPost/Data/Breed/breed.json'
import size from '../../components/formPost/Data/Size/size.json'
import age from '../../components/formPost/Data/Age/age.json'
import color from '../../components/formPost/Data/Color/color.json'
import types from '../../components/formPost/Data/Type/types.json'
import ButtonWrapper from '../../components/formPost/Button/ButtonWrapper'
import GMapsApi from '../../components/formPost/GMapsAutocomplete/GMapsApi'
import { TiDeleteOutline } from 'react-icons/ti'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Toast } from '../../utils/swalToasts'
import UploadImages from '../../components/formPost/UploadImages/UploadImages'
import { useDispatch, useSelector } from 'react-redux'
import { editPet } from '../../redux/asyncActions/pet/editPet'
import { getSpecies } from '../../redux/asyncActions/pet/getSpecies'
import { useNavigate } from 'react-router-dom'
import { getBreeds } from '../../redux/asyncActions/pet/getBreeds'
import { current } from '@reduxjs/toolkit'

const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().max(15),
    description: Yup.string(),
    species: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    size: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    breed: Yup.string().required('Required'),
    age: Yup.string(),
    //color: Yup.string().required('Required'),
    location: Yup.object().required('Required'),
    status: Yup.string(),
    date: Yup.date().required('Required'),
    observation: Yup.string(),
})

// eslint-disable-next-line react/prop-types
const PetEdit = ({ currentPet }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { species, breeds } = useSelector((state) => state.pet)
    const [species2, setEspecie2] = useState(currentPet?.species._id)
    const [breeds2, setBreeds2] = useState(currentPet?.breed._id)
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState(currentPet?.img)
    const [location, setLocation] = useState({})

    const getUserId = () => {
        const user = JSON.parse(window.localStorage.getItem('user'))
        return user.id
    }

    let INITIAL_FORM_STATE = {
        name: currentPet?.name,
        userId: getUserId(),
        description: currentPet?.description,
        species: species2,
        gender: currentPet?.gender,
        size: currentPet?.size,
        type: currentPet?.type,
        breed: currentPet.breed.name,
        age: currentPet?.age,
        color: currentPet?.color,
        img: images,
        location: currentPet.location,
        date: new Date(currentPet.date).toISOString().substring(0, 10),
        observation: '',
    }

    useEffect(() => {
        dispatch(getSpecies())
    }, [])

    useEffect(() => {
        dispatch(getBreeds(species2))
    }, [species2])

    const handleUpload = async (e) => {
        try {
            const files = e.target.files
            for (let img of files) {
                const formData = new FormData()
                formData.append('file', files[0])
                formData.append('upload_preset', 'upload_petfinder')
                setLoading(true)
                const { data } = await axios.post(
                    'https://api.cloudinary.com/v1_1/diyk4to11/image/upload',
                    formData
                )
                const file = data.secure_url
                setImages((prevState) => [...prevState, file])
                setLoading(false)
            }
        } catch (error) {
            console.log(error)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Upload failed. Please, try again',
            })
        }
    }

    const handleOnChange = (e) => {
        setEspecie2(e.target.value)
    }

    const handleSubmit = (values, resetForm) => {
        values.img = images
        values.breed = breeds2
        console.log(values)

        // if (Object.entries(location).length > 0) {
        //     values.location = location
        // } else {
        //     Toast.fire({
        //         icon: 'error',
        //         title: 'The location is required',
        //     })
        //     return
        // }

        // if (images.length) {
        //     values.img = images
        // } else {
        //     Toast.fire({
        //         icon: 'error',
        //         title: 'Must contain at least one image',
        //     })
        //     return
        // }

        const valuesUpdate = {
            ...values,
            img: images,
        }

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: 'Do not save',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(editPet({ id: currentPet._id, newData: valuesUpdate }))
                Swal.fire('Your Pet has been updated!').then(() =>
                    // navigate(`/lostPets/${currentPet._id}`)
                    navigate('/profile')
                )
                navigate('/profile')
                // navigate(`/lostPets/${currentPet._id}`)
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })

        resetForm()
    }

    const handleDeleteImg = (elem) => {
        setImages((prevState) => prevState.filter((img) => img !== elem))
    }

    return (
        species && (
            <div>
                <Formik
                    initialValues={{ ...INITIAL_FORM_STATE }}
                    validationSchema={FORM_VALIDATION}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values)
                        handleSubmit(values, resetForm)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        setFieldValue,
                        handleChange,
                        handleBlur,
                    }) => (
                        <Form>
                            <Grid
                                container
                                spacing={2}
                                columns={6}
                                margin={3}
                                maxWidth={800}
                            >
                                <Grid item xs={6}>
                                    <Typography
                                        variant="h3"
                                        color="primary.main"
                                        fontFamily={'Merriweather'}
                                        fontWeight="bold"
                                        textAlign="center"
                                    >
                                        Edit Post
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6">
                                        Pictures
                                    </Typography>

                                    <UploadImages
                                        handleUpload={handleUpload}
                                        images={images}
                                        handleDeleteImg={handleDeleteImg}
                                        loading={loading}
                                        onChange={(e) =>
                                            setImages(e.target.value)
                                        }
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="h6">
                                        Pet details
                                    </Typography>
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
                                    <DateTimePicker
                                        id="date"
                                        name="date"
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <TextField
                                        fullWidth
                                        select
                                        id="species"
                                        name="species"
                                        label="Specie"
                                        size="small"
                                        value={species2}
                                        onChange={handleOnChange}
                                    >
                                        {species.map((option) => (
                                            <MenuItem
                                                key={option._id}
                                                value={option._id}
                                            >
                                                {option.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={2}>
                                    <Autocomplete
                                        id="breed"
                                        name="breed"
                                        options={breeds}
                                        defaultValue={{
                                            _id: `${currentPet.breed._id}`,
                                            name: `${currentPet.breed.name}`,
                                        }}
                                        getOptionLabel={(option) => option.name}
                                        onChange={(e, value) => {
                                            setBreeds2(value._id)
                                        }}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Breeds"
                                                id="breed"
                                                error={
                                                    touched.breed &&
                                                    errors.breed
                                                        ? true
                                                        : false
                                                }
                                                helperText={
                                                    touched.breed &&
                                                    errors.breed &&
                                                    errors.breed
                                                }
                                            />
                                        )}
                                        disableClearable
                                        disabled={!breeds.length}
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
                                    <FormControl fullWidth size="small">
                                        <InputLabel>Color</InputLabel>
                                        <Select
                                            id="color"
                                            name="color"
                                            label="color"
                                            value={values.color}
                                            multiple
                                            onChange={handleChange}
                                            input={
                                                <OutlinedInput
                                                    id="select-multiple-chip"
                                                    label="Color"
                                                />
                                            }
                                            renderValue={(selected) => (
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        gap: 0.5,
                                                    }}
                                                >
                                                    {selected.map((value) => (
                                                        <Chip
                                                            key={value}
                                                            label={value}
                                                        />
                                                    ))}
                                                </Box>
                                            )}
                                        >
                                            {color.map((color) => (
                                                <MenuItem
                                                    key={color._id}
                                                    value={color.name}
                                                >
                                                    {color.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
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
                                    <GMapsApi
                                        setLocation={setLocation}
                                        value={currentPet.location.country}
                                    />
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
                                <Grid item xs={6}>
                                    <ButtonWrapper>Save Changes</ButtonWrapper>
                                </Grid>
                            </Grid>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    )
}

export default PetEdit
