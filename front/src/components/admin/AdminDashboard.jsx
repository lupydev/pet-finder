import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import { MdPets, MdPerson } from 'react-icons/md'
import AdminBoxes from './AdminBoxes'
import AdminUser from './AdminUser'
import AdminPets from './AdminPet'
import { useDispatch, useSelector } from 'react-redux'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import { getAllUsers } from '../../redux/asyncActions/user/getAllUsers'
import Title from '../petBrowser/Title'

function TabPanel(props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Stack width="100%">{children}</Stack>}
        </div>
    )
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

export default function AdminDashboard() {
    const dispatch = useDispatch()
    const [value, setValue] = useState(0)
    const { statusUpdate } = useSelector((state) => state.pet)
    const { userData } = useSelector((state) => state.user)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index) => {
        setValue(index)
    }

    useEffect(() => {
        dispatch(getPets('Lost'))
        dispatch(getPets('Found'))
        dispatch(getAllUsers())
    }, [])

    useEffect(() => {
        if (statusUpdate === 'success') {
            dispatch(getPets('Lost'))
            dispatch(getPets('Found'))
        }
    }, [statusUpdate])

    return (
        <>
            <Title title="Dashboard" desc={`Welcome ${userData?.nickname}`} />
            <Stack
                px={10}
                mt="10px"
                direction="column"
                width="100%"
                maxWidth="1440px"
                pb="5px"
                justifyContent="center"
                sx={{ gap: '20px' }}
            >
                <AdminBoxes />
                <AppBar
                    sx={{ bgcolor: 'white', borderRadius: '10px 10px 0px 0px' }}
                    position="relative"
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        centered
                    >
                        <Tab
                            icon={<MdPets />}
                            iconPosition="start"
                            label="pets"
                            {...a11yProps(0)}
                        />
                        <Tab
                            icon={<MdPerson />}
                            iconPosition="start"
                            label="users"
                            {...a11yProps(1)}
                        />
                    </Tabs>
                </AppBar>

                <TabPanel value={value} index={0}>
                    <AdminPets value={value} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AdminUser />
                </TabPanel>
            </Stack>
        </>
    )
}
