import React, { useEffect } from 'react'
import { Box, CircularProgress, Grid, IconButton, Paper, TextField } from '@mui/material'
import { TiDeleteOutline } from 'react-icons/ti'

const UploadImages = ({ handleUpload, images, handleDeleteImg, loading }) => {
    return (
        <Grid item xs={6}>
            {/* agregar cloudinary widget */}

            <div style={{ margin: 10 }}>
                <TextField
                    fullWidth={true}
                    id="image"
                    name="image"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={(e) => handleUpload(e)}
                    size="small"
                />
            </div>
            {images.length ? (
                <Paper
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        p: 3,
                    }}
                    variant="outlined"
                >
                    {images?.map((elem, idx) => (
                        <Box key={idx} position="relative">
                            <IconButton
                                style={{
                                    position: 'absolute',
                                    margin: 1,
                                    right: 0,
                                }}
                                onClick={() => handleDeleteImg(elem)}
                            >
                                <TiDeleteOutline color="red" />
                            </IconButton>
                            <img
                                src={elem}
                                alt="Not found"
                                style={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: 4,
                                }}
                            />
                        </Box>
                    ))}
                    {loading && <CircularProgress />}
                </Paper>
            ) : null}
        </Grid>
    )
}

export default UploadImages
