import React, { useRef } from 'react'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { TextField } from '@mui/material'

const libraries = ['places']

const GMapsApi = () => {
    const addressRef = useRef(null)

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_APP_GMAPS_API_KEY,
        libraries,
    })

    const renderMap = () => {
        return (
            <Autocomplete>
                <TextField
                    ref={addressRef}
                    type="text"
                    size="small"
                    placeholder="Insert Location"
                    required
                />
            </Autocomplete>
        )
    }

    if (loadError) {
        return console.log('Map cannot be loaded right now, sorry.')
    }

    return isLoaded ? renderMap() : 'Error!!'
}

export default GMapsApi
