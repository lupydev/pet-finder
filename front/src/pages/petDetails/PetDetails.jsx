import { Avatar, Stack, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Loading from '../../components/loading/Loading'
import { getPetById } from '../../redux/asyncActions/pet/getPetById'
import { getUserData } from '../../redux/asyncActions/user/getUserData'
import { cleanPetData } from '../../redux/features/pet/petSlice'
import Title from '../.././components/petBrowser/Title'
import PetInfo from '../.././components/petDetails/PetInfo'
import PetUserContainer from '../.././components/petDetails/PetUserContainer'
import PetLocation from '../.././components/petDetails/PetLocation'

const PetDetails = (props) => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { petDetail, status } = useSelector((state) => state.pet)
    const { userDetail } = useSelector((state) => state.user)

    useEffect(() => {
        dispatch(getPetById(id))
        return () => {
            dispatch(cleanPetData())
        }
    }, [])

    const petDate = new Date(petDetail?.date)
    const petDay = petDate.getDay()
    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const petMonth = monthNames[petDate.getMonth()]
    const petYear = petDate.getFullYear()

    return (
        <Stack width='100%' alignItems='center' pt='100px'>
            <Title
                title={`${petDetail?.type} Pet`}
                desc={'Someone Found'}
                name={petDetail?.name}
            />
            <Stack
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    maxWidth: '1440px',
                }}
            >
                <PetUserContainer description={petDetail?.description} />
                <Stack width="100%" px={{xs: 3, sm: 5, md: 10}} gap="15px">
                    <PetInfo month={petMonth} day={petDay} year={petYear} />
                    <PetLocation />
                </Stack>
                {petDetail?.type === 'Lost' ? (
                    <Stack
                        height="100px"
                        width={'100%'}
                        sx={{
                            backgroundImage:
                                'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664324514/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/pawprint-line_tjw4x6.svg)',
                            backgroundRepeat: 'repeat',
                        }}
                    ></Stack>
                ) : (
                    <Stack
                        height="100px"
                        width={'100%'}
                        sx={{
                            backgroundImage:
                                'url(https://res.cloudinary.com/diyk4to11/image/upload/v1664932414/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Landing%20page/huellitas_icwbmh.svg)',
                            backgroundRepeat: 'repeat',
                        }}
                    ></Stack>
                )}
            </Stack>
        </Stack>
    )
}

export default PetDetails
