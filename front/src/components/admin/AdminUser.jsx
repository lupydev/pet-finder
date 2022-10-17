import { DataGrid } from '@mui/x-data-grid'
import { Avatar, Button, IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { getAllUsers } from '../../redux/asyncActions/user/getAllUsers'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'

export default function AdminUser() {
    const dispatch = useDispatch()
    const { allUsers } = useSelector((state) => state.user)
    const [loading, setLoading] = useState(true)

    // useEffect(() =>{
    //     dispatch(getAllUsers())
    // },[])

    useEffect(() => {
        allUsers.length > 0 && setLoading(false)
    }, [allUsers])

    // useEffect(() => {
    //     dispatch(getAdoptablePets())
    //     if (statusCreate === 'success') {
    //         swal({
    //             title: 'Your Pet has been Deleted!',
    //             icon: 'success',
    //             button: 'Ok!',
    //         })
    //         dispatch(cleanStatusCreate())
    //     }
    // }, [statusCreate])

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

    const handleDelete = (e, params) => {
        params.row.status = 'Deleted'
        const _id = params.row._id
        const { id, ...values } = params.row

        dispatch(editPetAdoption({ _id, values }))
    }
    // const handleEdit = (e, params) => {
    //     setRenderControl({
    //         ...renderControl,
    //         shelterEditPetInfo: petsAdoption[params.id - 1],
    //         shelterPets: false,
    //         shelterEditPet: true,
    //     })
    // }

    const handleChangeStatus = (e, params) => {
        e.stopPropagation()
        const { _id } = params.row
        Swal.fire({
            title: 'Do you want to change status of this user?',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(setNewAdmin(id))
                handleUpdate(id)
            }
        })
    }

    const columns = [
        {
            field: 'avatar',
            headerName: '',
            editable: true,
            width: 60,
            renderCell: (cell) =>
                cell.value ? (
                    <Avatar src={cell.value} />
                ) : (
                    <Avatar />
                ),
        },
        {
            field: 'nickname',
            headerName: 'Nickname',
            editable: true,
            flex: 1,
        },
        {
            field: 'name',
            headerName: 'Name',
            editable: true,
            flex: 1,
        },
        {
            field: 'email',
            headerName: 'Email',
            editable: true,
            flex: 1,
        },
        {
            field: 'status',
            headerName: 'Status',
            editable: true,
            width: 150,
        },
        {
            field: 'admin',
            headerName: 'Admin',
            editable: true,
            width: 80,
            align: 'center',
            renderCell: (cell) =>
                cell.value ? (
                    <AiFillCheckCircle color="green" />
                ) : (
                    <AiFillCloseCircle color="red" />
                ),
        },
        {
            field: 'deleteAction',
            headerName: 'Delete',
            align: 'center',
            sortable: false,
            renderCell: (params) =>
                allUsers?.id !== params.row.id ? (
                    <IconButton
                        sx={{
                            backgroundColor: '#f21a1a',
                            '&:hover': { backgroundColor: '#ff6d6d' },
                        }}
                        onClick={(e) => handleDelete(e, params)}
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
                        onClick={(e) => handleChangeStatus(e, params)}
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
