import React from 'react'
import { Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Box, Typography, Button } from '@mui/material'

interface LoginUser {
    name: string
    password: string
}

interface LoginProps {}

const Login: React.FC<{}> = () => {
    const initialValues: LoginUser = {
        name: '',
        password: '',
    }

    const clientSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo!')
            .required('Este campo es obligatorio'),
        password: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo!')
            .required('Este campo es obligatorio'),
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Enviaste el formulario')
    }

    return (
        <div>
            <Typography sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                Login
            </Typography>
            <Formik
                initialValues={initialValues}
                enableReinitialize={true}
                onSubmit={handleSubmit}
                validationSchema={clientSchema}
            >
                {(errors, touched) => {
                    return (
                        <Form onSubmit={handleSubmit}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width: '100%',
                                    alignItems: 'center',
                                }}
                            >
                                <label htmlFor="name">Name</label>
                                <Field id="name" type="text" name="name" />
                                {errors.name && touched.name ? (
                                    <h1>{errors.name}</h1>
                                ) : null}
                                <label htmlFor="password">Password</label>
                                <Field
                                    id="password"
                                    type="text"
                                    name="password"
                                />
                                {errors.password && touched.password ? (
                                    <h1>{errors.password}</h1>
                                ) : null}
                                <Button
                                    sx={{
                                        backgroundColor: 'green',
                                        color: 'black',
                                        marginTop: '1rem',
                                    }}
                                    type="submit"
                                >
                                    Submit
                                </Button>
                            </Box>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default Login
