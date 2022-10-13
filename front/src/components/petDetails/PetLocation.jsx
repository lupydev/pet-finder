import { Stack } from '@mui/system'
import React, { useState, useEffect } from 'react'
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

const PetLocation = () => {
    const { petDetail } = useSelector((state) => state.pet)
    const [center, setCenter] = useState(undefined)

    useEffect(() => {
        petDetail != undefined &&
            setCenter({
                name: petDetail?.location?.country,
                lat: petDetail?.location?.lat,
                lng: petDetail?.location?.long,
            })
    }, [petDetail])

    return (
        <Stack width="100%" height="450px" mb="20px" sx={{}}>
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
                            ? '#ffad82'
                            : 'primary.light'
                    }
                >
                    {petDetail?.location?.country}
                </Typography>
            </Stack>
            {center != undefined && (
                <LoadScript
                    googleMapsApiKey={import.meta.env.VITE_APP_GMAPS_API_KEY}
                >
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={16}
                    >
                        <Marker key={center} position={center}></Marker>
                    </GoogleMap>
                </LoadScript>
            )}
        </Stack>
    )
}

export default PetLocation
