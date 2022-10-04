import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getPets = createAsyncThunk('pets/getAll/', async (type = {}) => {
    try {
        return await axios.get(`${API_ROUTE}/pets/getAll/${type}`)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetPets = {
    [getPets.pending]: (state) => {
        state.statusPets = 'loading'
    },
    [getPets.fulfilled]: (state, action) => {
        state.statusPets = 'success'
        action.payload.data.type === 'Lost'
            ? (state.LostPetsData = action.payload.data)
            : (state.FoundPetsData = action.payload.data)
    },
    [getPets.rejected]: (state) => {
        state.statusPets = 'failed'
    },
}
