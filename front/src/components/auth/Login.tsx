import { useState } from 'react'
import { Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Box, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

interface Values {
    name: string
    password: string
}

interface LoginProps {}

const Login: React.FC = () => {
    const [user, setUser] = useState('')

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

    return (
        <>
            <Typography sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                Login
            </Typography>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                }}
                onSubmit={(values: Values) => {
                    console.log(values)
                }}
                enableReinitialize={true}
                validationSchema={clientSchema}
            >
                {({ errors, touched, handleSubmit }) => {
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
                                    type="password"
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
                                    Login
                                </Button>
                            </Box>
                        </Form>
                    )
                }}
            </Formik>
            <Link to="/signin">Register</Link>
        </>
    )
}

export default Login
