import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

const MessagesCard = () => {
    return (
        <Stack width="100%" alignItems="center" gap={5} sx={{opacity:'.5'}}>
            <Typography variant="h5" fontWeight="bold">
                Under Construction
            </Typography>

            <img
                src="https://res.cloudinary.com/diyk4to11/image/upload/v1665907586/Bulding.small_matott.png"
                width="80%"
            />
        </Stack>
    )
}

export default MessagesCard
