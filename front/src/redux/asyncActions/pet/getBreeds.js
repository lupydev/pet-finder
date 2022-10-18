import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getBreeds = createAsyncThunk('breeds/', async (species) => {
    try {
        return await axios.get(`${API_ROUTE}/breeds/getBreed/${species}`)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetBreeds = {
    [getBreeds.pending]: (state) => {
        state.status = 'loading'
    },
    [getBreeds.fulfilled]: (state, action) => {
        if (action.payload) {
            if (action.payload.data.ok) {
                state.status = 'success'
                state.breeds = action.payload.data.breeds
            }
        }
    },
    [getBreeds.rejected]: (state) => {
        state.status = 'failed'
    },
}
