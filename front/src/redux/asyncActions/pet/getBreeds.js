import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getBreeds = createAsyncThunk('breeds/', async (species) => {
    try {
        return await axios.get(`${API_ROUTE}/breeds`, species)
    } catch (err) {
        console.log(err)
        console.log('failed')
    }
})

export const extraGetBreeds = {
    [getBreeds.pending]: (state) => {
        state.statusBreeds = 'loading'
    },
    [getBreeds.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            state.statusBreeds = 'success'
            state.species = action.payload.data.breeds
        }
    },
    [getBreeds.rejected]: (state) => {
        state.statusBreeds = 'failed'
    },
}
