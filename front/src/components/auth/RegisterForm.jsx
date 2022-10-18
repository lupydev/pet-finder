import { Formik, Field, Form } from 'formik'
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
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
            dispatch(getUserData())
            navigate('/profile')
        }
    }, [userInfo.isLogged])

    return (
        <Stack
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                gap: '20px',
            }}
        >
            <Typography
                variant="h3"
                color="secondary"
                fontFamily={'Merriweather'}
                fontWeight="bold"
            >
                Register
            </Typography>
            <Stack
                width="500px"
                borderRadius="20px"
                gap="20px"
                padding="30px"
                boxShadow="3"
            >
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
                            <Stack alignItems="center" gap="20px">
                                <Stack alignItems="center" width="100%" gap={2}>
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
                                    <TextField
                                        id="profilePicture"
                                        placeholder="Upload an image"
                                        type="file"
                                        size="small"
                                        name="profilePicture"
                                        onChange={(e) => handleUpload(e)}
                                    />
                                </Stack>
                                <Stack justifyContent="flex-start" width="100%">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        error={
                                            touched.nickname && errors.nickname
                                                ? true
                                                : false
                                        }
                                        type="text"
                                        name="nickname"
                                        margin="dense"
                                        label="nickname"
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
                                <Stack justifyContent="flex-start" width="100%">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        error={
                                            touched.fullname && errors.fullname
                                                ? true
                                                : false
                                        }
                                        type="text"
                                        name="fullname"
                                        margin="dense"
                                        label="fullname"
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
                                <Stack justifyContent="flex-start" width="100%">
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
                                        label="Email"
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
                                <Stack justifyContent="flex-start" width="100%">
                                    <TextField
                                        sx={{ width: '100%' }}
                                        error={
                                            touched.password && errors.password
                                                ? true
                                                : false
                                        }
                                        type="password"
                                        name="password"
                                        margin="dense"
                                        label="Password"
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
                                        mt: '10px',
                                        color: 'white',
                                        textTransform: 'none',
                                        width: '100px',
                                        fontSize: '16px',
                                    }}
                                    size="small"
                                >
                                    Sign Up
                                </Button>
                            </Stack>
                        </Form>
                    )}
                </Formik>
                <Stack justifyContent="center" direction="row" gap="10px">
                    {' '}
                    <Typography fontSize="16px">
                        Already have an account?
                    </Typography>
                    <Typography component={Link} to="/login" fontSize="16px">
                        Login
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default RegisterForm
