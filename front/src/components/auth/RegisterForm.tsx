import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import { Box, Button, Typography } from '@mui/material'

interface Values {
    name: string
    password: string
    email: string
}

const RegisterForm: React.FC = () => {
    const [newUser, setNewUser] = useState([])

    console.log(newUser)

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
            >
                {({ handleSubmit }) => (
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
                            <label htmlFor="email">Email</label>
                            <Field
                                type="text"
                                placeholder="Email"
                                id="email"
                                name="email"
                            />
                            <label htmlFor="email">Password</label>
                            <Field
                                type="password"
                                placeholder="Password"
                                id="password"
                                name="password"
                            />
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
