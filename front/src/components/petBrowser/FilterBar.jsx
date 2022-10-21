import React from 'react'
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
    InputAdornment,
    FormControlLabel,
    Checkbox,
    Divider,
} from '@mui/material'
import { MdPets, MdDateRange, MdPalette, MdExpand } from 'react-icons/md'
import { BsCaretDownFill, BsSearch } from 'react-icons/bs'
import { FaTransgender } from 'react-icons/fa'
import { TbSortDescending } from 'react-icons/tb'
import { useSelector } from 'react-redux'
import GMapsApi from '../formPost/GMapsAutocomplete/GMapsApi'
import { motion } from 'framer-motion'

const FilterBar = ({
    title,
    principalInputs,
    extraInputs,
    showReunited,
    setLocation,
    setShowReunited,
    filter,
    handleChange,
    handleClick,
    handleShowReunited,
    handleSubmit,
    autocompleteRef,
}) => {
    const { species } = useSelector((state) => state.pet)

    return (
        <>
            <Stack
                px={{ xs: '20px', md: 10 }}
                mt="10px"
                direction="column"
                width="100%"
                maxWidth="1440px"
                pb="5px"
                gap="10px"
            >
                <Typography color="primary.main" variant="h5">
                    Choose your filters:
                </Typography>
                <Divider
                    color="#357abd"
                    sx={{
                        borderBottomWidth: 3,
                        width: { xs: '100%', md: '450px' },
                    }}
                />
                <Stack direction={{ xs: 'column', md: 'row' }} gap="20px">
                    <FormControlLabel
                        control={
                            <Checkbox
                                color={
                                    title.toLowerCase() === 'lost'
                                        ? 'secondary'
                                        : 'primary'
                                }
                                checked={showReunited}
                            />
                        }
                        name="isReunited"
                        label="Show Reunited"
                        onChange={handleShowReunited}
                    />
                    <motion.div whileTap={{ scale: 0.98 }}>
                        <Button
                            onClick={handleClick}
                            variant="contained"
                            color={
                                title.toLowerCase() === 'lost'
                                    ? 'secondary'
                                    : 'primary'
                            }
                            sx={{
                                textTransform: 'none',
                                width: '160px',
                                borderRadius: '8px',
                            }}
                        >
                            Restart Filters
                        </Button>
                    </motion.div>
                </Stack>
            </Stack>
            <Stack
                px={{ xs: '20px', md: 10 }}
                mt="10px"
                direction="row"
                width="100%"
                maxWidth="1440px"
                justifyContent="space-evenly"
                flexWrap="wrap"
                gap="30px"
            >
                <FormControl>
                    <Stack width={{ xs: '300px', md: '200px' }}>
                        <InputLabel htmlFor="demo-customized-select-native">
                            {principalInputs[0].label}
                        </InputLabel>
                        <Select
                            displayEmpty
                            sx={{ height: '45px', width: '100%' }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <MdPets />
                                </InputAdornment>
                            }
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return (
                                        <Typography
                                            pt="4px"
                                            fontSize="15px"
                                            ml="5px"
                                        >
                                            Choose species
                                        </Typography>
                                    )
                                }
                                let option
                                switch (selected) {
                                    case '63349820bb516339d5f633f0':
                                        option = 'Cat'
                                        break
                                    case '6334982abb516339d5f633f2':
                                        option = 'Dog'
                                        break
                                    case '6334984dbb516339d5f633f4':
                                        option = 'Bird'
                                        break
                                    case '63349866bb516339d5f633f6':
                                        option = 'Horse'
                                        break
                                    case '63349870bb516339d5f633f8':
                                        option = 'Rabbit'
                                        break
                                    case '63349899bb516339d5f633fa':
                                        option = 'Hamster'
                                        break
                                    case '633498a3bb516339d5f633fc':
                                        option = 'Others'
                                        break
                                }
                                return (
                                    <Typography
                                        pt="4px"
                                        fontSize="15px"
                                        ml="5px"
                                    >
                                        {option}
                                    </Typography>
                                )
                            }}
                            color={
                                title.toLowerCase() === 'lost'
                                    ? 'secondary'
                                    : 'primary'
                            }
                            onChange={(event) => handleChange(event)}
                            label={principalInputs[0].label}
                            name={principalInputs[0].name}
                            value={filter['species']}
                        >
                            {species.length > 0 &&
                                species.map((specie) => (
                                    <MenuItem
                                        key={specie._id}
                                        value={specie._id}
                                    >
                                        <em>
                                            <Typography
                                                pt="4px"
                                                fontSize="15px"
                                                ml="5px"
                                                textTransform="capitalize"
                                            >
                                                {specie.name}
                                            </Typography>
                                        </em>
                                    </MenuItem>
                                ))}
                        </Select>
                    </Stack>
                </FormControl>

                <FormControl>
                    <Stack width={{ xs: '300px', md: '200px' }}>
                        <InputLabel htmlFor="demo-customized-select-native">
                            {principalInputs[1].label}
                        </InputLabel>
                        <Select
                            displayEmpty
                            sx={{ height: '45px' }}
                            startAdornment={
                                <InputAdornment position="start">
                                    <FaTransgender />
                                </InputAdornment>
                            }
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return (
                                        <Typography
                                            pt="4px"
                                            fontSize="15px"
                                            ml="5px"
                                        >
                                            Choose gender
                                        </Typography>
                                    )
                                }
                                return (
                                    <Typography
                                        pt="4px"
                                        fontSize="15px"
                                        ml="5px"
                                    >
                                        {selected}
                                    </Typography>
                                )
                            }}
                            color={
                                title.toLowerCase() === 'lost'
                                    ? 'secondary'
                                    : 'primary'
                            }
                            onChange={(event) => handleChange(event)}
                            label={principalInputs[1].label}
                            name={principalInputs[1].name}
                            value={filter['gender']}
                        >
                            {principalInputs[1].values.map((item) => (
                                <MenuItem key={item} value={item}>
                                    <em>
                                        <Typography
                                            pt="4px"
                                            fontSize="15px"
                                            ml="5px"
                                        >
                                            {item}
                                        </Typography>
                                    </em>
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </FormControl>

                <FormControl>
                    <Stack width={{ xs: '300px', md: '200px' }}>
                        <GMapsApi
                            setLocation={setLocation}
                            types={['locality']}
                            label={'City'}
                            placeholder={'Select any City'}
                            autocompleteRef={autocompleteRef}
                        />
                    </Stack>
                </FormControl>
                <Stack direction="row" gap="15px">
                    <motion.div whileTap={{ scale: 0.98 }}>
                        <Button
                            onClick={handleSubmit}
                            endIcon={<BsSearch size="15px" />}
                            variant="contained"
                            color={
                                title.toLowerCase() === 'lost'
                                    ? 'secondary'
                                    : 'primary'
                            }
                            sx={{
                                textTransform: 'none',
                                width: '180px',
                                borderRadius: '8px',
                            }}
                        >
                            Search
                        </Button>
                    </motion.div>
                </Stack>
            </Stack>

            <Stack width="100%" maxWidth="1440px">
                <Accordion
                    sx={{ transform: 'rotate(180deg)', boxShadow: 'none' }}
                >
                    <AccordionSummary
                        sx={{
                            transform: 'rotate(180deg)',
                            color:
                                title.toLowerCase() === 'lost'
                                    ? 'secondary.main'
                                    : 'primary.main',
                            fontWeight: 'bold',
                            width: '180px',
                            mx: 'auto',
                        }}
                        expandIcon={
                            <BsCaretDownFill
                                sx={{
                                    color:
                                        title.toLowerCase() === 'lost'
                                            ? 'secondary.main'
                                            : 'primary.main',
                                }}
                                fontWeight="bold"
                            />
                        }
                    >
                        <Typography sx={{ mx: 'auto' }}>
                            More Filters
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                        sx={{
                            transform: 'rotate(180deg)',
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly',
                            gap: '30px',
                            px: { xs: '20px', md: 10 },
                        }}
                    >
                        <FormControl>
                            <Stack width={{ xs: '300px', md: '200px' }}>
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {extraInputs[0].label}
                                </InputLabel>
                                <Select
                                    displayEmpty
                                    sx={{ height: '45px' }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <MdDateRange />
                                        </InputAdornment>
                                    }
                                    renderValue={(selected) => {
                                        if (selected.toString().length === 0) {
                                            return (
                                                <Typography
                                                    pt="4px"
                                                    fontSize="15px"
                                                    ml="5px"
                                                >
                                                    Choose order
                                                </Typography>
                                            )
                                        }
                                        return (
                                            <Typography
                                                pt="4px"
                                                fontSize="15px"
                                                ml="5px"
                                                textTransform="capitalize"
                                            >
                                                {selected} Order
                                            </Typography>
                                        )
                                    }}
                                    color={
                                        title.toLowerCase() === 'lost'
                                            ? 'secondary'
                                            : 'primary'
                                    }
                                    onChange={(event) => handleChange(event)}
                                    label={extraInputs[0].label}
                                    name={extraInputs[0].name}
                                    value={filter['date']}
                                >
                                    {extraInputs[0].values.map((item) => (
                                        <MenuItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            <em>
                                                <Typography
                                                    pt="4px"
                                                    fontSize="15px"
                                                    ml="5px"
                                                >
                                                    {item.label}
                                                </Typography>
                                            </em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <Stack width={{ xs: '300px', md: '200px' }}>
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {extraInputs[1].label}
                                </InputLabel>
                                <Select
                                    displayEmpty
                                    sx={{ height: '45px' }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <TbSortDescending />
                                        </InputAdornment>
                                    }
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return (
                                                <Typography
                                                    pt="4px"
                                                    fontSize="15px"
                                                    ml="5px"
                                                >
                                                    Choose order
                                                </Typography>
                                            )
                                        }
                                        return (
                                            <Typography
                                                pt="4px"
                                                fontSize="15px"
                                                ml="5px"
                                                textTransform="capitalize"
                                            >
                                                {selected} Order
                                            </Typography>
                                        )
                                    }}
                                    color={
                                        title.toLowerCase() === 'lost'
                                            ? 'secondary'
                                            : 'primary'
                                    }
                                    onChange={(event) => handleChange(event)}
                                    label={extraInputs[1].label}
                                    name={extraInputs[1].name}
                                    value={filter['name']}
                                >
                                    {extraInputs[1].values.map((item) => (
                                        <MenuItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            <em>
                                                <Typography
                                                    pt="4px"
                                                    fontSize="15px"
                                                    ml="5px"
                                                >
                                                    {item.label}
                                                </Typography>
                                            </em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <Stack width={{ xs: '300px', md: '200px' }}>
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {extraInputs[2].label}
                                </InputLabel>
                                <Select
                                    displayEmpty
                                    sx={{ height: '45px' }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <MdPalette />
                                        </InputAdornment>
                                    }
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return (
                                                <Typography
                                                    pt="4px"
                                                    fontSize="15px"
                                                    ml="5px"
                                                >
                                                    Choose color
                                                </Typography>
                                            )
                                        }
                                        return (
                                            <Typography
                                                pt="4px"
                                                fontSize="15px"
                                                ml="5px"
                                            >
                                                {selected}
                                            </Typography>
                                        )
                                    }}
                                    color={
                                        title.toLowerCase() === 'lost'
                                            ? 'secondary'
                                            : 'primary'
                                    }
                                    onChange={(event) => handleChange(event)}
                                    label={extraInputs[2].label}
                                    name={extraInputs[2].name}
                                    value={filter['color']}
                                >
                                    {extraInputs[2].values.map((item) => (
                                        <MenuItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            <em>
                                                <Typography
                                                    pt="4px"
                                                    fontSize="15px"
                                                    ml="5px"
                                                >
                                                    {item.label}
                                                </Typography>
                                            </em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <Stack width={{ xs: '300px', md: '200px' }}>
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {extraInputs[3].label}
                                </InputLabel>
                                <Select
                                    displayEmpty
                                    sx={{ height: '45px' }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <MdExpand />
                                        </InputAdornment>
                                    }
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return (
                                                <Typography
                                                    pt="4px"
                                                    fontSize="15px"
                                                    ml="5px"
                                                >
                                                    Choose size
                                                </Typography>
                                            )
                                        }
                                        return (
                                            <Typography
                                                pt="4px"
                                                fontSize="15px"
                                                ml="5px"
                                            >
                                                {selected}
                                            </Typography>
                                        )
                                    }}
                                    color={
                                        title.toLowerCase() === 'lost'
                                            ? 'secondary'
                                            : 'primary'
                                    }
                                    onChange={(event) => handleChange(event)}
                                    label={extraInputs[3].label}
                                    name={extraInputs[3].name}
                                    value={filter['size']}
                                >
                                    {extraInputs[3].values.map((item) => (
                                        <MenuItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            <em>
                                                <Typography
                                                    pt="4px"
                                                    fontSize="15px"
                                                    ml="5px"
                                                >
                                                    {item.label}
                                                </Typography>
                                            </em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>
            </Stack>
        </>
    )
}

export default FilterBar
