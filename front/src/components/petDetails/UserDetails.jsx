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

import Loading from '../loading/Loading'
import { FacebookShareButton } from 'react-share'
import DocumentMeta from 'react-document-meta'
import { IoMdShareAlt } from 'react-icons/io'
import { AiFillFacebook } from 'react-icons/ai'
import { sendEmail } from '../../utils/sendEmail'
import { motion } from 'framer-motion'

const url = window.location

const meta = {
    title: 'Help me to find my Home',
    description:
        'I am a lost Pet that wanna come home, help me sharing this link to find my family',
    canonical:
        'https://petfinder-phi.vercel.app/lostPets/63494bf4223d4335fbdb1c8c',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'pet, find, lost, dog,cat,petfinder',
        },
        image: 'https://res.cloudinary.com/diyk4to11/image/upload/v1665747788/upload_petfinder/xx6gchaqhxmqiltmsonv.jpg',
    },
}

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
        phone: yup.number().typeError('Only numbers'),
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
        onSubmit: async (values, { resetForm }) => {
            try {
                const validate = await sendEmail(values)

                if (validate) {
                    Toast.fire({
                        icon: 'success',
                        title: 'Email sended successfully.',
                    })
                    setOpen(false)
                    resetForm()
                } else {
                    Toast.fire({
                        icon: 'error',
                        title: 'There is an error sending the message.',
                    })
                }
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
            justifyContent="center"
            width={{ xs: '100%', sm: '50%', md: '400px' }}
            p="15px"
            sx={{
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                borderRadius: '5px',
            }}
            gap="10px"
        >
            {petDetail != undefined ? (
                <Stack
                    direction="row"
                    width="100%"
                    border="solid 3px"
                    borderRadius="10px"
                    sx={{
                        borderColor:
                            petDetail?.type === 'Lost'
                                ? 'secondary.main'
                                : 'primary.main',
                    }}
                    gap="10px"
                    alignItems="center"
                    justifyContent="center"
                    p="10px"
                >
                    <Stack
                        width={{ md: '40%', xs: '100%' }}
                        alignItems="center"
                    >
                        <Avatar
                            src={petDetail?.userId?.img}
                            sx={{
                                width: { xs: 80, sm: 95, md: 110 },
                                height: { xs: 80, sm: 95, md: 110 },
                            }}
                        />
                    </Stack>
                    <Stack width={{ md: '60%', xs: '100%' }}>
                        <Typography
                            fontSize={{ xs: '20px', sm: '25px' }}
                            component="div"
                            fontWeight={'bold'}
                            mx={{ xs: '0', md: 'auto' }}
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
                    }}
                    onClick={handleOpen}
                >
                    <motion.div
                        whileHover={{ scale: [null, 1.05, 1.05] }}
                        transition={{ duration: 0.4 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Contact
                    </motion.div>
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
                    }}
                    onClick={() => navigate('/login')}
                >
                    <motion.div
                        whileHover={{ scale: [null, 1.05, 1.05] }}
                        transition={{ duration: 0.4 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Log in to contact this user
                    </motion.div>
                </Button>
            )}
            <Stack
                width="100%"
                height="3px"
                backgroundColor={
                    petDetail?.type === 'Lost'
                        ? 'secondary.light'
                        : 'primary.light'
                }
            />
            <DocumentMeta {...meta}>
                <Button
                    component={FacebookShareButton}
                    variant="contained"
                    style={{
                        textTransform: 'none',
                        backgroundColor: '#357ABD',
                        color: 'white',
                        padding: '10px 0px',
                        width: '70%',
                        fontSize: '14px',
                        fontWeight: 'bold',
                        margin: '0 auto',
                    }}
                    startIcon={<AiFillFacebook color="white" />}
                    url={url.href}
                    quote="Help this Pet come home"
                    hashtag="PetFinder"
                    resetButtonStyle
                >
                    Share on Facebook
                </Button>
            </DocumentMeta>
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
                                        <motion.div
                                            whileHover={{
                                                scale: [null, 1.05, 1.05],
                                            }}
                                            transition={{ duration: 0.4 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Send
                                        </motion.div>
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
