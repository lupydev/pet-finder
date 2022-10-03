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
} from '@mui/material'
import { MdExpandMore } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'

const FilterBar = (props) => {
    return (
        <>
            <Stack direction="row" gap="10px">
                <FormControl>
                    <Stack width="150px">
                        <InputLabel htmlFor="demo-customized-select-native">
                            {props.principalInputs[0].label}
                        </InputLabel>
                        <Select
                            color={
                                props.title.toLowerCase() === 'lost'
                                    ? 'secondary'
                                    : 'primary'
                            }
                            onChange={(event) => props.handleChange(event)}
                            label={props.principalInputs[0].label}
                            name={props.principalInputs[0].name}
                            value={props.filter['specie']}
                        >
                            {props.principalInputs[0].values.map((item) => (
                                <MenuItem key={item} value={item}>
                                    <em>{item}</em>
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </FormControl>

                <FormControl>
                    <Stack width="150px">
                        <InputLabel htmlFor="demo-customized-select-native">
                            {props.principalInputs[1].label}
                        </InputLabel>
                        <Select
                            color={
                                props.title.toLowerCase() === 'lost'
                                    ? 'secondary'
                                    : 'primary'
                            }
                            onChange={(event) => props.handleChange(event)}
                            label={props.principalInputs[1].label}
                            name={props.principalInputs[1].name}
                            value={props.filter['breed']}
                        >
                            {props.principalInputs[1].values.map((item) => (
                                <MenuItem key={item} value={item}>
                                    <em>{item}</em>
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </FormControl>

                <FormControl>
                    <Stack width="150px">
                        <InputLabel htmlFor="demo-customized-select-native">
                            {props.principalInputs[2].label}
                        </InputLabel>
                        <Select
                            color={
                                props.title.toLowerCase() === 'lost'
                                    ? 'secondary'
                                    : 'primary'
                            }
                            onChange={(event) => props.handleChange(event)}
                            label={props.principalInputs[2].label}
                            name={props.principalInputs[2].name}
                            value={props.filter['city']}
                        >
                            {props.principalInputs[2].values.map((item) => (
                                <MenuItem key={item} value={item}>
                                    <em>{item}</em>
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </FormControl>

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
                            backgroundColor:
                                props.title.toLowerCase() === 'lost'
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
                        <FormControl>
                            <Stack width="150px">
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {props.extraInputs[0].label}
                                </InputLabel>
                                <Select
                                    color={
                                        props.title.toLowerCase() === 'lost'
                                            ? 'secondary'
                                            : 'primary'
                                    }
                                    onChange={(event) =>
                                        props.handleChange(event)
                                    }
                                    label={props.extraInputs[0].label}
                                    name={props.extraInputs[0].name}
                                    value={props.filter['date']}
                                >
                                    {props.extraInputs[0].values.map((item) => (
                                        <MenuItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            <em>{item.label}</em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <Stack width="150px">
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {props.extraInputs[1].label}
                                </InputLabel>
                                <Select
                                    color={
                                        props.title.toLowerCase() === 'lost'
                                            ? 'secondary'
                                            : 'primary'
                                    }
                                    onChange={(event) =>
                                        props.handleChange(event)
                                    }
                                    label={props.extraInputs[1].label}
                                    name={props.extraInputs[1].name}
                                    value={props.filter['name']}
                                >
                                    {props.extraInputs[1].values.map((item) => (
                                        <MenuItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            <em>{item.label}</em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <Stack width="150px">
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {props.extraInputs[2].label}
                                </InputLabel>
                                <Select
                                    color={
                                        props.title.toLowerCase() === 'lost'
                                            ? 'secondary'
                                            : 'primary'
                                    }
                                    onChange={(event) =>
                                        props.handleChange(event)
                                    }
                                    label={props.extraInputs[2].label}
                                    name={props.extraInputs[2].name}
                                    value={props.filter['color']}
                                >
                                    {props.extraInputs[2].values.map((item) => (
                                        <MenuItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            <em>{item.label}</em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <Stack width="150px">
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {props.extraInputs[3].label}
                                </InputLabel>
                                <Select
                                    color={
                                        props.title.toLowerCase() === 'lost'
                                            ? 'secondary'
                                            : 'primary'
                                    }
                                    onChange={(event) =>
                                        props.handleChange(event)
                                    }
                                    label={props.extraInputs[3].label}
                                    name={props.extraInputs[3].name}
                                    value={props.filter['size']}
                                >
                                    {props.extraInputs[3].values.map((item) => (
                                        <MenuItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            <em>{item.label}</em>
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
