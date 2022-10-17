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
    const { LostPetsData, FoundPetsData, status } = useSelector(
        (state) => state.pet
    )
    const [limitedLostPetsData, setLimitedLostPetsData] = useState([])
    const [limitedFoundPetsData, setLimitedFoundPetsData] = useState([])
    const [limitedMeetPetsData, setLimitedMeetPetsData] = useState([])

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

    useEffect(() => {
        Object.entries(limitedMeetPetsData).length > 0 &&
            setLimitedMeetPetsData(MeetPetsData.pets.slice(0, 4))
    }, [limitedMeetPetsData])

    return (
        <Stack gap="25px">
            <Typography
                variant={type === 'Reunited' ? 'h4' : 'h3'}
                color={props.color}
                fontFamily={'Merriweather'}
                fontWeight="bold"
                px="40px"
                sx={type === 'Reunited' ? { px: '0px' } : ''}
            >
                {props.title} Pets
            </Typography>
            <Stack direction="row" flexWrap='wrap' justifyContent={'center'} gap="24px">
                {status === 'success' ? (
                    <PetCard
                        pets={
                            type === 'Lost'
                                ? limitedLostPetsData
                                : limitedFoundPetsData
                        }
                    />
                ) : (
                    <Loading />
                )}
            </Stack>
            {type === 'Reunited' ? (
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
                        type === 'Reunited'
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
