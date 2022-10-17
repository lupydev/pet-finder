import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Loading from '../../../../components/loading/Loading'
import { getUserPets } from '../../../../redux/asyncActions/user/getUserPets'
import { cleanPetsData } from '../../../../redux/features/user/userSlice'
import PetCard from './PetCard'

const PublicationsCard = () => {
    const dispatch = useDispatch()
    const { userData, userPets, status } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(cleanPetsData())
        userData.pets.map((pet) => {
            dispatch(getUserPets(pet))
        })

        return () => {
            dispatch(cleanPetsData())
        }
    }, [])

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                These are your publications
            </Typography>
            <Stack
                height="100%"
                direction="row"
                alignItems="center"
                justifyContent="center"
                flexWrap="wrap"
                gap="24px"
            >
                {status === 'success' ? (
                    userPets.length > 0 ? (
                        userPets.map((pet) => (
                            <PetCard key={pet._id} pet={pet} />
                        ))
                    ) : (
                        <Button
                            component={Link}
                            to="/createPost"
                            variant="outlined"
                            sx={{ my: '60px' }}
                        >
                            Make your publication
                        </Button>
                    )
                ) : (
                    <Stack
                        width="100%"
                        height="100%"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Loading />
                    </Stack>
                )}
            </Stack>
        </>
    )
}

export default PublicationsCard
