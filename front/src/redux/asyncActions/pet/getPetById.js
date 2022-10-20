import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getPetById = createAsyncThunk('/pets/:id', async (id) => {
    try {
        return await axios.get(`${API_ROUTE}/pets/${id}`)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetPetById = {
    [getPetById.pending]: (state) => {
        state.status = 'loading'
    },
    [getPetById.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            state.petDetail = action.payload.data.pet
        } else {
            Toast.fire({
                icon: 'error',
                title: action.payload.data.msg,
            })
        }
        state.status = 'success'
    },
    [getPetById.rejected]: (state) => {
        state.status = 'failed'
    },
}
