import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import PetCarousel from './PetCarousel'
import UserDetails from './UserDetails'

const PetUserContainer = (props) => {

    return (
        <Stack
            width="100%"
            px={{ xs: 2, sm: 5, md: 10 }}
            gap="30px"
            marginTop="20px"
        >
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                width="100%"
                justifyContent="space-evenly"
                alignItems="center"
                gap={{ xs: '0px', sm: '15px' }}
            >
                <PetCarousel />
                <UserDetails />
            </Stack>

            <Stack direction="row" width="100%">
                <Stack
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        width: '100%',
                    }}
                >
                    <Typography
                        fontSize="18px"
                        component="div"
                        m="0"
                        fontWeight="bold"
                    >
                        Description:
                    </Typography>
                    <Typography
                        fontSize="16px"
                        component="div"
                        m="0"
                        sx={{ textIndent: '100px', textAlign: 'justify' }}
                    >
                        {props.description}
                    </Typography>
                    
                </Stack>
            </Stack>
        </Stack>
    )
}

export default PetUserContainer
