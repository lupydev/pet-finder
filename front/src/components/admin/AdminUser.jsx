import { DataGrid } from '@mui/x-data-grid'
import { Button, IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress'
import { getAllUsers } from '../../redux/asyncActions/user/getAllUsers'
import { HiOutlineTrash } from 'react-icons/hi'

export default function AdminUser({ renderControl, setRenderControl }) {
    const dispatch = useDispatch()
    const { allUsers } = useSelector((state) => state.user)
    const [loading, setLoading] = useState(true)

    // useEffect(() =>{
    //     dispatch(getAllUsers())
    // },[])

    useEffect(() =>{
        allUsers.length > 0 && setLoading(false)
    },[allUsers])

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
        nickname: user.nickname,
        name: user.fullname,
        email: user.email,
        admin: user.admin,
        status: user.status,
    }))

    // const handleDelete = (e, params) => {
    //     params.row.status = 'Deleted'
    //     const _id = params.row._id
    //     const { id, ...values } = params.row

    //     dispatch(editPetAdoption({ _id, values }))
    // }
    // const handleEdit = (e, params) => {
    //     setRenderControl({
    //         ...renderControl,
    //         shelterEditPetInfo: petsAdoption[params.id - 1],
    //         shelterPets: false,
    //         shelterEditPet: true,
    //     })
    // }

    const columns = [
        {
            field: 'nickname',
            headerName: 'Nickname',
            editable: true,
            flex:1
        },
        {
            field: 'name',
            headerName: 'Name',
            editable: true,
            flex:1
        },
        {
            field: 'email',
            headerName: 'Email',
            editable: true,
            flex:1
        },

        {
            field: 'admin',
            headerName: 'Admin',
            editable: true,
            flex:1
        },
        {
            field: 'status',
            headerName: 'Status',
            editable: true,
            flex:1
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
        // {
        //     field: 'editAction',
        //     headerName: 'Edit',

        //     align: 'center',
        //     sortable: false,
        //     renderCell: (params) =>
        //         petsAdoption?.id !== params.row.id ? (
        //             <Button
        //                 variant="contained"
        //                 color="success"
        //                 onClick={(e) => handleEdit(e, params)}
        //                 size="small"
        //             >
        //                 Edit
        //             </Button>
        //         ) : null,
        // },
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
