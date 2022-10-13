import { Alert, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { styled } from '@mui/material/styles'

const NewsletterEmailTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#fff',
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#ccc',
        },
        '&:hover fieldset': {
            borderColor: '#fff',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#fff',
        },
    },
})

// eslint-disable-next-line react/prop-types
const NewsletterForm = ({ onSubmitted, status, message }) => {
    const [email, setEmail] = useState('')

    const handleSubmit = (event) => {
        console.log('entro')
        onSubmitted({ EMAIL: email })
        event.preventDefault()
    }
    console.log(status, message)

    console.log(email)
    return (
        <form onSubmit={handleSubmit}>
            <Stack direction="row" alignItems="center" gap="22px">
                <NewsletterEmailTextField
                    sx={{
                        width: '50%',
                        backgroundColor: 'primary.light',
                        borderRadius: '5px',
                    }}
                    id="newsletterEmail"
                    label="Email"
                    variant="outlined"
                    //type="email"
                    onChange={(event) => setEmail(event.target.value)}
                />

                <Button
                    variant="contained"
                    sx={{
                        color: 'primary.main',
                        textTransform: 'none',
                        backgroundColor: 'white',
                        padding: '1rem',
                        px: '40px',
                        height: '56px',
                        '&:hover': {
                            backgroundColor: 'secondary.light',
                        },
                    }}
                    type="submit"
                >
                    Suscribe
                </Button>
            </Stack>
            <Stack marginTop={1}>
                {status === 'sending' && (
                    <Alert severity="info">Sending...</Alert>
                )}
                {status === 'error' && (
                    <Alert severity="error">{message}</Alert>
                )}
                {status === 'success' && (
                    <Alert severity="success">Subscribed</Alert>
                )}
            </Stack>
        </form>
    )
}

export default NewsletterForm
