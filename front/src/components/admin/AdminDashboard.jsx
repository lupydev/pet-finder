import * as React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { Stack } from '@mui/material'
import { MdPets, MdPerson } from 'react-icons/md'
import AdminBoxes from './AdminBoxes'
import AdminUser from './AdminUser'
import AdminPets from './AdminPet'

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
            {value === index && <Stack width='100%'>{children}</Stack>}
        </div>
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    }
}

export default function AdminDashboard() {
    const theme = useTheme()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index) => {
        setValue(index)
    }

    return (
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
            <Typography fontSize="25px" fontWeight="bold">
                Dashboard
            </Typography>
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
                <AdminPets />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <AdminUser />
            </TabPanel>
        </Stack>
    )
}
