import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getUserPets = createAsyncThunk('/userPets', async (id) => {
    try {
        return await axios.get(`${API_ROUTE}/pets/${id}`)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetUserPets = {
    [getUserPets.pending]: (state) => {
        state.status = 'loading'
    },
    [getUserPets.fulfilled]: (state, action) => {
        if (action.payload.data.pet !== undefined) {
            state.userPets.push(action.payload.data.pet)
            state.status = 'success'
        }
    },
    [getUserPets.rejected]: (state) => {
        state.status = 'failed'
    },
}
