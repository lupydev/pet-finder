import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { Box, Button, Stack, Typography } from '@mui/material'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    const clientSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name is too short')
            .max(20, 'Name is too long!')
            .required('This field is required'),
        email: Yup.string()
            .email('Invalid Email')
            .required('This field is required'),
        password: Yup.string()
            .min(3, 'Password is too short')
            .max(20, 'Password is too long!')
            .required('This field is required'),
    })

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
                width="400px"
                borderRadius="20px"
                display="flex"
                direction="column"
                gap="20px"
                padding="10px"
                boxShadow="3"
                paddingY="35px"
            >
                <Formik
                    initialValues={{
                        name: '',
                        password: '',
                        email: '',
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                    enableReinitialize={true}
                    validationSchema={clientSchema}
                >
                    {({ handleSubmit, errors, touched }) => (
                        <Form onSubmit={handleSubmit}>
                            <Stack alignItems="center" gap="20px">
                                <Stack
                                    display="flex"
                                    justifyContent="flex-start"
                                >
                                    <label htmlFor="name">Name</label>
                                    <Stack
                                        component={Field}
                                        type="text"
                                        placeholder="Name"
                                        id="name"
                                        name="name"
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
                                    {errors.name && touched.name ? (
                                        <Typography
                                            color="red"
                                            fontSize="16px"
                                            mt="5px"
                                        >
                                            {errors.name}
                                        </Typography>
                                    ) : null}
                                </Stack>
                                <Stack
                                    display="flex"
                                    justifyContent="flex-start"
                                >
                                    <label htmlFor="email">Email</label>
                                    <Stack
                                        component={Field}
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        name="email"
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
                                    display="flex"
                                    justifyContent="flex-start"
                                >
                                    <label htmlFor="email">Password</label>
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
