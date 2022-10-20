import { Stack } from '@mui/material';
import React from 'react'
import Contact from '../../components/contact-form/Contact'

export const ContactUs = () => {
  return (
    <Stack  alignItems='center' width={'100%'} gap="25px" pt='100px'>
        <Contact />
    </Stack>
    
  )
}

export default ContactUs;