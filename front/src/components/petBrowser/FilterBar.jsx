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
    InputAdornment,
    OutlinedInput,
    FormControlLabel,
    Checkbox,
    Divider,
} from '@mui/material'
import { MdExpandMore, MdPets, MdDateRange, MdPalette, MdExpand } from 'react-icons/md'
import { BsCaretDownFill } from 'react-icons/bs'
import { FaTransgender } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import { TbSortDescending } from "react-icons/tb";

const FilterBar = (props) => {
    return (
        <>
        <Stack px={10}  mt='10px' direction="column" width='100%' maxWidth='1440px' pb='5px' gap='10px'>
        <Typography color='primary.main' variant='h5' >Choose your filters:</Typography>
        <Divider color='#357abd' sx={{ borderBottomWidth: 3, width: '450px' }} />
        </Stack>
            <Stack px={10} mt='10px' direction="row" width='100%' maxWidth='1440px' justifyContent='space-between' flexWrap='wrap'>
                <FormControl>
                    <Stack width="200px" >
                        <InputLabel htmlFor="demo-customized-select-native">
                            {props.principalInputs[0].label}
                        </InputLabel>
                        <Select
                            displayEmpty
                            sx={{height: '45px'}}
                            startAdornment={
                                <InputAdornment position='start'>
                                    <MdPets />
                                </InputAdornment> 
                            }
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <Typography pt='4px' fontSize='15px' ml='5px'>Choose species</Typography>;
                                }
                                return <Typography pt='4px' fontSize='15px' ml='5px'>{selected}</Typography>;
                            }}
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
                                    <em><Typography pt='4px' fontSize='15px' ml='5px'>{item}</Typography></em>
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </FormControl>

                <FormControl>
                    <Stack width="200px">
                        <InputLabel htmlFor="demo-customized-select-native">
                            {props.principalInputs[1].label}
                        </InputLabel>
                        <Select
                            displayEmpty
                            sx={{height: '45px'}}
                            startAdornment={
                                <InputAdornment position='start'>
                                    <FaTransgender />
                                </InputAdornment> 
                            }
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <Typography pt='4px' fontSize='15px' ml='5px'>Choose gender</Typography>;
                                }
                                return <Typography pt='4px' fontSize='15px' ml='5px'>{selected}</Typography>;
                            }}
                            color={
                                props.title.toLowerCase() === 'lost'
                                    ? 'secondary'
                                    : 'primary'
                            }
                            onChange={(event) => props.handleChange(event)}
                            label={props.principalInputs[1].label}
                            name={props.principalInputs[1].name}
                            value={props.filter['gender']}
                        >
                            {props.principalInputs[1].values.map((item) => (
                                <MenuItem key={item} value={item}>
                                    <em><Typography pt='4px' fontSize='15px' ml='5px'>{item}</Typography></em>
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </FormControl>

                <FormControl>
                    <Stack width="200px">
                        <InputLabel htmlFor="demo-customized-select-native">
                            {props.principalInputs[2].label}
                        </InputLabel>
                        <Select
                            displayEmpty
                            sx={{height: '45px'}}
                            startAdornment={
                                <InputAdornment position='start'>
                                    <GrMap />
                                </InputAdornment> 
                            }
                            renderValue={(selected) => {
                                if (selected.length === 0) {
                                    return <Typography pt='4px' fontSize='15px' ml='5px'>Choose city</Typography>;
                                }
                                return <Typography pt='4px' fontSize='15px' ml='5px'>{selected}</Typography>;
                            }}
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
                                    <em><Typography pt='4px' fontSize='15px' ml='5px'>{item}</Typography></em>
                                </MenuItem>
                            ))}
                        </Select>
                    </Stack>
                </FormControl>

                <FormControlLabel control={<Checkbox color={props.title.toLowerCase() === 'lost'
                                    ? 'secondary'
                                    : 'primary'}  />} label="Show ReFound" />
                {/* <Button
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
                </Button> */}
            </Stack>

            <Stack width="100%" maxWidth='1440px' >
                <Accordion sx={{transform: 'rotate(180deg)', boxShadow: 'none'}} >
                    <AccordionSummary
                        sx={{
                            transform: 'rotate(180deg)',
                                color: props.title.toLowerCase() === 'lost'
                                ? 'secondary.main'
                                : 'primary.main',
                            fontWeight: 'bold',
                            width: '180px',
                            mx: 'auto'
                        }}
                        expandIcon={
                            <BsCaretDownFill sx={{color: props.title.toLowerCase() === 'lost'
                            ? 'secondary.main'
                            : 'primary.main',}} fontWeight="bold"  />
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
                            justifyContent: 'space-between',
                            px: 10,
                        }}
                    >
                        <FormControl>
                            <Stack width="200px">
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {props.extraInputs[0].label}
                                </InputLabel>
                                <Select
                                    displayEmpty
                                    sx={{height: '45px'}}
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <MdDateRange />
                                        </InputAdornment> 
                                    }
                                    renderValue={(selected) => {
                                        if (selected.toString().length === 0) {
                                            return <Typography pt='4px' fontSize='15px' ml='5px'>Choose order</Typography>;
                                        }
                                        return <Typography pt='4px' fontSize='15px' ml='5px'>{selected == false ? 'Ascending order' : 'Descending order'}</Typography>;
                                    }}
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
                                            <em><Typography pt='4px' fontSize='15px' ml='5px'>{item.label}</Typography></em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <Stack width="200px">
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {props.extraInputs[1].label}
                                </InputLabel>
                                <Select
                                    displayEmpty
                                    sx={{height: '45px'}}
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <TbSortDescending />
                                        </InputAdornment> 
                                    }
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <Typography pt='4px' fontSize='15px' ml='5px'>Choose order</Typography>;
                                        }
                                        return <Typography pt='4px' fontSize='15px' ml='5px'>{selected == false ? 'Ascending order' : 'Descending order'}</Typography>;
                                    }}
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
                                            <em><Typography pt='4px' fontSize='15px' ml='5px'>{item.label}</Typography></em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <Stack width="200px">
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {props.extraInputs[2].label}
                                </InputLabel>
                                <Select
                                    displayEmpty
                                    sx={{height: '45px'}}
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <MdPalette />
                                        </InputAdornment> 
                                    }
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <Typography pt='4px' fontSize='15px' ml='5px'>Choose color</Typography>;
                                        }
                                        return <Typography pt='4px' fontSize='15px' ml='5px'>{selected}</Typography>;
                                    }}
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
                                            <em><Typography pt='4px' fontSize='15px' ml='5px'>{item.label}</Typography></em>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Stack>
                        </FormControl>
                        <FormControl>
                            <Stack width="200px">
                                <InputLabel htmlFor="demo-customized-select-native">
                                    {props.extraInputs[3].label}
                                </InputLabel>
                                <Select
                                    displayEmpty
                                    sx={{height: '45px'}}
                                    startAdornment={
                                        <InputAdornment position='start'>
                                            <MdExpand />
                                        </InputAdornment> 
                                    }
                                    renderValue={(selected) => {
                                        if (selected.length === 0) {
                                            return <Typography pt='4px' fontSize='15px' ml='5px'>Choose size</Typography>;
                                        }
                                        return <Typography pt='4px' fontSize='15px' ml='5px'>{selected}</Typography>;
                                    }}
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
                                            <em><Typography pt='4px' fontSize='15px' ml='5px'>{item.label}</Typography></em>
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
