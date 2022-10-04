import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const editPet = createAsyncThunk(
    'pets/update/:id',
    async (data) => {
        try {
            const { id, newData } = data
            return await axios.put(`${API_ROUTE}/pets/update/${id}`, newData)
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraEditPet = {
    [editPet.pending]: (state) => {
        state.status = 'loading'
    },
    [editPet.fulfilled]: (state, action) => {
        state.status = 'success'
    },
    [editPet.rejected]: (state) => {
        state.status = 'failed'
    },
}
