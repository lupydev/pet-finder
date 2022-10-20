import { Stack } from '@mui/material'
import React from 'react'
import AdminDashboard from '../../components/admin/AdminDashboard'

export const Admin = () => {
    return (
        <Stack alignItems="center" width={'100%'} gap="25px" pt="100px">
            <AdminDashboard />
        </Stack>
    )
}

export default Admin
