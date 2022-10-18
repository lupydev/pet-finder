import {
    Avatar,
    Button,
    FormControl,
    Modal,
    TextField,
    Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import { Toast } from '../../utils/swalToasts'
import emailjs from '@emailjs/browser'
import Loading from '../loading/Loading'

const UserDetails = () => {
    const navigate = useNavigate()
    const { petDetail } = useSelector((state) => state.pet)
    const { userInfo, userData } = useSelector((state) => state.user)
    const [open, setOpen] = useState(false)

    const validationSchema = yup.object({
        name: yup
            .string()
            .matches(/^[A-Za-z\s]+$/g, '* Letters only')
            .required('Name is required.'),
        email: yup
            .string()
            .email('Enter a valid email.')
            .required('Email is required.'),
        phone: yup
            .number()
            .typeError('Only numbers')
            .required('Phone is required.'),
        message: yup
            .string()
            .required('Please enter a message.')
            .max(255, 'Message is too long.'),
    })

    const formik = useFormik({
        initialValues: {
            name: userData !== undefined ? userData.fullname : '',
            email: userData !== undefined ? userData.email : '',
            phone: '',
            message: '',
        },
        onSubmit: (values, { resetForm }) => {
            try {
                const allValues = {
                    ...values,
                    emailTo: petDetail?.userId?.email,
                }
                emailjs
                    .send(
                        import.meta.env.VITE_APP_SERVICE_ID,
                        import.meta.env.VITE_APP_TEMPLATE_CONTACT_USER_ID,
                        allValues,
                        import.meta.env.VITE_APP_USER_ID
                    )
                    .then(() => {
                        Toast.fire({
                            icon: 'success',
                            title: 'Email sended successfully.',
                        })
                        setOpen(false)
                        resetForm()
                    })
            } catch (err) {
                console.log(err)
                Toast.fire({
                    icon: 'error',
                    title: 'There is an error sending the message.',
                })
            }
        },
        validationSchema: validationSchema,
    })

    const handleOpen = () => setOpen(true)
    const handleClose = () => {
        setOpen(false)
    }

    useEffect(() => {
        const { resetForm } = formik
        resetForm()
    }, [open])

    return (
        <Stack
            justifyContent="space-evenly"
            width={{ xs: '100%', sm: '50%', md: '400px' }}
            height={{ xs: '200px', sm: '290px' }}
            p={{ xs: '0px 15px 15px 15px', sm: '15px' }}
            sx={{
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '5px',
            }}
        >
            {petDetail != undefined ? (
                <Stack
                    direction="row"
                    width="100%"
                    height={{ xs: '110px', sm: '150px' }}
                    border="solid 3px"
                    borderColor={
                        petDetail?.type.toLowerCase() === 'lost'
                            ? 'secondary'
                            : 'primary'
                    }
                    sx={{
                        borderColor:
                            petDetail?.type.toLowerCase() === 'lost'
                                ? 'secondary.main'
                                : 'primary.main',
                    }}
                    borderRadius="10px"
                    gap="10px"
                    alignItems="center"
                >
                    <Avatar
                        src={petDetail?.userId?.img}
                        sx={{
                            width: { xs: 80, sm: 95, md: 110 },
                            height: { xs: 80, sm: 95, md: 110 },
                            ml: { xs: '30px', sm: '20px' },
                        }}
                    />
                    <Stack width="100%">
                        <Typography
                            fontSize={{ xs: '20px', sm: '25px' }}
                            component="div"
                            fontWeight={'bold'}
                            mx="auto"
                            color={
                                petDetail?.type.toLowerCase() === 'lost'
                                    ? 'secondary'
                                    : 'primary'
                            }
                        >
                            {petDetail?.userId?.fullname}
                        </Typography>
                    </Stack>
                </Stack>
            ) : (
                <Stack alignItems="center">
                    <Loading />
                </Stack>
            )}
            {userInfo.isLogged ? (
                <Button
                    variant="contained"
                    color={
                        petDetail?.type.toLowerCase() === 'lost'
                            ? 'secondary'
                            : 'primary'
                    }
                    sx={{
                        textTransform: 'none',
                        borderRadius: '8px',
                        mx: '10px',
                    }}
                    onClick={handleOpen}
                >
                    Contact
                </Button>
            ) : (
                <Button
                    variant="contained"
                    color={
                        petDetail?.type.toLowerCase() === 'lost'
                            ? 'secondary'
                            : 'primary'
                    }
                    sx={{
                        textTransform: 'none',
                        borderRadius: '8px',
                        mx: '10px',
                    }}
                    onClick={() => navigate('/login')}
                >
                    Log in to contact this user
                </Button>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack
                    alignItems="center"
                    justifyContent="center"
                    gap="20px"
                    sx={{
                        backgroundImage:
                            'url(https://res.cloudinary.com/diyk4to11/image/upload/v1665698751/Imagenes%20Dise%C3%B1o%20UX/Logo/fondo_vhobkl.png)',
                        borderRadius: '20px',
                        backgroundColor: '#eff5ff',

                        width: '410px',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: 24,
                        p: 6,
                    }}
                >
                    <img
                        height="58px"
                        width="80px"
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1664207629/Imagenes%20Dise%C3%B1o%20UX/Logo/Pet_qcvo4b.png"
                    />
                    <Typography
                        fontSize="20px"
                        component="div"
                        fontWeight={'bold'}
                        mx="auto"
                        color={
                            petDetail?.type.toLowerCase() === 'lost'
                                ? 'secondary'
                                : 'primary'
                        }
                    >
                        Contact {petDetail?.userId?.nickname}
                    </Typography>
                    <Formik>
                        {({ errors, touched }) => (
                            <form onSubmit={formik.handleSubmit}>
                                <FormControl sx={{ gap: '3px' }}>
                                    <TextField
                                        label="Name"
                                        id="name"
                                        name="name"
                                        variant="outlined"
                                        size="small"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.name &&
                                            Boolean(formik.errors.name)
                                        }
                                        helperText={
                                            formik.touched.name &&
                                            formik.errors.name
                                        }
                                        onBlur={formik.handleBlur}
                                        inputProps={{ style: { fontSize: 16 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 16 },
                                        }}
                                    />
                                    {formik.errors.name &&
                                    formik.touched.name ? (
                                        <Typography>{errors.name}</Typography>
                                    ) : (
                                        <Typography
                                            sx={{ opacity: 0 }}
                                            fontSize="18px"
                                        >
                                            .
                                        </Typography>
                                    )}
                                    <TextField
                                        label="Email"
                                        id="email"
                                        name="email"
                                        variant="outlined"
                                        size="small"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.email &&
                                            Boolean(formik.errors.email)
                                        }
                                        helperText={
                                            formik.touched.email &&
                                            formik.errors.email
                                        }
                                        onBlur={formik.handleBlur}
                                        inputProps={{ style: { fontSize: 16 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 16 },
                                        }}
                                    />
                                    {formik.errors.email &&
                                    formik.touched.email ? (
                                        <Typography>{errors.email}</Typography>
                                    ) : (
                                        <Typography
                                            sx={{ opacity: 0 }}
                                            fontSize="18px"
                                        >
                                            .
                                        </Typography>
                                    )}
                                    <TextField
                                        label="Phone"
                                        id="phone"
                                        name="phone"
                                        variant="outlined"
                                        size="small"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.phone &&
                                            Boolean(formik.errors.phone)
                                        }
                                        helperText={
                                            formik.touched.phone &&
                                            formik.errors.phone
                                        }
                                        onBlur={formik.handleBlur}
                                        inputProps={{ style: { fontSize: 16 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 16 },
                                        }}
                                    />
                                    {formik.errors.phone &&
                                    formik.touched.phone ? (
                                        <Typography>{errors.phone}</Typography>
                                    ) : (
                                        <Typography
                                            sx={{ opacity: 0 }}
                                            fontSize="18px"
                                        >
                                            .
                                        </Typography>
                                    )}
                                    <TextField
                                        id="message"
                                        name="message"
                                        multiline
                                        rows={2}
                                        label="Message"
                                        variant="outlined"
                                        value={formik.values.message}
                                        onChange={formik.handleChange}
                                        error={
                                            formik.touched.message &&
                                            Boolean(formik.errors.message)
                                        }
                                        helperText={
                                            formik.touched.message &&
                                            formik.errors.message
                                        }
                                        onBlur={formik.handleBlur}
                                        inputProps={{ style: { fontSize: 16 } }}
                                        InputLabelProps={{
                                            style: { fontSize: 16 },
                                        }}
                                    />
                                    {formik.errors.message &&
                                    formik.touched.message ? (
                                        <Typography>
                                            {errors.message}
                                        </Typography>
                                    ) : (
                                        <Typography
                                            sx={{ opacity: 0 }}
                                            fontSize="17px"
                                        >
                                            .
                                        </Typography>
                                    )}
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color={
                                            petDetail?.type.toLowerCase() ===
                                            'lost'
                                                ? 'secondary'
                                                : 'primary'
                                        }
                                        sx={{
                                            px: '90px',
                                            textTransform: 'none',
                                            borderRadius: '8px',
                                        }}
                                    >
                                        Send
                                    </Button>
                                </FormControl>
                            </form>
                        )}
                    </Formik>
                </Stack>
            </Modal>
        </Stack>
    )
}

export default UserDetails
