import { Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Typography, Button, Stack, Divider } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { login } from '../../redux/asyncActions/user/login'
import { GoogleLogin } from 'react-google-login'
import { FcGoogle } from 'react-icons/fc'
import { BsGoogle } from 'react-icons/bs'
import { Toast } from '../../utils/swalToasts'

const CLLIENT_ID = import.meta.env.VITE_APP_GOOGLE_CLIENT_ID

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
    const { userInfo, status } = useSelector((state) => state.user)

    const onLoginSuccess = (googleData) => {
        console.log(googleData.profileObj)
    }
    const onLoginFailure = (res) => {
        console.log('Login failed:', res.error)
    }

    const handleSubmit = (values) => {
        dispatch(login(values))
    }

    useEffect(() => {
        if (userInfo.isLogged) {
            navigate('/user')
            // dispatch(getUserInfo())
        }
    }, [userInfo.isLogged])

    // useEffect(() => {
    //     status === 'success' && (
    //         <Snack isOpen={true} msg={status} />
    //     )
    // }, [status])

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
                alignItems="center"
            >
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={(values) => handleSubmit(values)}
                    enableReinitialize={true}
                    validationSchema={clientSchema}
                >
                    {({ errors, touched, handleSubmit }) => {
                        return (
                            <Form onSubmit={handleSubmit}>
                                <Stack alignItems="center" gap="20px">
                                    <Stack>
                                        <label htmlFor="email">Email</label>
                                        <Stack
                                            component={Field}
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="email"
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
                    <Typography fontSize="16px">
                        Don't have an account?
                    </Typography>
                    <Typography component={Link} to="/signin" fontSize="16px">
                        Sign Up
                    </Typography>
                </Stack>

                <Divider sx={{ width: '100%' }} />

                <GoogleLogin
                    clientId={CLLIENT_ID}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    render={(renderProps) => (
                        <Button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            startIcon={<FcGoogle />}
                            // startIcon={<BsGoogle />}
                            variant="outlined"
                            disableElevation
                            sx={{
                                textTransform: 'none',
                                width: '90%',
                                borderRadius: '8px',
                            }}
                        >
                            Log in with Google
                        </Button>
                    )}
                />
            </Stack>
        </Stack>
    )
}

export default Login
