import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Typography, Button, Stack, TextField } from '@mui/material'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { forgotPassword } from '../../redux/asyncActions/user/forgotPassword'
import { resetPassword } from '../../redux/asyncActions/user/resetPassword'

const passwordSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Password is too short')
        .required('This field is required')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('This field is required'),
})

const ForgotPassword = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { status } = useSelector((state) => state.user)

    const { token } = useParams()

    const handleSubmit = (values) => {
        const { password } = values
        dispatch(resetPassword({password: password, token: token}))
    }

    useEffect(() => {
     
        status==='success' && navigate('/login')

    }, [status])
    

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
                            password: '',
                            passwordConfirmation: '',
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
                                                    touched.password &&
                                                    errors.password
                                                        ? true
                                                        : false
                                                }
                                                type="password"
                                                name="password"
                                                margin="dense"
                                                label="New Password"
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
                                        <Stack width="100%">
                                            <TextField
                                                sx={{ width: '100%' }}
                                                error={
                                                    touched.passwordConfirmation &&
                                                    errors.passwordConfirmation
                                                        ? true
                                                        : false
                                                }
                                                type="password"
                                                name="passwordConfirmation"
                                                margin="dense"
                                                label="Repeat your new password"
                                                helperText={
                                                    touched.passwordConfirmation &&
                                                    errors.passwordConfirmation &&
                                                    errors.passwordConfirmation
                                                }
                                                size="small"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={
                                                    values.passwordConfirmation
                                                }
                                            />
                                        </Stack>

                                        <Button
                                            variant="contained"
                                            type="submit"
                                            sx={{
                                                mt: '10px',
                                                color: 'white',
                                                textTransform: 'none',
                                                width: '200px',
                                                fontSize: '16px',
                                                alignSelf: 'end',
                                            }}
                                            size="small"
                                        >
                                            Confirm Password
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

export default ForgotPassword
