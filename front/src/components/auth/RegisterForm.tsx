import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { Box, Button, Typography } from '@mui/material'
import * as Yup from 'yup'

interface Values {
    name: string
    password: string
    email: string
}

const RegisterForm: React.FC = () => {
    const [newUser, setNewUser] = useState([])

    const clientSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo!')
            .required('Este campo es obligatorio'),
        email: Yup.string()
            .email('El email no es valido')
            .required('Este campo es obligatorio'),
        password: Yup.string()
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo!')
            .required('Este campo es obligatorio'),
    })

    return (
        <>
            <Typography sx={{ textAlign: 'center', marginBottom: '2rem' }}>
                Register
            </Typography>
            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    email: '',
                }}
                onSubmit={(values: Values) => {
                    console.log(values)
                }}
                enableReinitialize={true}
                validationSchema={clientSchema}
            >
                {({ handleSubmit, errors, touched }) => (
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
                            <Field
                                type="text"
                                placeholder="Name"
                                id="name"
                                name="name"
                            />
                            {errors.name && touched.name ? (
                                <h1>{errors.name}</h1>
                            ) : null}
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                            />
                            {errors.email && touched.email ? (
                                <h1>{errors.email}</h1>
                            ) : null}
                            <label htmlFor="email">Password</label>
                            <Field
                                type="password"
                                placeholder="Password"
                                id="password"
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
                                Send Form
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
        </>
    )
}

export default RegisterForm
