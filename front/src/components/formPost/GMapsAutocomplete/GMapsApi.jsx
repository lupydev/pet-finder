import React, { useState } from 'react'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { TextField, Typography } from '@mui/material'
import Loading from '../../loading/Loading'

const libraries = ['places']

const GMapsApi = ({ setLocation, placeholder='Select any Location'}) => {
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
                const country = autocomplete.getPlace().formatted_address
                const lat = autocomplete.getPlace().geometry.location.lat()
                const long = autocomplete.getPlace().geometry.location.lng()

                setLocation({ country, lat, long })
            }
        } catch (error) {
            console.log(error)
        }
    }

    return isLoaded && (
        <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
            types={['address']}
            // types={['(cities)']}
            // types={['locality']}
        >
            <TextField
                id="location"
                name="location"
                fullWidth={true}
                type="text"
                size="small"
                label="Location"
                placeholder={placeholder}
                disabled = {!isLoaded}
                required
            />
        </Autocomplete>
    )

}

export default GMapsApi
