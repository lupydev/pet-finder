import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const deletePost = createAsyncThunk('/pets/delete/', async (id) => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { token: user.token } }
    try {
        return await axios.delete(`${API_ROUTE}/pets/delete/${id}`, config)
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
