import React, { useEffect } from 'react'
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    IconButton,
    Paper,
    TextField,
} from '@mui/material'
import { TiDeleteOutline } from 'react-icons/ti'
import { Stack } from '@mui/system'
import { AiFillCamera } from 'react-icons/ai'

const UploadImages = ({ handleUpload, images, handleDeleteImg, loading }) => {
    return (
        <Grid item xs={6} bgcolor="#F0F8FF" borderRadius="8px" p='10px' >
            {images.length || loading ? (
                <Paper
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        p: 2,
                        mb:'10px'
                    }}
                    variant="outlined"
                >
                    {images?.map((elem, idx) => (
                        <Box
                            key={idx}
                            position="relative"
                            border="1px solid rgba(0, 0, 0, 0.2)"
                            borderRadius="8px"
                            overflow="hidden"
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
                                }}
                            >
                                <img src={elem} alt="Not found" height="100%" />
                            </Stack>
                        </Box>
                    ))}
                    {loading && <CircularProgress />}
                </Paper>
            ) : null}

            <Button
                id="image"
                name="image"
                variant="outlined"
                component="label"
                size="small"
                startIcon={<AiFillCamera />}
                sx={{ textTransform: 'none' }}
                onChange={(e) => handleUpload(e)}
            >
                Upload Images
                <input hidden accept="image/*" type="file" multiple />
            </Button>
        </Grid>
    )
}

export default UploadImages
