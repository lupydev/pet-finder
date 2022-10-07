import { Formik, Field, Form } from 'formik'
import {
    Avatar,
    Box,
    Button,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import * as Yup from 'yup'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const clientSchema = Yup.object().shape({
    nickname: Yup.string()
        .min(3, 'nickname is too short')
        .max(20, 'nickname is too long!')
        .required('This field is required'),
    fullname: Yup.string()
        .min(3, 'Full Name is too short')
        .max(25, 'Full Name is too long!'),
    email: Yup.string()
        .email('Invalid Email')
        .required('This field is required'),
    password: Yup.string()
        .min(8, 'Password is too short')
        .max(20, 'Password is too long!')
        .required('This field is required')
        .matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            'Password must contain at least 8 characters, one uppercase, one number and one special case character'
        ),
})

const EditProfile = () => {
    const { userData } = useSelector((state) => state.user)

    useEffect(() => {
        console.log(userData)
    }, [userData])

    const initialValues = {
        img: userData?.img,
        nickname: userData?.nickname,
        fullname: userData?.fullname,
        email: userData?.email,
        password: userData?.password,
    }

    // const handleSubmitEdit = (values) => {
    //     console.log(values)
    // }

    return (
        <Box>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    // handleSubmitEdit(values)
                    console.log('estas editando')
                }}
                enableReinitialize={true}
                validationSchema={clientSchema}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Stack alignItems="center" gap="20px">
                            <Stack
                                justifyContent="flex-start"
                                px="20px"
                                width="100%"
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: 200,
                                            height: 200,
                                            marginBottom: '20px',
                                        }}
                                        src={userData?.img}
                                        alt={userData?.nickname}
                                    />
                                    <TextField
                                        id="profilePicture"
                                        placeholder="Select image"
                                        type="file"
                                        name="profilePicture"
                                        onChange={() => {
                                            console.log('cambiar imagen')
                                        }}
                                    />
                                </Box>
                                <label htmlFor="nickname">Nickname *</label>
                                <Stack
                                    component={Field}
                                    type="text"
                                    placeholder="Nickname"
                                    id="nickname"
                                    name="nickname"
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
                                {errors.nickname && touched.nickname ? (
                                    <Typography
                                        color="red"
                                        fontSize="16px"
                                        mt="5px"
                                    >
                                        {errors.nickname}
                                    </Typography>
                                ) : null}
                            </Stack>
                            <Stack
                                justifyContent="flex-start"
                                px="20px"
                                width="100%"
                            >
                                <label htmlFor="fullname">Full Name</label>
                                <Stack
                                    component={Field}
                                    type="text"
                                    placeholder="Full Name"
                                    id="fullname"
                                    name="fullname"
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
                                {errors.fullname && touched.fullname ? (
                                    <Typography
                                        color="red"
                                        fontSize="16px"
                                        mt="5px"
                                    >
                                        {errors.fullname}
                                    </Typography>
                                ) : null}
                            </Stack>
                            <Stack
                                justifyContent="flex-start"
                                px="20px"
                                width="100%"
                            >
                                <label htmlFor="email">Email *</label>
                                <Stack
                                    component={Field}
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Email"
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
                                justifyContent="flex-start"
                                px="20px"
                                width="100%"
                            >
                                <label htmlFor="email">Password *</label>
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
                                    width: '150px',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                }}
                                size="small"
                            >
                                Confirm Edit
                            </Button>
                        </Stack>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}

export default EditProfile
