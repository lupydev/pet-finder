import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { Autocomplete, Grid, TextField, Typography } from '@mui/material'
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

const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
        label: 'The Lord of the Rings: The Return of the King',
        year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
        label: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
    },
    {
        label: 'Star Wars: Episode V - The Empire Strikes Back',
        year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
        label: 'The Lord of the Rings: The Two Towers',
        year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
        label: 'Star Wars: Episode IV - A New Hope',
        year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
        label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
        year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
        label: 'Star Wars: Episode VI - Return of the Jedi',
        year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
        label: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
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
    color: Yup.string().required('Required'),
    location: Yup.object().required('Required'),
    status: Yup.string(),
    date: Yup.date().required('Required'),
    observation: Yup.string(),
})

export const CreatePostFinal = () => {
    const dispatch = useDispatch()
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
        color: '',
        img: [
            'https://res.cloudinary.com/diyk4to11/image/upload/v1664395969/avatar_whzrdg.webp',
        ],
        location: {},
        date: '',
        observation: '',
    }

    const handleSubmit = (values, resetForm) => {
        if (!Object.entries(location)) {
            console.log(location, 'location')
            return
        } else {
            values.location = location
        }
        if (images !== '') {
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
