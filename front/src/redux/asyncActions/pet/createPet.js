import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const createPet = createAsyncThunk('pet/newPet', async (pet) => {

    try {
        return await axios.post(`${API_ROUTE}/pets/newPet`, pet)
    } catch (err) {
        console.log(err)
    }
})

export const extraCreatePet = {
    [createPet.pending]: (state) => {
        state.statusCreatePet = 'loading'
    },
    [createPet.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            state.statusCreatePet = 'success'
            Toast.fire({
                icon: 'success',
                title: 'Pet created successfully',
            })
        } else {
            Toast.fire({
                icon: 'error',
                title: action.payload.data.msg,
            })
        }
    },
    [createPet.rejected]: (state) => {
        state.statusCreatePet = 'failed'
    },
}
