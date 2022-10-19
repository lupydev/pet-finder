import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const toggleUserAdmin = createAsyncThunk(
    'users/toggleUserAdmin',
    async ({ id, newData }) => {
        const user = JSON.parse(window.localStorage.getItem('user'))

        const config = { headers: { token: user.token } }
        try {

            return await axios.put(
                `${API_ROUTE}/users/update/${id}`,
                newData,
                config
            )
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraToggleUserAdmin = {
    [toggleUserAdmin.pending]: (state, action) => {
        state.statusDelete = 'loading'
    },
    [toggleUserAdmin.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            Toast.fire({
                icon: 'success',
                title: 'User updated successfully',
            })
        }else{
            Toast.fire({
                icon: 'error',
                title: 'Can not update the user',
            })
            console.log(action.payload.data.msg);
        }
        state.statusDelete = 'success'
    },
    [toggleUserAdmin.rejected]: (state, action) => {
        state.statusDelete = 'failed'
    },
}
