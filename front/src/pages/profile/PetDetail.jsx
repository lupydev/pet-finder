import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'
import React, { useState } from 'react'
import PetEdit from './PetEdit'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../redux/asyncActions/pet/deletePetPost'
import Swal from 'sweetalert2'
import { editPet } from '../../redux/asyncActions/pet/editPet'

const PetDetail = ({ pets, handleCurrentPet, handleEditPost }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(editPet({id: pets._id, newData: { status: 'Deleted'}}))
                Swal.fire('Your post has been deleted!').then(() =>
                    window.location.reload()
                )
            }
        })
    }

    return (
        <Box>
            <Box
                component={Paper}
                sx={{ height: 400, width: 300, borderRadius: 5 }}
                elevation={5}
            >
                <Grid
                    container
                    direction="column"
                    textAlign="center"
                    spacing={2}
                >
                    <Grid item xs={6} sx={{ m: 2 }}>
                        <img
                            src={pets?.img[0]}
                            alt={pets?.name}
                            style={{
                                height: 180,
                                width: 200,
                                objectFit: 'cover',
                                borderRadius: 5,
                            }}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography gutterBottom variant="h5">
                            <b>{pets?.name}</b>
                        </Typography>
                        <Typography gutterBottom variant="body1">
                            <b>{pets?.description}</b>
                        </Typography>
                    </Grid>
                    <Grid>
                        <IconButton
                            size="large"
                            color="primary"
                            aria-label="edit"
                            onClick={() => handleEditPost(pets)}
                        >
                            <AiTwotoneEdit />
                        </IconButton>
                        <IconButton
                            size="large"
                            color="secondary"
                            aria-label="delete"
                            onClick={handleDelete}
                        >
                            <AiFillDelete />
                        </IconButton>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default PetDetail
