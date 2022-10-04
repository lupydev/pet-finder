import { Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Typography, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const Login = () => {
    const { loginUser } = useAuth()

    const clientSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Name is too short')
            .max(20, 'Name is too long!')
            .required('This field is required'),
        password: Yup.string()
            .min(3, 'Password is too short')
            .max(20, 'Password is too long!')
            .required('This field is required'),
    })

    const handleSubmit = (values) => {
        loginUser(values)
    }

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
                color="primary.main"
                fontFamily={'Merriweather'}
                fontWeight="bold"
            >
                Login
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
                    }}
                    onSubmit={handleSubmit}
                    enableReinitialize={true}
                    validationSchema={clientSchema}
                >
                    {({ errors, touched, handleSubmit }) => {
                        return (
                            <Form onSubmit={handleSubmit}>
                                <Stack alignItems="center" gap="20px">
                                    <Stack
                                        display="flex"
                                        justifyContent="flex-start"
                                    >
                                        <label htmlFor="name">Name</label>
                                        <Stack
                                            component={Field}
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="Name"
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

                                    <Stack>
                                        <label htmlFor="password">
                                            Password
                                        </label>

                                        <Stack
                                            component={Field}
                                            id="password"
                                            type="password"
                                            name="password"
                                            placeholder="Password"
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
                                        Login
                                    </Button>
                                </Stack>
                            </Form>
                        )
                    }}
                </Formik>

                <Stack justifyContent="center" direction="row" gap="10px">
                    {' '}
                    <Typography fontSize="16px">
                        Don't have an account?
                    </Typography>
                    <Typography component={Link} to="/signin" fontSize="16px">
                        Sign Up
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Login
