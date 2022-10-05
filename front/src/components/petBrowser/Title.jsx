import { Stack, Typography } from '@mui/material'
import React from 'react'

const Title = (props) => {
  return (
    <Stack alignItems="center" gap="10px">
                <Typography
                    variant="h3"
                    color={props.color}
                    fontFamily={'Merriweather'}
                    fontWeight="bold"
                >
                    {props.title} Pets
                </Typography>

                <Typography
                    variant="h5"
                    color={props.color}
                    fontFamily={''}
                    fontWeight="bold"
                >
                    “Here you will find the pets found by other users.”
                </Typography>
            </Stack>
  )
}

export default Title