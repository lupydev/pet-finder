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
        state.status = 'loading'
    },
    [getPets.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            action.payload.data.type === 'Lost'
                ? (state.LostPetsData = action.payload.data)
                : (state.FoundPetsData = action.payload.data)
        } else {
            console.log(action.payload.data.msg)
        }
        state.status = 'success'
    },
    [getPets.rejected]: (state) => {
        state.status = 'failed'
    },
}
