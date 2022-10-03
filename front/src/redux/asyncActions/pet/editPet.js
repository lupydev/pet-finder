import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const editPet = createAsyncThunk(
    'pet/update/:id',
    async (data) => {
        try {
            const { _id, values } = data
            return await axios.put(`${API_ROUTE}/pet/update/${_id}`, values)
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraEditPet = {
    [editPet.pending]: (state) => {
        state.statusCreate = 'loading'
    },
    [editPet.fulfilled]: (state, action) => {
        state.statusCreate = 'success'
    },
    [editPet.rejected]: (state) => {
        state.statusCreate = 'failed'
    },
}
