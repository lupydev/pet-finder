import { Stack, Typography } from '@mui/material'
import React from 'react'

const Title = ({ title, desc = '', name }) => {
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
                overflow="hidden"
                ml={{xs: 3, sm: 5, md: 10}}
            >
                {desc !== '' ? (
                    <>
                        <Typography fontSize={{xs: '18px',sm: '22px', md: '25px'}} color="white" fontWeight="">
                            {title}
                        </Typography>

                        <Typography
                            fontSize={{xs: '17px',sm: '21px', md: '23px'}} 
                            color="white"
                            fontWeight="bold"
                        >
                            {desc} {name}
                        </Typography>
                    </>
                ) : (
                    <Typography fontSize="42px" color="white" fontWeight="bold">
                        {title}
                    </Typography>
                )}
                <Stack position="absolute" right={0}>
                    <img src="https://res.cloudinary.com/diyk4to11/image/upload/v1665012764/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellas_q9ukes.png" />
                </Stack>
            </Stack>
        </Stack>
    )
}

export default Title
