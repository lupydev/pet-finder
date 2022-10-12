import React, { useEffect } from 'react'
import {
    Box,
    CircularProgress,
    Grid,
    IconButton,
    Paper,
    TextField,
} from '@mui/material'
import { TiDeleteOutline } from 'react-icons/ti'
import { Stack } from '@mui/system'

const UploadImages = ({ handleUpload, images, handleDeleteImg, loading }) => {
    return (
        <Grid item xs={6}>
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
                        <Box
                            key={idx}
                            position="relative"
                            border="1px solid rgba(0, 0, 0, 0.2)"
                            borderRadius="8px"
                        >
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
                            <Stack
                                alignItems="center"
                                justifyContent="center"
                                sx={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: 4,
                                }}
                            >
                                <img src={elem} alt="Not found" height="100%" />
                            </Stack>
                        </Box>
                    ))}
                    {loading && <CircularProgress />}
                </Paper>
            ) : null}
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
        </Grid>
    )
}

export default UploadImages
