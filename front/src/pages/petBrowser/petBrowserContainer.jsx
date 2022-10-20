import { Stack } from '@mui/material'
import React from 'react'
import PetBrowser from '../../components/petBrowser/PetBrowser'

const petBrowserContainer = (props) => {
    return (
        <Stack alignItems="center" width={'100%'} gap="25px" pt='100px'>
            <PetBrowser title={props.title} color={props.color} />
        </Stack>
    )
}

export default petBrowserContainer
