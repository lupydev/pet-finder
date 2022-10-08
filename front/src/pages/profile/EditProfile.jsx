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
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Swal from 'sweetalert2'
import { putEditUser } from '../../redux/asyncActions/user/putEditUser'
import { useNavigate } from 'react-router-dom'

const clientSchema = Yup.object().shape({
    nickname: Yup.string()
        .min(3, 'nickname is too short')
        .max(20, 'nickname is too long!')
        .required('This field is required'),
    fullname: Yup.string()
        .min(3, 'Full Name is too short')
        .max(25, 'Full Name is too long!'),
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

    const dispatch = useDispatch()

    const [image, setImage] = useState(userData.img)

    const initialValues = {
        img: userData?.img,
        nickname: userData?.nickname,
        fullname: userData?.fullname,
        password: '',
    }

    const handleUploadPicture = async (e) => {
        try {
            const files = e.target.files
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'pet')
            const response = await axios.post(
                // 'https://api.cloudinary.com/v1_1/dpqihpvhd/image/upload',
                data
            )
            setImage(response)
        } catch (e) {
            console.error(e)
        }
    }

    const handleSubmitEdit = (values) => {
        const valuesUpdate = {
            ...values,
            userData: image,
        }
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(
                    putEditUser({ id: userData._id, newData: valuesUpdate })
                )
                Swal.fire('Your profile has been updated!')
                useNavigate('/profile')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    return (
        <Box>
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    handleSubmitEdit(values)
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
                                        onChange={(e) => {
                                            handleUploadPicture(e)
                                        }}
                                    />
                                </Box>
                                <label htmlFor="nickname">New Nickname *</label>
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
                                <label htmlFor="fullname">New Full Name</label>
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
                                <label htmlFor="email">New Password *</label>
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
