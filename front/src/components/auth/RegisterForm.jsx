import { Formik, Field, Form } from 'formik'
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Divider,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createUser } from '../../redux/asyncActions/user/createUser'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import { getUserData } from '../../redux/asyncActions/user/getUserData'
import Loading from '../loading/Loading'
import { AiFillCamera } from 'react-icons/ai'

const clientSchema = Yup.object().shape({
    nickname: Yup.string()
        .min(3, 'nickname is too short')
        .max(20, 'nickname is too long!')
        .required('This field is required'),
    fullname: Yup.string()
        .min(3, 'Full Name is too short')
        .max(25, 'Full Name is too long!'),
    email: Yup.string()
        .email('Invalid Email')
        .required('This field is required'),
    password: Yup.string()
        .min(8, 'Password is too short')
        .max(20, 'Password is too long!')
        .required('This field is required')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
})

const initialValues = {
    nickname: '',
    fullname: '',
    email: '',
    password: '',
}

const RegisterForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.user)
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState('')

    const handleUpload = async (e) => {
        try {
            const files = e.target.files
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'upload_petfinder')
            setLoading(true)
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/diyk4to11/image/upload',
                data
            )
            const file = response.data
            setImage(file.secure_url)
            setLoading(false)
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
        if (image !== '') {
            values = { ...values, img: image }
        }
        dispatch(createUser(values))
    }

    useEffect(() => {
        if (userInfo.isLogged) {
            navigate('/profile')
        }
    }, [userInfo.isLogged])

    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            width="100%"
            gap="20px"
            pt="100px"
        >
            <Stack
                direction="row"
                width="100%"
                sx={{ backgroundColor: 'primary.main' }}
                height="125px"
                gap="4px"
                alignItems="center"
                justifyContent="center"
            >
                <Stack
                    spacing={0}
                    position="relative"
                    justifyContent="center"
                    width="100%"
                    maxWidth="1440px"
                    height="125px"
                    overflow="hidden"
                    ml={10}
                >
                    <Typography fontSize="20px" color="white" fontWeight="">
                        Sign Up
                    </Typography>

                    <Typography variant="h5" color="white" fontWeight="bold">
                        Welcome On Board!
                    </Typography>

                    <Stack position="absolute" right={0}>
                        <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1665012764/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellas_q9ukes.png" />
                    </Stack>
                </Stack>
            </Stack>

            <Stack
                alignItems="center"
                justifyContent="space-between"
                mt={3}
                direction="row"
                width="100%"
            >
                <Stack width="50%" display={{ xs: 'none', md: 'flex' }}>
                    <img
                        width="100%"
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049166/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/iStock-157526441_mma0zx.jpg"
                        alt="img"
                    />
                </Stack>
                <Stack width={{ xs: '80%', md: '400px' }} margin="0 auto">
                    <Formik
                        initialValues={initialValues}
                        onSubmit={(values) => {
                            handleSubmit(values)
                        }}
                        enableReinitialize={true}
                        validationSchema={clientSchema}
                    >
                        {({
                            handleSubmit,
                            errors,
                            touched,
                            values,
                            handleChange,
                            handleBlur,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <Stack
                                    alignItems="start"
                                    gap="10px"
                                    margin={{ xs: '0 1rem', md: 'auto' }}
                                >
                                    <Typography fontSize="20px" variant="h5">
                                        <b>Sign Up</b>
                                    </Typography>
                                    <Typography
                                        fontSize="14px"
                                        color="primary.main"
                                    >
                                        Please, fill your information below
                                    </Typography>
                                    <Stack
                                        alignItems="center"
                                        width="100%"
                                        gap={2}
                                    >
                                        {loading ? (
                                            <CircularProgress />
                                        ) : (
                                            <Avatar
                                                src={image}
                                                sx={{
                                                    width: '6rem',
                                                    height: '6rem',
                                                }}
                                            />
                                        )}
                                        <Stack
                                            width="100%"
                                            bgcolor="#F0F8FF"
                                            height="4.5rem"
                                            borderRadius=".5rem"
                                        >
                                            <Stack
                                                px="5px"
                                                sx={{
                                                    width: {
                                                        xs: 'auto',
                                                        md: '50%',
                                                    },
                                                }}
                                            >
                                                <Typography
                                                    fontSize="12px"
                                                    mt="5px"
                                                >
                                                    Choose your profile picture
                                                </Typography>
                                                <Stack width="auto">
                                                    <Button
                                                        id="image"
                                                        name="image"
                                                        variant="outlined"
                                                        component="label"
                                                        size="small"
                                                        width="auto"
                                                        startIcon={
                                                            <AiFillCamera />
                                                        }
                                                        sx={{
                                                            textTransform:
                                                                'none',
                                                            mt: '10px',
                                                        }}
                                                        onChange={(e) =>
                                                            handleUpload(e)
                                                        }
                                                    >
                                                        Upload Image
                                                        <input
                                                            hidden
                                                            accept="image/*"
                                                            type="file"
                                                        />
                                                    </Button>
                                                </Stack>
                                            </Stack>
                                        </Stack>
                                        {/* <TextField
                                            id="profilePicture"
                                            placeholder="Upload an image"
                                            type="file"
                                            size="small"
                                            name="profilePicture"
                                            onChange={(e) => handleUpload(e)}
                                        /> */}
                                    </Stack>
                                    <Stack
                                        justifyContent="flex-start"
                                        width="100%"
                                    >
                                        <TextField
                                            sx={{ width: '100%' }}
                                            error={
                                                touched.nickname &&
                                                errors.nickname
                                                    ? true
                                                    : false
                                            }
                                            type="text"
                                            name="nickname"
                                            margin="dense"
                                            label="Nickname *"
                                            helperText={
                                                touched.nickname &&
                                                errors.nickname &&
                                                errors.nickname
                                            }
                                            size="small"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.nickname}
                                        />
                                    </Stack>
                                    <Stack
                                        justifyContent="flex-start"
                                        width="100%"
                                    >
                                        <TextField
                                            sx={{ width: '100%' }}
                                            error={
                                                touched.fullname &&
                                                errors.fullname
                                                    ? true
                                                    : false
                                            }
                                            type="text"
                                            name="fullname"
                                            margin="dense"
                                            label="Full Name"
                                            helperText={
                                                touched.fullname &&
                                                errors.fullname &&
                                                errors.fullname
                                            }
                                            size="small"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.fullname}
                                        />
                                    </Stack>
                                    <Stack
                                        justifyContent="flex-start"
                                        width="100%"
                                    >
                                        <TextField
                                            sx={{ width: '100%' }}
                                            error={
                                                touched.email && errors.email
                                                    ? true
                                                    : false
                                            }
                                            type="email"
                                            name="email"
                                            margin="dense"
                                            label="email"
                                            placeholder="email@example.com"
                                            helperText={
                                                touched.email &&
                                                errors.email &&
                                                errors.email
                                            }
                                            size="small"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                    </Stack>
                                    <Stack
                                        justifyContent="flex-start"
                                        width="100%"
                                    >
                                        <TextField
                                            sx={{ width: '100%' }}
                                            error={
                                                touched.password &&
                                                errors.password
                                                    ? true
                                                    : false
                                            }
                                            type="password"
                                            name="password"
                                            margin="dense"
                                            label="password"
                                            helperText={
                                                touched.password &&
                                                errors.password &&
                                                errors.password
                                            }
                                            size="small"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}
                                        />
                                    </Stack>

                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        type="submit"
                                        sx={{
                                            color: 'white',
                                            textTransform: 'none',
                                            width: '100px',
                                            fontSize: '16px',
                                            alignSelf: 'end',
                                            margin: '1rem',
                                            mr: '0',
                                        }}
                                        size="small"
                                    >
                                        Sign Up
                                    </Button>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                    <Divider sx={{ width: '100%', margin: '1rem 0' }} />
                    <Stack
                        justifyContent="center"
                        direction="row"
                        gap="10px"
                        margin="1rem 0"
                    >
                        {' '}
                        <Typography fontSize="16px">
                            Already have an account?
                        </Typography>
                        <Typography
                            component={Link}
                            to="/login"
                            fontSize="16px"
                        >
                            Login
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack
                height="100px"
                width={'100%'}
                sx={{
                    backgroundImage:
                        'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664932414/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellitas_icwbmh.svg)',
                    backgroundRepeat: 'repeat',
                }}
            ></Stack>
        </Stack>
    )
}

export default RegisterForm
