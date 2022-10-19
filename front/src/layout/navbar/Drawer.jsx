import React from 'react'
import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Divider,
    IconButton,
    Stack,
    ListItemButton,
    Collapse,
    List,
} from '@mui/material'
import { useEffect, useState } from 'react'
import {
    MdPets,
    MdOutlineMenu,
    MdOutlineExpandMore,
    MdExpandLess,
} from 'react-icons/md'
import { AiFillHome } from 'react-icons/ai'
import { FaUser } from 'react-icons/fa'
import { GrContact, GrFormClose } from 'react-icons/gr'
import { TbPoint } from 'react-icons/tb'
import { Link } from 'react-router-dom'

function App() {
    const [open, setOpen] = useState(false)
    const [openNested, setOpenNested] = useState(false)

    const handleClickNested = () => {
        setOpenNested(!openNested)
    }

    useEffect(() => {
        setOpenNested(false)
    }, [open === false])

    return (
        <Stack display={{ xs: 'flex', md: 'none' }}>
            <IconButton onClick={() => setOpen(true)}>
                <MdOutlineMenu fontSize="40px" />
            </IconButton>

            <Drawer
                variant="temporary"
                open={open}
                anchor={'left'}
                onClose={() => setOpen(false)}
            >
                <Stack width="250px">
                    <Stack
                        direction="row"
                        height="50px"
                        justifyContent="flex-end"
                    >
                        <IconButton onClick={() => setOpen(false)}>
                            <GrFormClose fontSize="40px" />
                        </IconButton>
                    </Stack>
                    <ListItem
                        button
                        onClick={() => setOpen(false)}
                        component={Link}
                        to="/"
                    >
                        <ListItemIcon>
                            <AiFillHome />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>

                    <ListItem button onClick={handleClickNested}>
                        <ListItemIcon>
                            <MdPets />
                        </ListItemIcon>
                        <ListItemText primary="Pet Browser" />
                        {openNested ? (
                            <MdExpandLess fontSize="25px" />
                        ) : (
                            <MdOutlineExpandMore fontSize="25px" />
                        )}
                    </ListItem>
                    <Collapse in={openNested} timeout="auto">
                        <List component="div" disablePadding>
                            <ListItemButton
                                onClick={() => setOpen(false)}
                                component={Link}
                                to="/lostPets"
                            >
                                <ListItemIcon sx={{ pl: 4 }}>
                                    <TbPoint fontSize="25px" />
                                </ListItemIcon>
                                <ListItemText
                                    sx={{ pl: 1 }}
                                    primary="Lost Pets"
                                />
                            </ListItemButton>

                            <ListItemButton
                                onClick={() => setOpen(false)}
                                component={Link}
                                to="/foundPets"
                            >
                                <ListItemIcon sx={{ pl: 4 }}>
                                    <TbPoint fontSize="25px" />
                                </ListItemIcon>
                                <ListItemText
                                    sx={{ pl: 1 }}
                                    primary="Found Pets"
                                />
                            </ListItemButton>

                            <ListItemButton
                                onClick={() => setOpen(false)}
                                component={Link}
                                to="/createPost"
                            >
                                <ListItemIcon sx={{ pl: 4 }}>
                                    <TbPoint fontSize="25px" />
                                </ListItemIcon>
                                <ListItemText
                                    sx={{ pl: 1 }}
                                    primary="Create Post"
                                />
                            </ListItemButton>
                        </List>
                        <Divider />
                    </Collapse>

                    <ListItem
                        button
                        onClick={() => setOpen(false)}
                        component={Link}
                        to="/aboutUs"
                    >
                        <ListItemIcon>
                            <FaUser />
                        </ListItemIcon>
                        <ListItemText primary="About Us" />
                    </ListItem>

                    <ListItem
                        button
                        onClick={() => setOpen(false)}
                        component={Link}
                        to="/contact"
                    >
                        <ListItemIcon>
                            <GrContact />
                        </ListItemIcon>
                        <ListItemText primary="Contact" />
                    </ListItem>

                 
                        <Button
                            variant="contained"
                            component={Link}
                            to="/login"
                            sx={{ textTransform: 'none', px: '30px',width:'100px', m:'10px auto'}}
                            disableRipple
                            size='small'
                            onClick={() => setOpen(false)}
                        >
                            Login
                        </Button>
                </Stack>
            </Drawer>
        </Stack>
    )
}

export default App
