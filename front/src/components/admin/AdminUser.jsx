import { DataGrid } from '@mui/x-data-grid'
import { Avatar, Button, IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { getAllUsers } from '../../redux/asyncActions/user/getAllUsers'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import { getUserById } from '../../redux/asyncActions/user/getUserById'
import Swal from 'sweetalert2'
import { deleteUserData } from '../../redux/asyncActions/user/deleteUserData'
import { putEditUser } from '../../redux/asyncActions/user/putEditUser'
import { toggleUserAdmin } from '../../redux/asyncActions/user/toggleUserAdmin'

export default function AdminUser() {
    const dispatch = useDispatch()
    const { allUsers, selectedUser, statusDelete, status } = useSelector(
        (state) => state.user
    )
    const [loading, setLoading] = useState(true)
    const [statusButton, setStatusButton] = useState(false)
    const [deleteButton, setDeleteButton] = useState(false)

    const handleClickDelete = (user) => {
        // console.log(user);
        dispatch(getUserById(user._id))
        setDeleteButton(true)
    }

    const deleteUser = (user) => {
        Swal.fire({
            title: `Do you really want to Delete ${user.nickname}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: 'Do not delete',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUserData(user._id))
            }
        })
        setDeleteButton(false)
    }

    const handleChangeStatus = (user) => {
        Swal.fire({
            title: `Do you want to change status of ${user.nickname}?`,
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                const newUser = { ...user, admin: !user.admin }
                dispatch(toggleUserAdmin({ id: user._id, newData: {admin:!user.admin} }))
            }
        })
    }

    useEffect(() => {
        if (statusDelete === 'success') {
            dispatch(getAllUsers())
            setLoading(true)
        }
    }, [statusDelete])

    useEffect(() => {
        allUsers.length > 0 && setLoading(false)
    }, [allUsers])

    useEffect(() => {
        if (selectedUser !== undefined) {
            if (statusButton) {
                handleChangeStatus(selectedUser)
            }
            if (deleteButton) {
                deleteUser(selectedUser)
            }
        }
    }, [selectedUser])

    const rows = allUsers?.map((user, index) => ({
        id: index + 1,
        _id: user._id,
        avatar: user.img,
        nickname: user.nickname,
        name: user.fullname,
        email: user.email,
        admin: user.admin,
        status: user.status,
    }))

    const columns = [
        {
            field: 'avatar',
            headerName: '',
            editable: false,
            width: 60,
            renderCell: (cell) =>
                cell.value ? <Avatar src={cell.value} /> : <Avatar />,
        },
        {
            field: 'nickname',
            headerName: 'Nickname',
            editable: false,
            width:220,
        },
        {
            field: 'name',
            headerName: 'Name',
            editable: false,
            width:260,
        },
        {
            field: 'email',
            headerName: 'Email',
            editable: false,
            width:330,
        },
        {
            field: 'status',
            headerName: 'Status',
            editable: false,
            width: 120,
        },
        {
            field: 'admin',
            headerName: 'Admin',
            editable: false,
            width: 80,
            align: 'center',
            renderCell: (cell) =>
                cell.value ? (
                    <AiFillCheckCircle color="green" size='26px' />
                ) : (
                    <AiFillCloseCircle color="red" size='26px'  />
                ),
        },
        {
            field: 'deleteAction',
            headerName: 'Delete',
            align: 'center',
            sortable: false,
            width: 80,
            renderCell: (params) =>
                allUsers?.id !== params.row.id ? (
                    <IconButton
                        sx={{
                            backgroundColor: '#f21a1a',
                            '&:hover': { backgroundColor: '#ff6d6d' },
                        }}
                        onClick={() => handleClickDelete(params.row)}
                        size="small"
                    >
                        <HiOutlineTrash color="white" />
                    </IconButton>
                ) : null,
        },
        {
            field: 'toAdminAction',
            headerName: 'Change Status',
            width: 120,
            align: 'center',
            sortable: false,
            renderCell: (params) =>
                allUsers?.id !== params.row.id ? (
                    <Button
                        variant="outlined"
                        size="small"
                        onClick={() => handleChangeStatus(params.row)}
                        sx={{ textTransform: 'none', fontSize: '12px' }}
                    >
                        {params.row.admin ? 'To User' : 'To Admin'}
                    </Button>
                ) : null,
        },
    ]

    return (
        <DataGrid
            components={{
                LoadingOverlay: LinearProgress,
            }}
            loading={loading}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            autoHeight={true}
        />
    )
}
