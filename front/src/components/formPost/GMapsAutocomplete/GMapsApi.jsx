import React, { useState } from 'react'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { TextField, Typography } from '@mui/material'

const libraries = ['places']

const GMapsApi = () => {
    const [autocomplete, setAutocomplete] = useState(null)

    const { isLoaded } = useJsApiLoader({
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
                const longitude = autocomplete.getPlace().geometry.location.lng()

                console.log(addressInput, latitude, longitude)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return isLoaded ? (
        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <TextField
                fullWidth={true}
                type="text"
                size="small"
                placeholder="Insert Location"
                required
            />
        </Autocomplete>
    ) : (
        'Error!!'
    )
}

export default GMapsApi
