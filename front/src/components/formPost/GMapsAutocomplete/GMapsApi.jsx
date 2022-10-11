import React, { useState } from 'react'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { TextField, Typography } from '@mui/material'

const libraries = ['places']

const GMapsApi = () => {
    const [autocomplete, setAutocomplete] = useState(null)

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_APP_GMAPS_API_KEY,
        libraries,
    })

    const onLoad = (autocomplete) => {
        setAutocomplete(autocomplete)
    }

    const onPlaceChanged = () => {
        try {
            if (autocomplete !== null) {
                const addressInput = autocomplete.getPlace().formatted_address
                const latitude = autocomplete.getPlace().geometry.location.lat()
                const longitude = autocomplete
                    .getPlace()
                    .geometry.location.lng()
                console.log(addressInput, latitude, longitude)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const renderMap = () => {
        return (
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <TextField
                    sx={{width: '100%'}}
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
