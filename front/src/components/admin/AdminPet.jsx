import { DataGrid } from '@mui/x-data-grid'
import { IconButton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import LinearProgress from '@mui/material/LinearProgress'
import { HiOutlineTrash } from 'react-icons/hi'
import { AiFillEdit } from 'react-icons/ai'

export default function AdminPets({ renderControl, setRenderControl }) {
    const { LostPetsData, FoundPetsData } = useSelector((state) => state.pet)
    const dispatch = useDispatch()
    const [allPets, setAllPets] = useState([])
    const [loading, setLoading] = useState(true)
    

    useEffect(() => {
        dispatch(getPets('Lost'))
        dispatch(getPets('Found'))
    }, [])

    useEffect(() => {
        if (
            Object.entries(LostPetsData).length > 0 &&
            Object.entries(FoundPetsData).length > 0
        ) {
            setAllPets([...FoundPetsData.pets, ...LostPetsData.pets])
        }
    }, [LostPetsData, FoundPetsData])

    useEffect(() => {
        allPets.length > 0 && setLoading(false)
    }, [allPets])
        

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

    const rows = allPets?.map((pet, index) => ({
        _id: pet._id,
        id: index + 1,
        name: pet.name,
        specie: pet.species.name,
        breed: pet.breed.name,
        gender: pet.gender,
        size: pet.size,
        age: pet.age,
        color: pet.color,
        type: pet.type,
        location: pet.location.country,
        status: pet.status,
        meet: pet.meet,
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
            field: 'name',
            headerName: 'Name',
            editable: true,
        },
        {
            field: 'specie',
            headerName: 'Specie',
            editable: true,
        },
        {
            field: 'breed',
            headerName: 'Breed',
            editable: true,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            editable: true,
        },
        {
            field: 'size',
            headerName: 'Size',
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            editable: true,
        },
        {
            field: 'color',
            headerName: 'Color',
            editable: true,
        },
        {
            field: 'type',
            headerName: 'Type',
            editable: true,
        },
        {
            field: 'location',
            headerName: 'Location',
            editable: true,
        },
        {
            field: 'status',
            headerName: 'Status',
            editable: true,
        },
        {
            field: 'meet',
            headerName: 'Reunited',
            editable: true,
        },
        {
            field: 'deleteAction',
            headerName: 'Delete',

            align: 'center',
            sortable: false,
            renderCell: (params) =>
                allPets?.id !== params.row.id ? (
                    <IconButton
                        sx={{ backgroundColor: '#f21a1a', '&:hover': {backgroundColor: '#ff6d6d' }}}
                        onClick={(e) => handleDelete(e, params)}
                        size="small"
                    >
                       < HiOutlineTrash color='white' />
                    </IconButton>
                ) : null,
        },
        {
            field: 'editAction',
            headerName: 'Edit',

            align: 'center',
            sortable: false,
            renderCell: (params) =>
                allPets?.id !== params.row.id  ? (
                    <IconButton
                        sx={{ backgroundColor: '#3981BF', '&:hover': {backgroundColor: '#9CC0DF' }}}
                        onClick={(e) => handleEdit(e, params)}
                        size="small"
                    >
                       < AiFillEdit color='white' />
                    </IconButton>
                ) : null,
        },
    ]

    return (
        allPets.length > 0 && (
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
    )
}
