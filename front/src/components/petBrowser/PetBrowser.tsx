import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    Typography,
    TextField,
    IconButton,
} from '@mui/material'
import React from 'react'
import { MdExpandMore } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import PetCard from '../home/pets/PetCard'

const data: any[] = [
    {
        name: 'Tommy',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-515863076_fs7aed.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'found',
    },
    {
        name: 'Firulais',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664197188/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1395952991_ksmp62.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'found',
    },
    {
        name: 'Manchas',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049166/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1001199382_brtfko.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'found',
    },
    {
        name: 'Firulais',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664197188/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1395952991_ksmp62.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'found',
    },
    {
        name: 'Huesos',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-515863076_fs7aed.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'lost',
    },
    {
        name: 'Loki',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664197188/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1395952991_ksmp62.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'lost',
    },
    {
        name: 'Zeus',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049161/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-515863076_fs7aed.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'lost',
    },
    {
        name: 'Tommy',
        img: 'https://res.cloudinary.com/diyk4to11/image/upload/v1664049166/Imagenes%20Dise%C3%B1o%20UX/Imagenes%20Macotas%20Perdidas/iStock-1001199382_brtfko.jpg',
        description:
            'Tommy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa similique incidunt laborum, rerum deserunt reprehenderit perspiciatis?',
        status: 'lost',
    },
]

type Props = {
    title: string
    color: string
}

const buttonData: any[] = [
    { name: 'Specie', values: ['Dog', 'Cat'] },
    {
        name: 'Breed',
        values: ['Chihuahua', 'Persian', 'Pug', 'Bengal', 'Boxer', 'Siames'],
    },
    { name: 'Size', values: ['small', 'medium', 'large'] },
    { name: 'Gender', values: ['male', 'female'] },
    { name: 'Age', values: ['1-3', '4-6', '7-9', '10-12', '13-15', '16+'] },
    { name: 'Color', values: ['Black', 'Brown', 'White', 'Gray', 'Orange'] },
]

const PetBrowser = (props: Props) => {
    const handleChange = () => {}

    return (
        <Stack alignItems="center" width={'95%'} px="60px" gap="40px">
            <Stack alignItems="center" gap="10px">
                <Typography
                    variant="h3"
                    color={props.color}
                    fontFamily={'Merriweather'}
                    fontWeight="bold"
                >
                    {props.title} Pets
                </Typography>

                <Typography
                    variant="h5"
                    color={props.color}
                    fontFamily={''}
                    fontWeight="bold"
                >
                    “Here you will find the pets found by other users.”
                </Typography>
            </Stack>
            <Stack direction="row" gap="10px">
                <TextField
                    type={'text'}
                    label="Name"
                    color={
                        props.title.toLowerCase() === 'lost'
                            ? 'secondary'
                            : 'primary'
                    }
                />
                <TextField
                    type={'text'}
                    label="Location"
                    color={
                        props.title.toLowerCase() === 'lost'
                            ? 'secondary'
                            : 'primary'
                    }
                />

                <Button
                    variant="contained"
                    color={
                        props.title.toLowerCase() === 'lost'
                            ? 'secondary'
                            : 'primary'
                    }
                    sx={{
                        ml: '15px',
                        borderRadius: '50%',
                        p: '0',
                        minHeight: '60px',
                        minWidth: '60px',
                    }}
                >
                    <BsSearch fontSize="25px" />
                </Button>
            </Stack>

            <Stack width="100%">
                <Accordion>
                    <AccordionSummary
                        sx={{
                            backgroundColor: props.title.toLowerCase() === 'lost'
                            ? 'secondary.main'
                            : 'primary.main',
                            color: 'white',
                            fontWeight: 'bold',
                            borderRadius: '4px',
                        }}
                        expandIcon={
                            <MdExpandMore color="white" fontWeight="bold" />
                        }
                    >
                        <Typography sx={{ mx: 'auto' }}>
                            More Filters
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '20px',
                        }}
                    >
                        <Stack direction="row" gap="20px">
                            <TextField
                                type={'date'}
                                color={
                                    props.title.toLowerCase() === 'lost'
                                        ? 'secondary'
                                        : 'primary'
                                }
                            />

                            <TextField
                                type={'date'}
                                color={
                                    props.title.toLowerCase() === 'lost'
                                        ? 'secondary'
                                        : 'primary'
                                }
                            />
                        </Stack>
                    </AccordionDetails>
                    <AccordionDetails
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '20px',
                        }}
                    >
                        {buttonData.map((button) => (
                            <FormControl>
                                <Stack width="150px">
                                    <InputLabel htmlFor="demo-customized-select-native">
                                        {button.name}
                                    </InputLabel>
                                    <Select
                                        color={
                                            props.title.toLowerCase() === 'lost'
                                                ? 'secondary'
                                                : 'primary'
                                        }
                                        onChange={handleChange}
                                        label={button.name}
                                    >
                                        {button.values.map((item: string) => (
                                            <MenuItem value={item}>
                                                <em>{item}</em>
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Stack>
                            </FormControl>
                        ))}
                    </AccordionDetails>
                </Accordion>
            </Stack>
            <Stack direction="row" justifyContent={'center'} flexWrap='wrap' gap="24px">
                {data.map(
                    (item) =>
                        item.status.toLowerCase() ===
                            props.title.toLowerCase() && (
                            <PetCard
                                name={item.name}
                                img={item.img}
                                description={item.description}
                                status={item.status}
                            />
                        )
                )}
            </Stack>
        </Stack>
    )
}

export default PetBrowser
