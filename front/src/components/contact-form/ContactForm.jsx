import {
    Button,
    FormControl,
    TextField,
    Typography,
    Alert,
} from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'
import { Toast } from '../../utils/swalToasts'
import { sendEmail } from '../../utils/sendEmail'
import { motion } from "framer-motion";

const initialForm = {
    name: '',
    lastname: '',
    email: '',
    comments: '',
}

const ContactForm = () => {
    const { petDetail } = useSelector((state) => state.pet)

    const CONTACT_FORM_VALIDATION = Yup.object().shape({
        name: Yup.string()
            .matches(
                /^[A-Za-z\s]+$/g,
                '* The name field allows only letters and blank spaces'
            )
            .required('* Name is required'),

        lastname: Yup.string()
            .matches(
                /^[A-Za-z\s]+$/g,
                '* The lastname field allows only letters and blank spaces'
            )
            .required('* Lastname is required'),

        email: Yup.string()
            .email('* Invalid Email')
            .required('* Email is required'),

        comments: Yup.string()
            .min(10, 'This comment is too short')
            .max(255, 'This comment is too long!')
            .required('* Comments is required'),
    })

    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         lastname: '',
    //         email: '',
    //         comments: '',
    //     },
    //     onSubmit: async (values, { resetForm }) => {
    //         try {
    //             const validate = await sendEmail(values)

    //             if (validate) {
    //                 Toast.fire({
    //                     icon: 'success',
    //                     title: 'Email sended successfully.',
    //                 })
    //                 resetForm()
    //             } else {
    //                 Toast.fire({
    //                     icon: 'error',
    //                     title: 'There is an error sending the message.',
    //                 })
    //             }
    //         } catch (err) {
    //             console.log(err)
    //             Toast.fire({
    //                 icon: 'error',
    //                 title: 'There is an error sending the message.',
    //             })
    //         }
    //     },
    //     validationSchema: CONTACT_FORM_VALIDATION,
    // })
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            width="100%"
            maxWidth="661px"
            gap="20px"
            sx={{ boxShadow: 24 }}
            borderRadius="10px"
            p="40px 20px 50px 20px"
        >
            <Typography
                color="#2b74b5"
                fontSize={{ xs: '11px', sm: '12px' }}
                component="div"
                fontWeight={'bold'}
                mx="auto"
                mb="15px"
            >
                Hello dear user! Welcome to the contact section of our website,
                leave us all your questions regarding the operation of our site
                and we will take care of it! Our users are very important to us,
                that&apos;s why we are very interested in your feedback so that
                everyone feels comfortable surfing our website. Feel free to
                leave your concerns below.
            </Typography>
            <Formik
                width="100%"
                initialValues={initialForm}
                validationSchema={CONTACT_FORM_VALIDATION}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        const validate = await sendEmail(values)

                        if (validate) {
                            Toast.fire({
                                icon: 'success',
                                title: 'Email sended successfully.',
                            })
                            resetForm()
                        } else {
                            Toast.fire({
                                icon: 'error',
                                title: 'There is an error sending the message.',
                            })
                        }
                    } catch (error) {
                        console.error(error)
                    }
                }}
            >
                {({
                    errors,
                    touched,
                    handleSubmit,
                    values,
                    handleChange,
                    handleBlur,
                }) => (
                    <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <FormControl sx={{ gap: '10px', width: '100%' }}>
                            <TextField
                                label="Name"
                                id="name"
                                name="name"
                                variant="outlined"
                                size="small"
                                value={values.name}
                                onChange={handleChange}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                                onBlur={handleBlur}
                                inputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{
                                    style: { fontSize: 16 },
                                }}
                            />
                            
                            <TextField
                                label="Lastname"
                                id="lastname"
                                name="lastname"
                                variant="outlined"
                                size="small"
                                value={values.lastname}
                                onChange={handleChange}
                                error={
                                    touched.lastname && Boolean(errors.lastname)
                                }
                                helperText={touched.lastname && errors.lastname}
                                onBlur={handleBlur}
                                inputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{
                                    style: { fontSize: 16 },
                                }}
                            />

                            <TextField
                                label="Email"
                                id="email"
                                name="email"
                                variant="outlined"
                                size="small"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                onBlur={handleBlur}
                                inputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{
                                    style: { fontSize: 16 },
                                }}
                            />

                            <TextField
                                id="comments"
                                name="comments"
                                multiline
                                rows={2}
                                label="Comments"
                                variant="outlined"
                                value={values.comments}
                                onChange={handleChange}
                                error={
                                    touched.comments && Boolean(errors.comments)
                                }
                                helperText={touched.comments && errors.comments}
                                onBlur={handleBlur}
                                inputProps={{ style: { fontSize: 16 } }}
                                InputLabelProps={{
                                    style: { fontSize: 16 },
                                }}
                            />

                            <motion.div whileTap={{ scale: 0.98 }}>
                            <Button
                                width="50%"
                                type="submit"
                                variant="contained"
                                color={
                                    petDetail?.type.toLowerCase() === 'lost'
                                        ? 'secondary'
                                        : 'primary'
                                }
                                sx={{
                                    alignSelf: 'flex-end',
                                    width: '50%',
                                    textTransform: 'none',
                                    borderRadius: '8px',
                                }}
                            >
                                Send
                            </Button>
                            </motion.div>
                        </FormControl>
                    </form>
                )}
            </Formik>
        </Stack>
    )
}

export default ContactForm
