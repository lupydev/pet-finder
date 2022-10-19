import { Stack } from '@mui/material'
import React from 'react'
import PetCardsContainer from './PetCardsContainer'

const PetsContainer = () => {
    return (
        <Stack gap={5} maxWidth="1440px" width="100%">
            <PetCardsContainer title="Lost" color="secondary" />
            <Stack
                height="100px"
                width={'100%'}
                sx={{
                    backgroundImage:
                        'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664324514/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint-line_tjw4x6.svg)',
                    backgroundRepeat: 'repeat',
                }}
            ></Stack>
            <PetCardsContainer title="Found" color="primary" />
        </Stack>
    )
}

export default PetsContainer
