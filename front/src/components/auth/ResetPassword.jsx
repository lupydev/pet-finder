import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Typography, Button, Stack, TextField } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import React from 'react'
import { forgotPassword } from '../../redux/asyncActions/user/forgotPassword'
import { useEffect } from 'react'

const passwordSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email')
        .required('This field is required'),
})

const ResetPassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (email) => {
        dispatch(forgotPassword(email))
        navigate('/')
    }


    return (
        <Stack
            justifyContent="center"
            alignItems="center"
            width="100%"
            gap="20px"
            pt='100px'
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
                        Welcome
                    </Typography>

                    <Typography variant="h5" color="white" fontWeight="bold">
                        Reset your Password!
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
            >
                <Stack width="50%" display={{ xs: 'none', md: 'flex' }}>
                    <img
                        width="100%"
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049166/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/iStock-157526441_mma0zx.jpg"
                        alt="img"
                    />
                </Stack>
                <Stack width={{ xs: '100%', md: '400px' }} margin="0 auto">
                    <Formik
                        initialValues={{
                            email: '',
                        }}
                        onSubmit={(values) => handleSubmit(values)}
                        enableReinitialize={true}
                        validationSchema={passwordSchema}
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
                                    <Stack alignItems="start" gap="10px">
                                        <Typography
                                            fontSize="20px"
                                            variant="h5"
                                        >
                                            <b>Reset Password</b>
                                        </Typography>
                                        <Typography
                                            fontSize="14px"
                                            color="primary.main"
                                        >
                                            Please fill the information bellow
                                        </Typography>
                                        <Stack width="100%">
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
                                                label="email"
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

                                        <Button
                                            variant="contained"
                                            type="submit"
                                            sx={{
                                                mt: '10px',
                                                color: 'white',
                                                textTransform: 'none',
                                                fontSize: '16px',
                                                width: '100%',
                                            }}
                                            size="small"
                                        >
                                            Send Email
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
                            did you remember your password?
                        </Typography>
                        <Typography
                            component={Link}
                            to="/login"
                            fontSize="16px"
                        >
                            Log In
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

export default ResetPassword
