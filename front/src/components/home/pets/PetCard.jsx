import React, { useEffect } from 'react'
import {
    Button,
    Typography,
    Card,
    CardContent,
    Avatar,
    Stack,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { MdPets } from 'react-icons/md'
import { FaTransgender } from 'react-icons/fa'
import { GrMap } from 'react-icons/gr'
import Loading from '../../loading/Loading'

const PetCard = ({ pets }) => {

    function capitalize(text){
        return text[0].toUpperCase() + text.slice(1).toLowerCase();
    }

    return pets ? (
        pets.map((pet) => {
            return (
                <Card
                    sx={{
                        width: '270px',
                        height: '400px',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                    key={pet._id}
                >
                    <CardContent
                        sx={{
                            borderRadius: '8px',
                            padding: '8px',
                            gap: '16px',
                        }}
                    >
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                backgroundColor:
                                    pet.type.toLowerCase() === 'lost'
                                        ? 'secondary.light'
                                        : 'primary.light',
                                height: '200px',
                                borderRadius: '8px',
                            }}
                        >
                            <Avatar
                                src={pet.img[0]}
                                sx={{ width: '170px', height: '170px' }}
                            />
                        </Stack>
                        <Stack p="11px" gap="11px">
                            <Typography
                                noWrap
                                gutterBottom
                                fontSize="25px"
                                component="div"
                                fontWeight={'bold'}
                                m="0"
                            >
                                {pet.name}
                            </Typography>
                            <Stack w="100%" direction="row" display="flex">
                                <Stack direction="row" width="50%">
                                    <MdPets fontSize="20px" />
                                    <Typography
                                        ml="5px"
                                        noWrap
                                        variant="body2"
                                        color="text.secondary"
                                    >
                                        {capitalize(pet.species.name)}
                                    </Typography>
                                </Stack>
                                <Stack direction="row" width="50%">
                                    <FaTransgender fontSize="20px" />
                                    <Typography
                                        ml="5px"
                                        noWrap
                                        variant="body2"
                                        color="text.secondary"
                                     
                                    > 
                                        {
                                        capitalize(pet.gender)
                                        }
                                    </Typography>
                                </Stack>
                            </Stack>
                            <Stack direction="row" width="100%">
                                <GrMap fontSize='20px' />
                                    <Typography
                                        ml='5px'
                                        noWrap
                                        variant="body2"
                                        color="text.secondary"
                                        
                                    >
                                        {capitalize(pet.location)}
                                    </Typography>
                            </Stack>

                            <Button
                                component={Link}
                                to={`/${pet.type.toLowerCase()}Pets/${pet._id}`}
                                variant="contained"
                                color={
                                    pet.type.toLowerCase() === 'lost'
                                        ? 'secondary'
                                        : 'primary'
                                }
                                sx={{
                                    textTransform: 'none',
                                    width: '140px',
                                    borderRadius: '8px',
                                }}
                            >
                                More Details
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            )
        })
    ) : (
        <Loading />
    )
}

export default PetCard
