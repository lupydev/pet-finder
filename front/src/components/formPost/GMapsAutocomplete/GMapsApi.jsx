import React, { useState } from 'react'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { TextField, Typography } from '@mui/material'

const libraries = ['places']

const GMapsApi = ({ setLocation }) => {
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
                const country = autocomplete.getPlace().formatted_address
                const lat = autocomplete.getPlace().geometry.location.lat()
                const long = autocomplete
                    .getPlace()
                    .geometry.location.lng()

                setLocation({ country, lat, long })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const renderMap = () => {
        return (
            <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                <TextField
                    id="location"
                    name="location"
                    fullWidth={true}
                    type="text"
                    size="small"
                    label="Location"
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
