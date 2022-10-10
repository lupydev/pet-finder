import { Avatar, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import { getPetById } from '../../redux/asyncActions/pet/getPetById'
import { cleanPetData } from '../../redux/features/pet/PetSlice'

const PetDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { petDetail, status } = useSelector((state) => state.pet)

    useEffect(() => {
        dispatch(cleanPetData())
        dispatch(getPetById(id))
        return () => {
            dispatch(cleanPetData())
        }
    }, [])

    return (
        <Stack
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                gap: '20px',
            }}
        >
            {status === 'success' ? (
                <Stack
                    width="400px"
                    borderRadius="20px"
                    display="flex"
                    direction="column"
                    gap="20px"
                    padding="10px"
                    boxShadow="3"
                    alignItems="center"
                    paddingY="35px"
                >
                    <Avatar
                        src={petDetail?.img[1]}
                        sx={{ width: 150, height: 150 }}
                    />
                    <Typography
                        variant="h4"
                        color="primary.main"
                        fontFamily={'Merriweather'}
                        fontWeight="bold"
                    >
                        {petDetail?.name}
                    </Typography>
                    <Typography variant="h6">
                        <b>Specie:</b> {petDetail?.species.name}
                    </Typography>
                    <Typography variant="h6">
                        <b> Breed: </b>
                        {petDetail?.breed.name}
                    </Typography>
                    <Typography variant="h6">
                        <b> Age: </b>
                        {petDetail?.age}
                    </Typography>
                    <Typography variant="h6">
                        <b> Gender: </b>
                        {petDetail?.gender}
                    </Typography>
                    <Typography variant="h6">
                        <b> Size: </b>
                        {petDetail?.size}
                    </Typography>
                </Stack>
            ) : (
                <Loading />
            )}
        </Stack>
    )
}

export default PetDetails
