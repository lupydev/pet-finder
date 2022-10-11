import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

/*
 no esta funcional aun
 */

export const getPetsById = createAsyncThunk('pets/', async (items) => {
    const pets = []
    try {
        await Promise.all(
            items.map((item) => {
                axios.get(`${API_ROUTE}/pets/${item}`)
                pets.push()
            })
        )
        return pets
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

        console.log(action.payload);

        // state.petsDetails = action.payload.data.pet
        state.status = 'success'
    },
    [getPetsById.rejected]: (state) => {
        state.status = 'failed'
    },
}
