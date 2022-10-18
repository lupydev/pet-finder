import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const deletePetPost = createAsyncThunk('/pets/delete/', async (id) => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { token: user.token } }

    try {
        return await axios.delete(`${API_ROUTE}/pets/delete/${id}`, config)
    } catch (err) {
        console.log(err)
    }
})

export const extraDeletePetPost = {
    [deletePetPost.pending]: (state) => {
        state.statusDelete = 'loading'
    },
    [deletePetPost.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            Toast.fire({
                icon: 'success',
                title: 'Pet deleted successfully',
            })
        } else {
            Toast.fire({
                icon: 'error',
                title: action.payload.data.msg,
            })
        }

        state.statusDelete = 'success'
    },
    [deletePetPost.rejected]: (state) => {
        state.statusDelete = 'failed'
    },
}
