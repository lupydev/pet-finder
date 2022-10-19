import { Stack, Typography, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import Loading from '../../components/loading/Loading'
import PetCard from '../../components/home/pets/PetCard'

const PetCardsReunitedContainer = ({ pets }) => {
    const slicePet = pets.slice(0, 4)
    return (
        <Stack gap="40px">
            <Typography
                variant={'h3'}
                color="primary"
                textAlign="center"
                px="40px"
            >
                Reunited Pets
            </Typography>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent={'center'}
                gap="24px"
            >
                <PetCard pets={slicePet} />
            </Stack>
            {/* <Button
                component={Link}
                to={`/${props.title.toLowerCase()}Pets`}
                variant="contained"
                color={'terciary'}
                sx={{
                    textTransform: 'none',
                    px: '100px',
                    mx: 'auto',
                    borderRadius: '8px',
                }}
            >
                View all Reunited pets
            </Button> */}
        </Stack>
    )
}

export default PetCardsReunitedContainer
