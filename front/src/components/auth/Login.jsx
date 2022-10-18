import { Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import {
    Typography,
    Button,
    Stack,
    Divider,
    TextField,
    Grid,
    Box,
} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { login } from '../../redux/asyncActions/user/login'
import { GoogleLogin } from '@react-oauth/google'
import { loginGoogle } from '../../redux/asyncActions/user/loginGoogle'
import { getUserData } from '../../redux/asyncActions/user/getUserData'

const clientSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('This field is required'),
    password: Yup.string()
        .min(8, 'Password is too short')
        .required('This field is required')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
})

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useSelector((state) => state.user)

    const onLoginSuccess = (googleData) => {
        dispatch(loginGoogle(googleData))
    }

    const handleSubmit = (values) => {
        dispatch(login(values))
    }

    // useEffect(() => {
    //     if (userInfo.isLogged) {
    //         navigate('/')
    //         dispatch(getUserData())
    //     }
    // }, [userInfo.isLogged])

    // useEffect(() => {
    //     if (userInfo.isLogged) {
    //         navigate('/profile')
    //     }
    // }, [userInfo.isLogged])

    return (
        <Stack
        justifyContent= 'center'
        alignItems= 'center'
        width= '100%'
        gap= '20px'
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
                        Log In
                    </Typography>

                    <Typography variant="h5" color="white" fontWeight="bold">
                        Welcome Back!
                    </Typography>

                    <Stack position="absolute" right={0}>
                        <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1665012764/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellas_q9ukes.png" />
                    </Stack>
                </Stack>
            </Stack>

            <Stack alignItems="center" justifyContent='space-between' mt={3} direction='row'>
                <Stack width='50%' display={{ xs: 'none', md: 'flex' }}>
                    <img
                        width="100%"
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049166/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/iStock-157526441_mma0zx.jpg"
                        alt="img"
                    />
                </Stack>
                <Stack width={{xs:'100%', md:'400px'}} margin='0 auto'>
                    <Formik
                        initialValues={{
                            email: '',
                            password: '',
                        }}
                        onSubmit={(values) => handleSubmit(values)}
                        enableReinitialize={true}
                        validationSchema={clientSchema}
                    >
                        {({
                            errors,
                            values,
                            touched,
                            handleSubmit,
                            handleChange,
                            handleBlur,
                        }) => {
                            return (
                                <Form onSubmit={handleSubmit}>
                                    <Stack alignItems="start" gap="20px">
                                        <Typography
                                            fontSize="20px"
                                            variant="h5"
                                        >
                                            Log In
                                        </Typography>
                                        <Typography
                                            fontSize="14px"
                                            color="primary.main"
                                        >
                                            Please fill your information bellow
                                        </Typography>
                                        <Stack width='100%'>
                                            <TextField
                                                sx={{ width: '100%' }}
                                                error={
                                                    touched.email &&
                                                    errors.email
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

                                        <Stack width='100%'>
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
                                            type="submit"
                                            sx={{
                                                mt: '10px',
                                                color: 'white',
                                                textTransform: 'none',
                                                width: '100px',
                                                fontSize: '16px',
                                                alignSelf: 'end',
                                            }}
                                            size="small"
                                        >
                                            Login
                                        </Button>
                                    </Stack>
                                </Form>
                            )
                        }}
                    </Formik>
                    <Stack
                        justifyContent="center"
                        direction="row"
                        gap="10px"
                        margin="1rem 0"
                    >
                        <Typography fontSize="16px">
                            Don&apos;t have an account?
                        </Typography>
                        <Typography
                            component={Link}
                            to="/signin"
                            fontSize="16px"
                        >
                            Sign Up
                        </Typography>
                    </Stack>
                    <Divider sx={{ width: '100%', margin: '1rem 0' }} />
                    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                            onLoginSuccess(credentialResponse)
                        }}
                        onError={() => {
                            console.log('Login Failed')
                        }}
                    />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Login
