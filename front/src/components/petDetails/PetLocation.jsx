import { Stack } from '@mui/system'
import React from 'react'
import {
    GoogleMap,
    InfoWindow,
    LoadScript,
    Marker,
} from '@react-google-maps/api'
import { Typography } from '@mui/material'
import { useSelector } from 'react-redux'

const containerStyle = {
    width: '100%',
    height: '400px',
}

const center = {
    name: 'Monterrey, NL',
    lat: 25.693596,
    lng: -100.324392,
}

const PetLocation = () => {
    const { petDetail } = useSelector((state) => state.pet)
    return (
        <Stack width="100%" height="450px" mb='20px' sx={{}}>
            <Stack width="100%" my="25px">
                <Typography
                    fontSize="22px"
                    component="div"
                    fontWeight={'bold'}
                    mx="auto"
                    color={
                        petDetail?.type.toLowerCase() === 'lost'
                            ? 'secondary'
                            : 'primary'
                    }
                >
                    Location:
                </Typography>
                <Typography
                    fontSize="15px"
                    component="div"
                    fontWeight={'bold'}
                    mx="auto"
                    color={
                        petDetail?.type.toLowerCase() === 'lost'
                            ? 'secondary.light'
                            : 'primary.light'
                    }
                >
                    {petDetail?.location}
                </Typography>
            </Stack>
            <LoadScript
                googleMapsApiKey={import.meta.env.VITE_APP_GMAPS_API_KEY}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    <Marker key={center} position={center}></Marker>
                </GoogleMap>
            </LoadScript>
        </Stack>
    )
}

export default PetLocation
