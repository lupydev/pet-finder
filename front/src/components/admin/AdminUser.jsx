import { DataGrid } from '@mui/x-data-grid'
import { Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import React,{ useEffect, useState } from 'react'
import LinearProgress from '@mui/material/LinearProgress'

export default function AdminUser({ renderControl, setRenderControl }) {
    //   const { allUsers } = useSelector((state) => state.pet)
    //   const [loading, setLoading] = useState(true)
    //   const dispatch = useDispatch()

    //   useEffect(() => {
    //     dispatch(getAllUsers())
    // }, [])

    //   useEffect(() => {
    //     console.log(allUsers)
    //   }, [allUsers])

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

    // const rows = petDetails?.map((user, index) => ({
    //     _id: user._id,
    //     name: user.fullname,
    //     email: user.email,
    //     admin: user.admin,
    //     status: user.status,
    // }))

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
            field: 'name',
            headerName: 'Name',

            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',

            editable: true,
        },

        {
            field: 'admin',
            headerName: 'Admin',

            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',

            editable: true,
        },
        {
            field: 'deleteAction',
            headerName: 'Delete',

            align: 'center',
            sortable: false,
            renderCell: (params) =>
                petsAdoption?.id !== params.row.id ? (
                    <Button
                        variant="contained"
                        color="error"
                        onClick={(e) => handleDelete(e, params)}
                        size="small"
                        style={{ width: '15px' }}
                    >
                        Delete
                    </Button>
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
        <>
            <DataGrid
                rows={[]}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                autoHeight={true}
            />
        </>
    )
}
