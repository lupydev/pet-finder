import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import {
    Box,
    CircularProgress,
    Grid,
    IconButton,
    Paper,
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
    location: Yup.object().required('Required'),
    status: Yup.string(),
    date: Yup.date().required('Required'),
    observation: Yup.string(),
})

const PetEdit = ({ currentPet }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { species } = useSelector((state) => state.pet)

    useEffect(() => {
        dispatch(getSpecies())
    }, [])

    const [loading, setLoading] = useState(false)
    const [images, setImages] = useState(currentPet.img)
    const [location, setLocation] = useState({})

    const INITIAL_FORM_STATE = {
        name: currentPet?.name,
        description: currentPet?.description,
        species: currentPet?.species,
        gender: currentPet?.gender,
        size: currentPet?.size,
        type: currentPet?.type,
        breed: currentPet?.breed,
        age: currentPet?.age,
        color: currentPet?.color,
        img: [currentPet.img],
        location: currentPet?.location,
        date: currentPet?.date,
        observation: currentPet?.observation,
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

    const handleSubmit = (values) => {
        console.log(values)
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
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(editPet({ id: currentPet._id, newData: valuesUpdate }))
                Swal.fire('Your profile has been updated!')
                Swal.fire('Your profile has been updated!').then(() =>
                    window.location.reload()
                )
                navigate('/profile')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    const handleDeleteImg = (elem) => {
        setImages((prevState) => prevState.filter((img) => img !== elem))
    }

    return (
        <div>
            <Formik
                initialValues={{ ...INITIAL_FORM_STATE }}
                validationSchema={FORM_VALIDATION}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                <Form>
                    <Grid
                        container
                        spacing={2}
                        columns={6}
                        margin={3}
                        width={800}
                    >
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
                            <DateTimePicker
                                id="date"
                                name="date"
                                size="small"
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

                        <Grid item xs={3}>
                            <SelectWrapper
                                id="type"
                                name="type"
                                label="Type"
                                options={types}
                                size="small"
                            />
                        </Grid>
                        {/* Gmaps Api */}
                        <Grid item xs={3}>
                            <GMapsApi
                                setLocation={setLocation}
                                name="location"
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
                        <UploadImages
                            handleUpload={handleUpload}
                            handleDeleteImg={handleDeleteImg}
                            images={images}
                            loading={loading}
                        />

                        <Grid item xs={6}>
                            <ButtonWrapper>Save Changes</ButtonWrapper>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
        </div>
    )
}

export default PetEdit
