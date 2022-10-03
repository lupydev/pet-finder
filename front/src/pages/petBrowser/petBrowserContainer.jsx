import { Stack } from '@mui/material'
import React from 'react'
import PetBrowser from '../../components/petBrowser/PetBrowser'

const petBrowserContainer = (props) => {
    return (
        <Stack alignItems="center" width={'95%'} px="60px" gap="40px">
            <PetBrowser  title={props.title} color={props.color} />
        </Stack>
    )
}

export default petBrowserContainer
