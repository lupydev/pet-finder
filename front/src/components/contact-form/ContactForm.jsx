import { useState, React } from 'react'
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
import emailjs from '@emailjs/browser'
import * as Yup from 'yup'

const initialForm = {
    name: '',
    lastname: '',
    email: '',
    comments: '',
}

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

const ContactForm = () => {
    const [submittedForm, setSubmitedform] = useState('')

    const sendEmail = (values, resetForm) => {
        try {
            emailjs
                .send(
                    import.meta.env.VITE_APP_SERVICE_ID,
                    import.meta.env.VITE_APP_TEMPLATE_CONTACT_FORM_ID,
                    values,
                    import.meta.env.VITE_APP_USER_ID
                )
                .then(() => {
                    setSubmitedform('success')
                    setTimeout(() => {
                        setSubmitedform('')
                    }, 2500)
                    resetForm()
                })
        } catch (error) {
            setSubmitedform('error')
            setTimeout(() => {
                setSubmitedform('')
            }, 2500)
        }
    }

    return (
        <Stack
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <Stack
                sx={{
                    alignItems: 'center',
                    width: '50%',
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ padding: '1rem', color: '#357ABD' }}
                >
                    Contact Form
                </Typography>

                <Typography
                    component={'span'}
                    variant="body1"
                    sx={{
                        margin: '0 auto',
                        width: '100%',
                        textAlign: 'justify',
                    }}
                >
                    Hello dear user! welcome to the contact section of our
                    website, leave us all your questions regarding the operation
                    of our site and we will take care of it! Our users are very
                    important to us, that&apos;s why we are very interested in
                    your feedback so that everyone feels comfortable surfing our
                    website. Feel free to leave your concerns below.
                </Typography>
            </Stack>
            <Box sx={{ width: '100%', padding: '2rem' }}>
                <Card
                    sx={{
                        width: '40%',
                        margin: '0 auto',
                        borderRadius: '20px',
                        boxShadow: '3',
                    }}
                >
                    <CardContent sx={{ width: '100%', margin: '0 auto' }}>
                        <Formik
                            initialValues={initialForm}
                            validationSchema={CONTACT_FORM_VALIDATION}
                            onSubmit={(values, { resetForm }) => {
                                sendEmail(values, resetForm)
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
                                                error={
                                                    touched.name && errors.name
                                                        ? true
                                                        : false
                                                }
                                                type="text"
                                                name="name"
                                                margin="dense"
                                                label="Name:"
                                                helperText={
                                                    touched.name &&
                                                    errors.name &&
                                                    errors.name
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
                                                error={
                                                    touched.lastname &&
                                                    errors.lastname
                                                        ? true
                                                        : false
                                                }
                                                type="text"
                                                name="lastname"
                                                margin="dense"
                                                label="Lastname:"
                                                helperText={
                                                    touched.lastname &&
                                                    errors.lastname &&
                                                    errors.lastname
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
                                                error={
                                                    touched.email &&
                                                    errors.email
                                                        ? true
                                                        : false
                                                }
                                                type="email"
                                                name="email"
                                                margin="dense"
                                                label="Email:"
                                                helperText={
                                                    touched.email &&
                                                    errors.email &&
                                                    errors.email
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
                                                error={
                                                    touched.comments &&
                                                    errors.comments
                                                        ? true
                                                        : false
                                                }
                                                label="Let me know your comments"
                                                multiline
                                                rows={4}
                                                helperText={
                                                    touched.comments &&
                                                    errors.comments &&
                                                    errors.comments
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

                                            {submittedForm === 'success' && (
                                                <Alert
                                                    sx={{ margin: '1rem 0' }}
                                                    variant="filled"
                                                    severity="success"
                                                >
                                                    Thanks for your feedback!
                                                </Alert>
                                            )}
                                            {submittedForm === 'error' && (
                                                <Alert
                                                    sx={{ margin: '1rem 0' }}
                                                    variant="filled"
                                                    severity="error"
                                                >
                                                    Oops! An error occurred and
                                                    we were unable to submit the
                                                    form.
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
