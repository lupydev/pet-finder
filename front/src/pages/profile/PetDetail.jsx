import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import { AiTwotoneEdit, AiFillDelete } from 'react-icons/ai'
import React, { useState } from 'react'
import PetEdit from './PetEdit'

const PetDetail = ({ pets }) => {
    const [petEdit, setPetEdit] = useState(false)

    const handleOpen = () => {
        setPetEdit(!petEdit)
    }

    const handleDelete = () => {
        console.log('eliminaste la publicacion')
    }

    return (
        <Box>
            {petEdit ? (
                <PetEdit />
            ) : (
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
                                src={pets?.img}
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
                                onClick={handleOpen}
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
            )}
        </Box>
    )
}

export default PetDetail
