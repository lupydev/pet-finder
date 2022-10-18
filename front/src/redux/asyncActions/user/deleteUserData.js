import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const deleteUserData = createAsyncThunk('/users/delete/', async (id) => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { token: user.token } }

    try {
        return await axios.delete(`${API_ROUTE}/users/delete/${id}`, config)
    } catch (err) {
        console.log(err)
    }
})

export const extraDeleteUserData = {
    [deleteUserData.pending]: (state) => {
        state.statusDelete = 'loading'
    },
    [deleteUserData.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            Toast.fire({
                icon: 'success',
                title: 'User deleted successfully',
            })
        } else {
            Toast.fire({
                icon: 'error',
                title: action.payload.data.msg,
            })
            console.log(action.payload.data)
        }

        state.statusDelete = 'success'
    },
    [deleteUserData.rejected]: (state) => {
        state.statusDelete = 'failed'
    },
}
