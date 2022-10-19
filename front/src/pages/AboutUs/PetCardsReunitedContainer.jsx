import { Stack, Typography, Button, useMediaQuery } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import Loading from '../../components/loading/Loading'
import PetCard from '../../components/home/pets/PetCard'
import { Paginationn } from '../../components/petBrowser/Pagination'
import 'react-multi-carousel/lib/styles.css'

const PetCardsReunitedContainer = ({ pets }) => {
    const [page, setPage] = useState(1)
    const [max, setMax] = useState(0)
    const [perPage, setPerPage] = useState(4)
    const [limitedPets, setLimited] = useState([])

    const setMaxPages = () => {
        setMax(pets?.length / perPage)
    }

    useEffect(() => {
        setMaxPages()
    }, [pets])

    useEffect(() => {
        if (pets?.length > 0) {
            setLimited(
                pets.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
            )
        }
    }, [page, pets])

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
            <Stack alignItems={'center'} justifyContent={'center'} gap="24px">
                <Stack
                    justifyContent="center"
                    flexWrap="wrap"
                    gap="24px"
                    direction="row"
                >
                    <PetCard pets={limitedPets} />
                </Stack>
                {max > 1 ? (
                    <Paginationn page={page} setPage={setPage} max={max} />
                ) : null}
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
