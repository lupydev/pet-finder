import { Button, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPetById } from '../../../../redux/asyncActions/pet/getPetById'
import { getUserData } from '../../../../redux/asyncActions/user/getUserData'
import { cleanPetData } from '../../../../redux/features/pet/petSlice'
import PetEdit from '../../PetEdit'
import PetCard from './PetCard'

const PublicationsCard = () => {
    const dispatch = useDispatch()
    const { userData } = useSelector((state) => state.user)
    const { petDetail, statusUpdate } = useSelector((state) => state.pet)
    const [edit, setEdit] = useState(false)
    const [selectedPet, setSelectedPet] = useState(undefined)

    const handleEditClick = (pet) => {
        setEdit(!edit)
        setSelectedPet(pet)
    }

    useEffect(() => {
        if (selectedPet !== undefined) {
            dispatch(getPetById(selectedPet._id))
        }
    }, [selectedPet, edit])

    useEffect(() => {
        if (statusUpdate === 'success') {
            console.log('usuario actualizado');
            dispatch(getUserData())
        }
    }, [statusUpdate])

    return edit && petDetail !== undefined ? (
        <PetEdit selectedPet={petDetail} setEdit={setEdit} />
    ) : (
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
                {userData?.pets?.length > 0 ? (
                    userData?.pets?.map(
                        (pet) =>
                            pet.status !== 'Deleted' && (
                                <PetCard
                                    key={pet._id}
                                    pet={pet}
                                    handleEditClick={handleEditClick}
                                />
                            )
                    )
                ) : (
                    <Button
                        component={Link}
                        to="/createPost"
                        variant="outlined"
                        sx={{ my: '60px' }}
                    >
                        Make your publication
                    </Button>
                )}
            </Stack>
        </>
    )
}

export default PublicationsCard
