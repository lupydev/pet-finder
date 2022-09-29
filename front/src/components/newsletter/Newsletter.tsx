import { Box, Stack, TextField, Typography, Button } from '@mui/material'
import { height, width } from '@mui/system'
import React from 'react'
import { alpha, styled } from '@mui/material/styles'

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

// const NewsletterSuscribeButton = styled(Button)({

//     '& .MuiButton-hover': {

//         '&:hover button': {
//             backgroundColor: '#fff',
//         },

//     },
// })

const Newsletter = () => {
    return (
        <Box sx={{ backgroundColor: '#3981BF', height: '50vh' }}>
            <Box sx={{ display: 'flex' }}>
                <Stack
                    color="secondary.light"
                    sx={{ padding: '0 5rem', justifyContent: 'center' }}
                >
                    <h2>Newsletter</h2>
                    <Typography sx={{ paddingBottom: '2rem' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptatibus mollitia explicabo accusantium nulla. Quas,
                        blanditiis nostrum. Vel ducimus id laudantium labore
                        iste nulla voluptates ipsum? Porro beatae architecto
                        aliquam dolore.
                    </Typography>

                    <Stack direction='row' alignItems='center' gap='22px'>
                        <NewsletterEmailTextField
                            sx={{
                                width: '50%',
                                backgroundColor: 'primary.light',
                                borderRadius: '5px',
                            }}
                            id="newsletterEmail"
                            label="Email"
                            variant="outlined"
                            type="email"
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
                                '&:hover': {backgroundColor:'secondary.light'},
                            }}
                        >
                            Suscribe
                        </Button>
                        {/* <NewsletterSuscribeButton
                            sx={{
                                color: '#3981BF',
                                backgroundColor: '#fff',
                                padding: '1rem',
                                margin: '1rem 0 0 1rem',
                                height: '2rem',
                                
                            }}

                        >
                            Suscribe
                        </NewsletterSuscribeButton> */}
                    </Stack>
                </Stack>
                <img
                    style={{
                        width: '100%',
                        height: '50vh',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/iStock-1333195606_yldfxa.jpg"
                    alt="NewsletterImage"
                />
            </Box>
        </Box>

        // <Stack sx={{ backgroundColor: '#3981BF' }}>
        //     <Stack sx={newsletterStyles}>
        //         <Box>
        //             <h2>Newsletter</h2>
        //             <p>
        //                 Lorem ipsum dolor sit amet consectetur adipisicing elit.
        //                 Magnam non doloribus facere molestiae eaque vero tempora
        //                 voluptatibus error voluptatem? Perferendis perspiciatis
        //                 mollitia aut maiores, impedit ab quam voluptas quia
        //                 distinctio.
        //             </p>
        //             <TextField
        //                 id="newsletterEmail"
        //                 label="Email:"
        //                 variant="outlined"
        //                 type="email"
        //             />
        //         </Box>
        //         <Box>
        //             <img
        //                 style={{ width: '50%', height: '100%' }}
        //                 src="https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/iStock-1333195606_yldfxa.jpg"
        //                 alt="NewsletterImage"
        //             />
        //         </Box>
        //     </Stack>
        // </Stack>
    )
}

export default Newsletter
