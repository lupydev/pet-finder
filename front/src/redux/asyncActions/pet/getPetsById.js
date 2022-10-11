import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

/*
 no esta funcional aun
 */

export const getPetsById = createAsyncThunk('pets/', async (items) => {
    const pets = []
    try {
        Promise.all(
            items.map((item) => {
                axios.get(`${API_ROUTE}/pets/${id}`)
                pets.push()
            })
        )
    } catch (err) {
        console.log(err)
    }
})

export const extraGetPetsById = {
    [getPetsById.pending]: (state) => {
        state.status = 'loading'
        state.openModal = true
    },
    [getPetsById.fulfilled]: (state, action) => {
        state.petDetail = action.payload.data.pet
        state.status = 'success'
    },
    [getPetsById.rejected]: (state) => {
        state.status = 'failed'
    },
}
