import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const createPet = createAsyncThunk(
    'pet/newPet',
    async (pet) => {
        try {
            console.log(API_ROUTE);
            return await axios.post(`${API_ROUTE}/pets/newPet`, pet)
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraCreatePet = {
    [createPet.pending]: (state) => {
        state.statusPets = 'loading'
    },
    [createPet.fulfilled]: (state, action) => {
        state.statusPets = 'success'
    },
    [createPet.rejected]: (state) => {
        state.statusPets = 'failed'
    },
}
