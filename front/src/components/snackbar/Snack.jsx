import { Alert, Snackbar } from '@mui/material'
import React, { useState } from 'react'

const Snack = ({ isOpen = false, msg }) => {
    const [open, setOpen] = useState(isOpen)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }

        setOpen(false)
    }

    return (
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: '100%' }}
            >
                {msg}
            </Alert>
        </Snackbar>
    )
}

export default Snack
