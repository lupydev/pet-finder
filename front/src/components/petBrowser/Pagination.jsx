import { Pagination } from '@mui/material'
import React from 'react'

export const Paginationn = ({ page, setPage, max }) => {
    const handleChange = (event, page) => {
        setPage(page)
    }

    return (
        <Pagination
            sx={{ marginTop: '20px' }}
            count={Math.ceil(max)}
            page={page}
            onChange={handleChange}
            showLastButton
            showFirstButton
        />
    )
}
