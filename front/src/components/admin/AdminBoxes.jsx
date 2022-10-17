import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import { MdPets, MdPerson } from 'react-icons/md'

export const AdminBoxes = () => {
    return (
        <Stack
            direction="row"
            width="100%"
            flexWrap={{ xs: 'wrap', md: 'nowrap' }}
            gap="20px"
        >
            <Stack
                direction="row"
                width={{ xs: '100%', md: '50%' }}
                justifyContent="space-between"
                gap="20px"
            >
                <Stack
                    sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    height={{ xs: '100px', sm: '125px' }}
                    width="50%"
                    borderRadius="5px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        fontSize={{ xs: '35px', sm: '50px' }}
                        fontWeight="bold"
                    >
                        15
                    </Typography>
                    <Stack direction="row" alignItems="center" gap="5px">
                        <MdPets />
                        <Typography
                            fontSize={{ xs: '13px', sm: '18px' }}
                            fontWeight="bold"
                        >
                            Lost Pets
                        </Typography>
                    </Stack>
                </Stack>

                <Stack
                    sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    height={{ xs: '100px', sm: '125px' }}
                    width="50%"
                    borderRadius="5px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        fontSize={{ xs: '35px', sm: '50px' }}
                        fontWeight="bold"
                    >
                        25
                    </Typography>
                    <Stack direction="row" alignItems="center" gap="5px">
                        <MdPets />
                        <Typography
                            fontSize={{ xs: '13px', sm: '18px' }}
                            fontWeight="bold"
                        >
                            Found Pets
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Stack
                direction="row"
                justifyContent="space-between"
                gap="20px"
                width={{ xs: '100%', md: '50%' }}
            >
                <Stack
                    sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    height={{ xs: '100px', sm: '125px' }}
                    width="50%"
                    borderRadius="5px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        fontSize={{ xs: '35px', sm: '50px' }}
                        fontWeight="bold"
                    >
                        1
                    </Typography>
                    <Stack direction="row" alignItems="center" gap="5px">
                        <MdPets />
                        <Typography
                            fontSize={{ xs: '13px', sm: '18px' }}
                            fontWeight="bold"
                        >
                            Reunited
                        </Typography>
                    </Stack>
                </Stack>

                <Stack
                    sx={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
                    height={{ xs: '100px', sm: '125px' }}
                    width="50%"
                    borderRadius="5px"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography
                        fontSize={{ xs: '35px', sm: '50px' }}
                        fontWeight="bold"
                    >
                        5
                    </Typography>
                    <Stack direction="row" alignItems="center" gap="5px">
                        <MdPerson />
                        <Typography
                            fontSize={{ xs: '13px', sm: '18px' }}
                            fontWeight="bold"
                        >
                            Users
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default AdminBoxes
