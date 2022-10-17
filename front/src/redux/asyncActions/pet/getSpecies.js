import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getSpecies = createAsyncThunk('species/all/', async () => {
    try {
        return await axios.get(`${API_ROUTE}/species/all`)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetSpecies = {
    [getSpecies.pending]: (state) => {
        state.statusSpecies = 'loading'
    },
    [getSpecies.fulfilled]: (state, action) => {
        state.statusSpecies = 'success'
        state.species = action.payload.data.species
    },
    [getSpecies.rejected]: (state) => {
        state.statusSpecies = 'failed'
    },
}
