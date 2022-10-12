import { Formik, Field, Form } from 'formik'
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
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
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState('')
    const { userInfo } = useSelector((state) => state.user)

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

    // useEffect(() => {
    //     if (userInfo.isLogged) {
    //         navigate('/profile')
    //         // dispatch(getUserInfo())
    //     }
    // }, [userInfo.isLogged])

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
                display="flex"
                direction="column"
                gap="20px"
                padding="10px"
                boxShadow="3"
                paddingY="35px"
            >
                <Formik
                    initialValues={initialValues}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                    enableReinitialize={true}
                    validationSchema={clientSchema}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <Stack alignItems="center" gap="20px">
                                <Stack
                                    justifyContent="flex-start"
                                    px="20px"
                                    width="100%"
                                >
                                    <label htmlFor="nickname">Nickname *</label>
                                    <Stack
                                        component={Field}
                                        type="text"
                                        placeholder="Nickname"
                                        id="nickname"
                                        name="nickname"
                                        sx={{
                                            border: ' 2px solid #BFBFBF',
                                            width: '100%',
                                            height: '50px',
                                            borderRadius: '10px',
                                            transition: 'border .3s ease',
                                            px: '20px',
                                            fontSize: '20px',
                                        }}
                                    />
                                    {errors.nickname && touched.nickname ? (
                                        <Typography
                                            color="red"
                                            fontSize="16px"
                                            mt="5px"
                                        >
                                            {errors.nickname}
                                        </Typography>
                                    ) : null}
                                </Stack>
                                <Stack
                                    justifyContent="flex-start"
                                    px="20px"
                                    width="100%"
                                >
                                    <label htmlFor="fullname">Full Name</label>
                                    <Stack
                                        component={Field}
                                        type="text"
                                        placeholder="Full Name"
                                        id="fullname"
                                        name="fullname"
                                        sx={{
                                            border: ' 2px solid #BFBFBF',
                                            width: '100%',
                                            height: '50px',
                                            borderRadius: '10px',
                                            transition: 'border .3s ease',
                                            px: '20px',
                                            fontSize: '20px',
                                        }}
                                    />
                                    {errors.fullname && touched.fullname ? (
                                        <Typography
                                            color="red"
                                            fontSize="16px"
                                            mt="5px"
                                        >
                                            {errors.fullname}
                                        </Typography>
                                    ) : null}
                                </Stack>
                                <Stack
                                    justifyContent="flex-start"
                                    px="20px"
                                    width="100%"
                                >
                                    <label htmlFor="email">Email *</label>
                                    <Stack
                                        component={Field}
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        sx={{
                                            border: ' 2px solid #BFBFBF',
                                            width: '100%',
                                            height: '50px',
                                            borderRadius: '10px',
                                            transition: 'border .3s ease',
                                            px: '20px',
                                            fontSize: '20px',
                                        }}
                                    />
                                    {errors.email && touched.email ? (
                                        <Typography
                                            color="red"
                                            fontSize="16px"
                                            mt="5px"
                                        >
                                            {errors.email}
                                        </Typography>
                                    ) : null}
                                </Stack>
                                <Stack
                                    justifyContent="flex-start"
                                    px="20px"
                                    width="100%"
                                >
                                    <label htmlFor="email">Password *</label>
                                    <Stack
                                        component={Field}
                                        type="password"
                                        placeholder="Password"
                                        id="password"
                                        name="password"
                                        sx={{
                                            border: ' 2px solid #BFBFBF',
                                            width: '100%',
                                            height: '50px',
                                            borderRadius: '10px',
                                            transition: 'border .3s ease',
                                            px: '20px',
                                            fontSize: '20px',
                                        }}
                                    />
                                    {errors.password && touched.password ? (
                                        <Typography
                                            color="red"
                                            fontSize="16px"
                                            mt="5px"
                                        >
                                            {errors.password}
                                        </Typography>
                                    ) : null}
                                </Stack>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    px="20px"
                                    width="100%"
                                    gap="10px"
                                >
                                    {loading ? (
                                        <CircularProgress />
                                    ) : (
                                        <Avatar
                                            src={image}
                                            sx={{
                                                width: '5rem',
                                                height: '5rem',
                                            }}
                                        />
                                    )}
                                    <TextField
                                        id="profilePicture"
                                        placeholder="Upload an image"
                                        type="file"
                                        name="profilePicture"
                                        onChange={(e) => handleUpload(e)}
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
                                        borderRadius: '8px',
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
