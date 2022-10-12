import { Stack, Typography } from '@mui/material'
import React from 'react'

const Title = (props) => {
    return (
        <Stack
            direction="row"
            width="100%"
            sx={{ backgroundColor: 'primary.main' }}
            height="125px"
            gap="4px"
            alignItems="center"
            justifyContent="center"
        >
            <Stack
            spacing={0}
                position="relative"
                justifyContent="center"
                width="100%"
                maxWidth="1440px"
                height="125px"
                overflow='hidden'
            >
                <Typography fontSize="20px" color="white" fontWeight="">
                    {props.title} Pets
                </Typography>

                <Typography variant="h5" color="white" fontWeight="bold">
                    Here you can find your Pet.
                </Typography>
                <Stack position="absolute" right={0}>
                    <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1665012764/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellas_q9ukes.png" />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Title
