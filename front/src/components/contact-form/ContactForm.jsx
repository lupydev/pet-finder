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
            // !/^[a-zA-ZÀ-ÿ\s]{1,40}$/,
            /^[A-Za-z\s]+$/g,
            '* The lastname field allows only letters and blank spaces'
        )
        .required('* Lastname is required'),

    email: Yup.string().email('*Invalid Email').required('* Email is required'),

    comments: Yup.string()
        .matches(
            /^[A-Za-z0-9\s]+$/g,
            '* The comments field allows only letters, numbers and blank spaces'
        )
        .required('* Comments is required'),
})

const ContactForm = () => {
    const [submittedForm, setSubmitedform] = useState(false)
    

    const sendEmail = (e) => {
  
        e.preventDefault()
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                e.target,
                process.env.REACT_APP_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text)
                    alert('Form send!')
                },
                (error) => {
                    console.log(error.text)
                    alert('Form not send!')
                }
            )
    }

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
                        boxShadow: '0px 0px 5px #555',
                    }}
                >
                    <CardContent sx={{ width: '100%', margin: '0 auto' }}>
                        <Formik
                            initialValues={initialForm}
                            validationSchema={CONTACT_FORM_VALIDATION}
                            onSubmit={(values, { resetForm }) => {
                                sendEmail()
                                resetForm()
                                setSubmitedform(true)

                                setTimeout(() => {
                                    setSubmitedform(false)
                                }, 2000)
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
