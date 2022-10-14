import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const deletePost = createAsyncThunk('/pets/delete/', async (id) => {
    try {
        return await axios.delete(`${API_ROUTE}/pets/delete/${id}`)
    } catch (err) {
        console.log(err)
    }
})

export const extraDeletePost = {
    [deletePost.pending]: (state) => {
        state.status = 'loading'
        state.openModal = true
    },
    [deletePost.fulfilled]: (state, action) => {
        state.petDetail = action.payload.data.pet
        state.status = 'success'
    },
    [deletePost.rejected]: (state) => {
        state.status = 'failed'
    },
}
