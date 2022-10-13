import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import {
    Autocomplete,
    Box,
    Chip,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    Typography,
} from '@mui/material'
import TextfieldWrapper from './Textfield/Textfield'
import SelectWrapper from './Select/Select'
import DateTimePicker from './DateTimePicker/DateTimePicker'
import gender from './Data/Gender/gender.json'
import size from './Data/Size/size.json'
import age from './Data/Age/age.json'
import color from './Data/Color/color.json'
import types from './Data/Type/types.json'
import ButtonWrapper from './Button/ButtonWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { getSpecies } from '../../redux/asyncActions/pet/getSpecies'
import { createPet } from '../../redux/asyncActions/pet/createPet'
import GMapsApi from './GMapsAutocomplete/GMapsApi'
import Swal from 'sweetalert2'
import axios from 'axios'
import { Toast } from '../../utils/swalToasts'
import UploadImages from './UploadImages/UploadImages'
import { getUserData } from '../../redux/asyncActions/user/getUserData'
import ComboBox from './SelectAutocomplete/ComboBox'

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
]

const FORM_VALIDATION = Yup.object().shape({
    name: Yup.string().max(15),
    description: Yup.string(),
    species: Yup.string().required('Required'),
    gender: Yup.string().required('Required'),
    size: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
    breed: Yup.string().required('Required'),
    age: Yup.string(),
    color: Yup.array().required('Required'),
    location: Yup.object().required('Required'),
    status: Yup.string(),
    date: Yup.date().required('Required'),
    observation: Yup.string(),
})

export const CreatePostFinal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState([])
    const { species, breeds } = useSelector((state) => state.pet)
    const [location, setLocation] = useState({})
    const now = new Date().toISOString().substring(0, 10)

    const getUserId = () => {
        const user = JSON.parse(window.localStorage.getItem('user'))
        return user.id
    }

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

    const handleDeleteImg = (elem) => {
        setImages((prevState) => prevState.filter((img) => img !== elem))
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
        color: [],
        img: [
            'https://res.cloudinary.com/diyk4to11/image/upload/v1664395969/avatar_whzrdg.webp',
        ],
        location: {},
        date: '',
        observation: '',
    }

    const handleSubmit = (values, resetForm) => {
        if (Object.entries(location).length > 0) {
            values.location = location
        } else {
            Toast.fire({
                icon: 'error',
                title: 'The location is required',
            })
            return
        }
        if (images.length) {
            values.img = images
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Must contain at least one image',
            })
            return
        }
        dispatch(createPet(values))

        resetForm()

        navigate(-1)
    }

    useEffect(() => {
        dispatch(getSpecies())
        dispatch(getUserData())
    }, [])

    return (
        <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={(values, { resetForm }) => {
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
                                Create Post
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Pictures</Typography>

                            <UploadImages
                                handleUpload={handleUpload}
                                images={images}
                                handleDeleteImg={handleDeleteImg}
                                loading={loading}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6">Pet details</Typography>
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
                                min={now}
                            />
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
                            <Autocomplete
                                id="breed"
                                name="breed"
                                options={breeds}
                                getOptionLabel={(option) => option.name}
                                onChange={(e, value) => {
                                    setFieldValue(
                                        'breed',
                                        value !== null
                                            ? value._id
                                            : INITIAL_FORM_STATE.breed
                                    )
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Breeds"
                                        id="breed"
                                        error={
                                            touched.breed && errors.breed
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

                            {/* <ComboBox
                                id="breed"
                                name="breed"
                                label="Breed"
                                options={breeds}
                                size="small"
                                disabled={!breeds.length}
                            /> */}
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

                            {/* <SelectWrapper
                                id="color"
                                name="color"
                                label="Color"
                                multiple
                                options={color}
                                size="small"
                            /> */}
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
                            <GMapsApi setLocation={setLocation} />
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
                            <ButtonWrapper>Create Post</ButtonWrapper>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    )
}
