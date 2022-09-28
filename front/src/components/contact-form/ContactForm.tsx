import {
    Box,
    Card,
    CardContent,
    Grid,
    Stack,
    TextField,
    Typography,
    Button,
    FormControl,
    TextareaAutosize,
} from '@mui/material'

import React from 'react'
import { useState } from 'react';

const initialForm = {
    name: '',
    lastname: '',
    email: '',
    comments: ''
}

const ContactForm: React.FC = () => {

    const [contactform, setContactform] = useState(initialForm)

    const handleChange = () => {}

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        alert('Thanks for your feedback!')
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
                    important to us, that's why we are very interested in your
                    feedback so that everyone feels comfortable surfing our
                    website. Feel free to leave your concerns below.
                </Typography>
            </Stack>
            <Box
                sx={{
                    width: '100%',
                    padding: '2rem',
                }}
            >
                <Card
                    sx={{
                        width: '40%',
                        margin: '0 auto',
                        boxShadow: '0px 0px 5px #555',
                    }}
                >
                    <CardContent sx={{ width: '100%', margin: '0 auto' }}>
                        <form onSubmit={handleSubmit}>
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
                                        helperText="* Required field"
                                        size="small"
                                        onChange={handleChange}
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
                                        helperText="* Required field"
                                        size="small"
                                        onChange={handleChange}
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
                                        helperText="* Required field"
                                        size="small"
                                        onChange={handleChange}
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
                                        name="comment"
                                        error={false}
                                        label="Let me know your comments"
                                        multiline
                                        rows={4}
                                        helperText="* Required field"
                                        size="small"
                                        onChange={handleChange}
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
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Box>
        </Stack>
    )
}

export default ContactForm
