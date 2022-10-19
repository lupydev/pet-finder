import { DataGrid } from '@mui/x-data-grid'
import { IconButton, Stack, Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { getPets } from '../../redux/asyncActions/pet/getPets'
import LinearProgress from '@mui/material/LinearProgress'
import { HiOutlineTrash } from 'react-icons/hi'
import {
    AiFillCheckCircle,
    AiFillCloseCircle,
    AiFillEdit,
} from 'react-icons/ai'
import PetEdit from '../../pages/profile/PetEdit'
import { getPetById } from '../../redux/asyncActions/pet/getPetById'
import { deletePetPost } from '../../redux/asyncActions/pet/deletePetPost'
import Swal from 'sweetalert2'

export default function AdminPets({ value }) {
    const { petDetail, LostPetsData, FoundPetsData, statusDelete } =
        useSelector((state) => state.pet)
    const dispatch = useDispatch()
    const [allPets, setAllPets] = useState([])
    const [loading, setLoading] = useState(true)
    const [edit, setEdit] = useState(false)
    const [selectedPet, setSelectedPet] = useState(undefined)
    const [editButton, setEditButton] = useState(false)
    const [deleteButton, setDeleteButton] = useState(false)

    const handleEditClick = (pet) => {
        dispatch(getPetById(pet._id))
        setEditButton(true)
    }

    const handleDelete = (pet) => {
        dispatch(getPetById(pet._id))
        setDeleteButton(true)
    }

    const deletePet = (pet) => {
        Swal.fire({
            title: `Do you really want to Delete ${pet.name}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: 'Do not delete',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deletePetPost(pet._id))
            }
        })
        setDeleteButton(false)
    }

    useEffect(() => {
        if (statusDelete === 'success') {
            dispatch(getPets('Lost'))
            dispatch(getPets('Found'))
            setLoading(true)
        }
    }, [statusDelete])

    useEffect(() => {
        if (petDetail !== undefined) {
            if (editButton) {
                setEdit(!edit)
            }
            if (deleteButton) {
                deletePet(petDetail)
            }
            setSelectedPet(petDetail)
        }
    }, [petDetail])

    useEffect(() => {
        if (LostPetsData.length > 0 && FoundPetsData.length > 0) {
            setAllPets([...FoundPetsData, ...LostPetsData])
        }
    }, [LostPetsData, FoundPetsData])

    useEffect(() => {
        allPets.length > 0 && setLoading(false)
    }, [allPets])

    useEffect(() => {
        setEdit(false)
    }, [value])

    const rows = allPets?.map((pet, index) => ({
        _id: pet._id,
        id: index + 1,
        userId: pet.userId,
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

    const columns = [
        {
            field: 'name',
            headerName: 'Name',
            editable: false,
        },
        {
            field: 'specie',
            headerName: 'Specie',
            editable: false,
            renderCell: (cell) =>
                cell.value ? (
                    <Typography textTransform="capitalize" fontSize="16px">
                        {cell.value}
                    </Typography>
                ) : null,
        },
        {
            field: 'breed',
            headerName: 'Breed',
            editable: false,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            editable: false,
        },
        {
            field: 'size',
            headerName: 'Size',
            editable: false,
        },
        {
            field: 'age',
            headerName: 'Age',
            editable: false,
            width:60
        },
        {
            field: 'type',
            headerName: 'Type',
            editable: false,
        },
        {
            field: 'location',
            headerName: 'Location',
            editable: false,
            width:230
        },
        {
            field: 'status',
            headerName: 'Status',
            editable: false,
        },
        {
            field: 'meet',
            headerName: 'Reunited',
            editable: false,
            width: 80,
            align: 'center',
            renderCell: (cell) =>
                cell.value ? (
                    <AiFillCheckCircle color="green" size='26px'  />
                ) : (
                    <AiFillCloseCircle color="red" size='26px'  />
                ),
        },
        {
            field: 'deleteAction',
            headerName: 'Delete',

            align: 'center',
            sortable: false,
            renderCell: (params) =>
                allPets?.id !== params.row.id ? (
                    <IconButton
                        sx={{
                            backgroundColor: '#f21a1a',
                            '&:hover': { backgroundColor: '#ff6d6d' },
                        }}
                        onClick={() => handleDelete(params.row)}
                        size="small"
                    >
                        <HiOutlineTrash color="white" />
                    </IconButton>
                ) : null,
        },
        {
            field: 'editAction',
            headerName: 'Edit',

            align: 'center',
            sortable: false,
            renderCell: (params) =>
                allPets?.id !== params.row.id ? (
                    <IconButton
                        sx={{
                            backgroundColor: '#3981BF',
                            '&:hover': { backgroundColor: '#9CC0DF' },
                        }}
                        onClick={(e) => handleEditClick(params.row)}
                        size="small"
                    >
                        <AiFillEdit color="white" />
                    </IconButton>
                ) : null,
        },
    ]

    return edit ? (
        <Stack
            p="40px"
            width="100%"
            alignItems="center"
            boxShadow={4}
            sx={{ borderRadius: '0px 0px 10px 10px' }}
        >
            <PetEdit selectedPet={selectedPet} setEdit={setEdit} />
        </Stack>
    ) : (
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
