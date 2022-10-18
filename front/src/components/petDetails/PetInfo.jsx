import { Divider, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { MdPets, MdDateRange, MdPalette, MdExpand } from 'react-icons/md'
import { FaTransgender, FaQuestionCircle } from 'react-icons/fa'
import { GrMap } from 'react-icons/gr'
import { useSelector } from 'react-redux'

const PetInfo = (props) => {
    const { petDetail } = useSelector((state) => state.pet)
    return (
        <Stack width="100%" mt='30px' sx={{}}>
            <Stack
                
                width="100%"
                height="3px"
                backgroundColor={
                    petDetail?.type.toLowerCase() === 'lost'
                        ? 'secondary.main'
                        : 'primary.main'
                }
            />

            <Stack
                width="100%"
                direction="row"
                height="60px"
                alignItems="center"
                gap="15px"
            >
                <Stack
                    justifyContent="flex-end"
                    direction="row"
                    width="49%"
                    gap="8px"
                >
                    <MdDateRange fontSize="20px"/>
                    <Typography
                        fontSize="15px"
                        component="div"
                        m="0"
                        fontWeight="bold"
                    >
                        Date Found:
                    </Typography>
                </Stack>
                <Stack width='3px' height='80%' backgroundColor={
                    petDetail?.type.toLowerCase() === 'lost' ? 'secondary.main' : 'primary.main'
                } />
                <Stack justifyContent="flex-start" direction="row" width="49%">
                    <Typography fontSize="15px" component="div" m="0">
                        {props.month} {props.day}, {props.year}
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                width="100%"
                height="3px"
                backgroundColor={
                    petDetail?.type.toLowerCase() === 'lost'
                        ? 'secondary.main'
                        : 'primary.main'
                }
            />
            <Stack
                width="100%"
                direction="row"
                minHeight="60px"
                alignItems="center"
                gap="15px"
               
            >
                <Stack
                    justifyContent="flex-end"
                    direction="row"
                    width="49%"
                    gap="8px"
                >
                    <GrMap fontSize="20px" />
                    <Typography
                        fontSize="15px"
                        component="div"
                        m="0"
                        fontWeight="bold"
                    >
                        Location Found:
                    </Typography>
                </Stack>
                <Stack width='3px' height='80%' backgroundColor={
                    petDetail?.type.toLowerCase() === 'lost' ? 'secondary.main' : 'primary.main'
                } />
                <Stack py='15px' justifyContent="flex-start" direction="row" width="49%">
                    <Typography fontSize="15px" component="div" m="0">
                        {petDetail?.location?.country}
                    </Typography>
                </Stack>
            </Stack>
            <Stack
                width="100%"
                height="3px"
                backgroundColor={
                    petDetail?.type.toLowerCase() === 'lost'
                        ? 'secondary.main'
                        : 'primary.main'
                }
            />
            <Stack
                width="100%"
                direction="row"
                height="90px"
                alignItems="center"
                gap="15px"
            >
                <Stack
                    direction="row"
                    width="100%"
                    justifyContent="space-evenly"
                >
                    <Stack alignItems="center" gap="10px">
                        <MdPets fontSize="20px"/>
                        <Typography
                            fontSize="15px"
                            component="div"
                            m="0"
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {petDetail?.species?.name}
                        </Typography>
                    </Stack>
                    <Stack alignItems="center" gap="10px">
                        <FaTransgender fontSize="20px"/>
                        <Typography
                            fontSize="15px"
                            component="div"
                            m="0"
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {petDetail?.gender}
                        </Typography>
                    </Stack>
                    <Stack alignItems="center" gap="10px">
                        <MdPalette fontSize="20px"/>
                        <Typography
                            fontSize="15px"
                            component="div"
                            m="0"
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {petDetail?.color}
                        </Typography>
                    </Stack>
                    <Stack alignItems="center" gap="10px">
                        <MdExpand fontSize="20px"/>
                        <Typography
                            fontSize="15px"
                            component="div"
                            m="0"
                            sx={{ textTransform: 'capitalize' }}
                        >
                            {petDetail?.size}
                        </Typography>
                    </Stack>
                    {/* <Stack alignItems="center" gap="10px">
                        <FaQuestionCircle fontSize="20px"/>
                        <Typography
                            fontSize="15px"
                            component="div"
                            m="0"
                            sx={{ textTransform: 'capitalize' }}
                        >
                            XXXXXX
                        </Typography>
                    </Stack> */}
                </Stack>
            </Stack>
            <Stack
                width="100%"
                height="3px"
                backgroundColor={
                    petDetail?.type.toLowerCase() === 'lost'
                        ? 'secondary.main'
                        : 'primary.main'
                }
            />
        </Stack>
    )
}

export default PetInfo
