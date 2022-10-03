import React from 'react'
import {
    Box,
    Card,
    CardContent,
    Grid,
    Stack,
    TextField,
    Typography,
    Button,
    Alert,
} from '@mui/material'
import { Formik, Form } from 'formik'
import { useState } from 'react'

const initialForm = {
    name: '',
    lastname: '',
    email: '',
    comments: '',
}

const ContactForm = () => {
    const [submittedForm, setSubmitedform] = useState(false)

    return (
        <Stack
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                backgroundColor: '#fcf8f8',
            }}
        >
            <Stack
                sx={{
                    alignItems: 'center',
                    width: '50%',
                }}
            >
                <Typography variant="h4" sx={{ padding: '1rem' }}>
                    Contact Form
                </Typography>

                <Typography
                    sx={{
                        margin: '0 auto',
                        width: '100%',
                        textAlign: 'justify',
                    }}
                >
                    Hello dear user! welcome to the contact section of our
                    website, leave us all your questions regarding the operation
                    of our site and we will take care of it! Our users are very
                    important to us, that's why we are very interested in your
                    feedback so that everyone feels comfortable surfing our
                    website. Feel free to leave your concerns below.
                </Typography>
            </Stack>
            <Box sx={{ width: '100%', padding: '2rem' }}>
                <Card
                    sx={{
                        width: '40%',
                        margin: '0 auto',
                        boxShadow: '0px 0px 5px #555',
                    }}
                >
                    <CardContent sx={{ width: '100%', margin: '0 auto' }}>
                        <Formik
                            initialValues={initialForm}
                            onSubmit={(values, { resetForm }) => {
                                resetForm()
                                setSubmitedform(true)

                                setTimeout(() => {
                                    setSubmitedform(false)
                                }, 1500)
                            }}
                            validate={(values) => {
                                let contactFormErrors = {}

                                // Name validation
                                if (!values.name) {
                                    contactFormErrors.name =
                                        '* Name field is required'
                                } else if (
                                    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)
                                ) {
                                    contactFormErrors.name =
                                        '* The name field allows only letters and blank spaces'
                                }

                                // Lastname validation
                                if (!values.lastname) {
                                    contactFormErrors.lastname =
                                        '* Lastname is required'
                                } else if (
                                    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
                                        values.lastname
                                    )
                                ) {
                                    contactFormErrors.lastname =
                                        '* The lastname field allows only letters and blank spaces'
                                }

                                // Email validation
                                if (!values.email) {
                                    contactFormErrors.email =
                                        '* Email is required'
                                } else if (
                                    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                                        values.email
                                    )
                                ) {
                                    contactFormErrors.email =
                                        '* The e-mail field allows only letters, numbers, periods, hyphens and underscores.'
                                }

                                // Comments validation
                                if (!values.comments) {
                                    contactFormErrors.comments =
                                        '* comments is required'
                                } else if (
                                    !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(
                                        values.comments
                                    )
                                ) {
                                    contactFormErrors.comments =
                                        '* The comments field allows only letters and blank spaces'
                                }
                                return contactFormErrors
                            }}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                            }) => (
                                <Form>
                                    {/* {console.log(errors)} */}
                                    <Grid
                                        container
                                        direction="row"
                                        spacing={2}
                                        justifyContent="center"
                                    >
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            lg={12}
                                            xl={12}
                                        >
                                            <TextField
                                                sx={{ width: '100%' }}
                                                error={false}
                                                type="text"
                                                name="name"
                                                margin="dense"
                                                label="Name:"
                                                helperText={
                                                    touched.name &&
                                                    errors.name && (
                                                        <Box
                                                            sx={{
                                                                color: '#dc3545',
                                                                fontWeight:
                                                                    'bold',
                                                            }}
                                                        >
                                                            {errors.name}
                                                        </Box>
                                                    )
                                                }
                                                size="small"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            lg={12}
                                            xl={12}
                                        >
                                            <TextField
                                                sx={{ width: '100%' }}
                                                error={false}
                                                type="text"
                                                name="lastname"
                                                margin="dense"
                                                label="Lastname:"
                                                helperText={
                                                    touched.lastname &&
                                                    errors.lastname && (
                                                        <Box
                                                            sx={{
                                                                color: '#dc3545',
                                                                fontWeight:
                                                                    'bold',
                                                            }}
                                                        >
                                                            {errors.lastname}
                                                        </Box>
                                                    )
                                                }
                                                size="small"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.lastname}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            lg={12}
                                            xl={12}
                                        >
                                            <TextField
                                                sx={{ width: '100%' }}
                                                error={false}
                                                type="email"
                                                name="email"
                                                margin="dense"
                                                label="Email:"
                                                helperText={
                                                    touched.email &&
                                                    errors.email && (
                                                        <Box
                                                            sx={{
                                                                color: '#dc3545',
                                                                fontWeight:
                                                                    'bold',
                                                            }}
                                                        >
                                                            {errors.email}
                                                        </Box>
                                                    )
                                                }
                                                size="small"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            lg={12}
                                            xl={12}
                                        >
                                            <TextField
                                                sx={{ width: '100%' }}
                                                id="outlined-multiline-static"
                                                name="comments"
                                                error={false}
                                                label="Let me know your comments"
                                                multiline
                                                rows={4}
                                                helperText={
                                                    touched.comments &&
                                                    errors.comments && (
                                                        <Box
                                                            sx={{
                                                                color: '#dc3545',
                                                                fontWeight:
                                                                    'bold',
                                                            }}
                                                        >
                                                            {errors.comments}
                                                        </Box>
                                                    )
                                                }
                                                size="small"
                                                onBlur={handleBlur}
                                                onChange={handleChange}
                                                value={values.comments}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={12}
                                            sm={12}
                                            md={12}
                                            lg={12}
                                            xl={12}
                                        >
                                            <Button
                                                sx={{ width: '100%' }}
                                                type="submit"
                                                variant="contained"
                                                size="small"
                                            >
                                                Enviar 🚀
                                            </Button>
                                            {submittedForm && (
                                                <Alert
                                                    sx={{ margin: '1rem 0' }}
                                                    variant="filled"
                                                    severity="success"
                                                >
                                                    Thanks for your feedback!
                                                </Alert>
                                            )}
                                        </Grid>
                                    </Grid>
                                </Form>
                            )}
                        </Formik>
                    </CardContent>
                </Card>
            </Box>
        </Stack>
    )
}

export default ContactForm
