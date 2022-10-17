import { Stack, Typography, Button } from '@mui/material'
import PetCard from './PetCard'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getPets } from '../../../redux/asyncActions/pet/getPets'
import Loading from '../../loading/Loading'

const PetCardsContainer = (props) => {
    const dispatch = useDispatch()
    const type = props.title
    const petsReunited = props.petsMeet
    const { LostPetsData, FoundPetsData, status } = useSelector(
        (state) => state.pet
    )
    const [limitedLostPetsData, setLimitedLostPetsData] = useState([])
    const [limitedFoundPetsData, setLimitedFoundPetsData] = useState([])

    useEffect(() => {
        dispatch(getPets(type))
    }, [])

    useEffect(() => {
        LostPetsData?.length > 0 &&
            setLimitedLostPetsData(LostPetsData.slice(0, 4))
    }, [LostPetsData])

    useEffect(() => {
        FoundPetsData?.length > 0 &&
            setLimitedFoundPetsData(FoundPetsData.slice(0, 4))
    }, [FoundPetsData])

    return (
        <Stack gap="25px">
            <Typography
                variant={petsReunited === true ? 'h4' : 'h3'}
                color={props.color}
                fontFamily={'Merriweather'}
                fontWeight="bold"
                px="40px"
                sx={petsReunited === true ? { px: '0px' } : ''}
            >
                {props.title} Pets
            </Typography>
            <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent={'center'}
                gap="24px"
            >
                {status === 'success' ? (
                    <PetCard
                        pets={
                            type === 'Lost'
                                ? limitedLostPetsData
                                : type === 'Found'
                                ? limitedFoundPetsData
                                : petsReunited
                        }
                    />
                ) : (
                    <Loading />
                )}
            </Stack>
            {petsReunited === true ? (
                ''
            ) : (
                <Button
                    component={Link}
                    to={`/${props.title.toLowerCase()}Pets`}
                    variant="contained"
                    color={
                        props.title.toLowerCase() === 'lost'
                            ? 'secondary'
                            : props.title.toLowerCase() === 'found'
                            ? 'primary'
                            : 'terciary'
                    }
                    sx={
                        ({
                            textTransform: 'none',
                            px: '100px',
                            mx: 'auto',
                            borderRadius: '8px',
                        },
                        petsReunited === true
                            ? {
                                  color: 'terciary.dark',
                                  background: '#b6eeba',
                                  textTransform: 'none',
                                  px: '100px',
                                  mx: 'auto',
                                  borderRadius: '8px',
                              }
                            : {
                                  textTransform: 'none',
                                  px: '100px',
                                  mx: 'auto',
                                  borderRadius: '8px',
                              })
                    }
                >
                    View all {props.title.toLowerCase()} pets
                </Button>
            )}
        </Stack>
    )
}

export default PetCardsContainer
