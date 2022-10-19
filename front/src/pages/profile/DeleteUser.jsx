import { Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { putEditUser } from '../../redux/asyncActions/user/putEditUser'
import { logout } from '../../redux/features/user/userSlice'

const DeleteUser = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userData, statusUpdate } = useSelector((state) => state.user)

    const handleDelete = () => {
        Swal.fire({
            title: 'Do you really want to delete your user?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(
                    putEditUser({
                        id: userData._id,
                        newData: { status: 'Deleted' },
                    })
                )
            }
        })
    }

    useEffect(() => {
        if (statusUpdate === 'success') {
            dispatch(logout())
            navigate('/login')
        }
    }, [statusUpdate])

    return (
        <Stack width="100%" gap="20px">
            <Typography variant="h5" fontWeight="bold">
                Delete your User
            </Typography>

            <Stack
                p="20px"
                backgroundColor="#ffbbb9"
                gap="10px"
                borderRadius="20px"
                alignItems="center"
                justifyContent="center"
            >
                <Typography color="black" sx={{ opacity: '.6' }}>
                    this action cannot be reversed
                </Typography>
                <Button
                    variant="contained"
                    color="error"
                    fullWidth
                    sx={{ textTransform: 'none' }}
                    onClick={handleDelete}
                >
                    Delete User
                </Button>
            </Stack>
        </Stack>
    )
}

export default DeleteUser
