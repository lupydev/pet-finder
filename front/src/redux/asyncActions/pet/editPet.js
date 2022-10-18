import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const editPet = createAsyncThunk(
    'pets/update/:id',
    async ({ id, newData }) => {
        const user = JSON.parse(window.localStorage.getItem('user'))

        const config = { headers: { token: user.token } }
        try {
            return await axios.put(
                `${API_ROUTE}/pets/update/${id}`,
                newData,
                config
            )
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraEditPet = {
    [editPet.pending]: (state) => {
        state.statusUpdate = 'loading'
    },
    [editPet.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            Toast.fire({
                icon: 'success',
                title: 'Pet updated successfully',
            })
        } else {
            Toast.fire({
                icon: 'error',
                title: action.payload.data.msg,
            })
        }
        state.statusUpdate = 'success'
    },
    [editPet.rejected]: (state) => {
        state.statusUpdate = 'failed'
    },
}
