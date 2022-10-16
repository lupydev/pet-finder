import { Formik, Field, Form } from 'formik'
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
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
import { AiFillCamera } from 'react-icons/ai'

const validationSchema = Yup.object().shape({
    nickname: Yup.string()
        .min(3, 'nickname is too short')
        .max(20, 'nickname is too long!')
        .required('This field is required'),
    fullname: Yup.string()
        .min(3, 'Full Name is too short')
        .max(25, 'Full Name is too long!'),
})

const EditProfile = ({ userData, setEdit }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(userData.img)

    const initialValues = {
        img: userData?.img,
        nickname: userData?.nickname,
        fullname: userData?.fullname,
    }

    const handleCancelEdit = (resetForm) => {
        setEdit(false)
        resetForm()
    }

    const handleUploadPicture = async (e) => {
        try {
            const files = e.target.files
            const data = new FormData()
            data.append('file', files[0])
            data.append('upload_preset', 'upload_petfinder')

            setLoading(true)
            const response = await axios.post(
                'https://api.cloudinary.com/v1_1/diyk4to11/image/upload',
                data
            )
            const file = response.data
            setImage(file.secure_url)
            setLoading(false)
        } catch (e) {
            console.error(e)
        }
    }

    const handleSubmitEdit = (values, resetForm) => {
        const valuesUpdate = {
            ...values,
            img: image,
        }
        dispatch(putEditUser({ id: userData._id, newData: valuesUpdate }))
        handleCancelEdit(resetForm)
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values, {resetForm}) => {
                handleSubmitEdit(values, resetForm)
            }}
            validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                resetForm,
                handleChange,
                handleBlur,
            }) => (
                <Form>
                    <Stack width="100%" gap="30px">
                        <Stack
                            width="100%"
                            alignItems="flex-start"
                            gap={1}
                            bgcolor="#F0F8FF"
                        >
                            <Typography
                                fontWeight="bold"
                                sx={{ opacity: '.5' }}
                            >
                                Change profile picture
                            </Typography>
                            {loading ? (
                                <CircularProgress />
                            ) : (
                                <Avatar
                                    sx={{
                                        width: 100,
                                        height: 100,
                                        marginBottom: '20px',
                                    }}
                                    src={image}
                                    alt={userData?.nickname}
                                />
                            )}

                            <Button
                                id="profilePicture"
                                name="profilePicture"
                                variant="outlined"
                                component="label"
                                size="small"
                                startIcon={<AiFillCamera />}
                                sx={{ textTransform: 'none' }}
                                onChange={(e) => {
                                    handleUploadPicture(e)
                                }}
                            >
                                Upload Image
                                <input hidden accept="image/*" type="file" />
                            </Button>
                        </Stack>
                        <Stack
                            direction="row"
                            gap="40px"
                            alignItems={'baseline'}
                        >
                            <Typography
                                fontWeight="bold"
                                sx={{ opacity: '.5' }}
                                width="20%"
                            >
                                New Nickname *
                            </Typography>

                            <TextField
                                id="nickname"
                                name="nickname"
                                size="small"
                                value={values.nickname}
                                onChange={handleChange}
                                error={
                                    touched.nickname && Boolean(errors.nickname)
                                }
                                helperText={
                                    touched.nickname ? errors.nickname : ' '
                                }
                                onBlur={handleBlur}
                            ></TextField>
                        </Stack>
                        <Stack
                            direction="row"
                            gap="40px"
                            alignItems={'baseline'}
                        >
                            <Typography
                                fontWeight="bold"
                                width="20%"
                                sx={{ opacity: '.5' }}
                            >
                                New Full Name
                            </Typography>

                            <TextField
                                id="fullname"
                                name="fullname"
                                size="small"
                                value={values.fullname}
                                onChange={handleChange}
                                error={
                                    touched.fullname && Boolean(errors.fullname)
                                }
                                helperText={
                                    touched.fullname ? errors.fullname : ' '
                                }
                                onBlur={handleBlur}
                            ></TextField>
                        </Stack>
                        <Stack direction="row" gap="40px">
                            <Typography
                                fontWeight="bold"
                                width="20%"
                                sx={{ opacity: '.5' }}
                            >
                                New About You
                            </Typography>
                            <TextField
                                id="aboutYou"
                                name="aboutYou"
                                size="small"
                                disabled
                                multiline
                                rows={3}
                            ></TextField>
                        </Stack>
                        <Stack
                            direction="row"
                            gap="40px"
                            alignItems={'baseline'}
                        >
                            <Typography
                                fontWeight="bold"
                                width="20%"
                                sx={{ opacity: '.5' }}
                            >
                                Country
                            </Typography>
                            <TextField
                                disabled
                                id="country"
                                name="country"
                                size="small"
                            ></TextField>
                        </Stack>
                        <Stack
                            direction="row"
                            justifyContent="center"
                            gap="40px"
                        >
                            <Button
                                variant="contained"
                                color="success"
                                type="submit"
                                mb="45px"
                                sx={{
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
                            <Button
                                variant="contained"
                                color="primary"
                                mb="45px"
                                sx={{
                                    color: 'white',
                                    textTransform: 'none',
                                    width: '150px',
                                    borderRadius: '8px',
                                    fontSize: '16px',
                                }}
                                size="small"
                                onClick={() => handleCancelEdit(resetForm)}
                            >
                                Cancel
                            </Button>
                        </Stack>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}

export default EditProfile
