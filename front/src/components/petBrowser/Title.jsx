import { Stack, Typography } from '@mui/material'
import React from 'react'

const Title = (props) => {
  return (
    <Stack direction='row' width='100%' sx={{ backgroundColor: 'primary.main'}} height='125px' pl={10} gap="4px">
        <Stack justifyContent='center' width='100%' maxWidth='1440px' sx={{ backgroundColor: 'primary.main', }} height='125px' >
          <Typography
              fontSize='20px'
              color='white'
              fontFamily='sans-serif'
              fontWeight=""
          >
              {props.title} Pets
          </Typography>

          <Typography
              variant="h5"
              color='white'
              fontFamily='sans-serif'
              fontWeight="bold"
          >
              Here you can find your Pet.
          </Typography>
        </Stack>
        <img
          width='40%'
          src="https://res.cloudinary.com/diyk4to11/image/upload/v1665012764/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellas_q9ukes.png"
          
        />
    </Stack>
  )
}

export default Title