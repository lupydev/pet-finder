import React, { useState } from 'react'
import { useJsApiLoader, Autocomplete } from '@react-google-maps/api'
import { TextField } from '@mui/material'
import { libraries } from '../../../utils/gMapLibraries'

const GMapsApi = ({
    setLocation,
    value = '',
    placeholder = 'Select any Location',
    types = ['address'],
    label = 'Location',
    autocompleteRef,
}) => {
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
            autocompleteRef.current.value = ''
            setLocation(undefined)
        }
    }

    return (
        isLoaded && (
            <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
                // types={['address']}
                // types={['(cities)']}
                types={types}
            >
                <TextField
                    id="location"
                    name="location"
                    fullWidth={true}
                    type="text"
                    size="small"
                    label={label}
                    placeholder={(value === '' && placeholder) || value}
                    disabled={!isLoaded}
                    required={label === 'Location'}
                    onChange={(e) =>
                        e.target.value === '' && setLocation(undefined)
                    }
                    inputRef={autocompleteRef}
                />
            </Autocomplete>
        )
    )
}

export default GMapsApi
