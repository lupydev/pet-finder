import { Stack } from '@mui/material'
import React from 'react'
import Title from '../petBrowser/Title'
import ContactForm from './ContactForm'
import { motion } from "framer-motion";

export const Contact = () => {
    return (
        <>
            <Title
                title="Contact"
                desc="Do you have any problem or query? Contact Us"
            />
            <Stack
                px={{ xs: 3, sm: 5, md: 10 }}
                mt={{ xs: '0px', md: '10px' }}
                direction={{ xs: 'column', md: 'row' }}
                width="100%"
                maxWidth="1440px"
                pb="5px"
                alignItems={{ xs: 'center', md: '' }}
                justifyContent={{ xs: '', md: 'center' }}
                gap={{ xs: '20px', sm: '40px', md: '50px' }}
            >
                <Stack
                    display={{ xs: 'flex', sm: 'none', md: 'none' }}
                    height="100%"
                    alignItems="center"
                >
                    <img
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1666225880/Frame_Logo_ContacUs_kw7haa.png"
                        width="150px"
                    />
                </Stack>
                <Stack
                    display={{ xs: 'none', sm: 'flex', md: 'none' }}
                    height="100%"
                    alignItems="center"
                >
                    <img
                        src="https://res.cloudinary.com/diyk4to11/image/upload/v1666225880/Frame_Logo_ContacUs_kw7haa.png"
                        width="230px"
                    />
                </Stack>

                <ContactForm />

                <Stack
                    display={{ xs: 'none', sm: 'none', md: 'flex' }}
                    height="100%"
                    justifyContent="center"
                >
                    <motion.div
                        whileHover={{ scale: [null, 1.1, 1.1] }}
                        transition={{ duration: 0.4 }}
                    >
                        <img
                            src="https://res.cloudinary.com/diyk4to11/image/upload/v1666225880/Frame_Logo_ContacUs_kw7haa.png"
                            width="280px"
                        />
                    </motion.div>
                </Stack>
            </Stack>

            <Stack
                height="85px"
                width={'100%'}
                sx={{
                    backgroundImage:
                        'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664932414/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellitas_icwbmh.svg)',
                    backgroundRepeat: 'repeat',
                }}
            />
        </>
    )
}

export default Contact
