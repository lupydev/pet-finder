import { createSlice } from '@reduxjs/toolkit'
import { createPet, extraCreatePet } from '../../asyncActions/pet/createPet'
import { getPets, extraGetPets } from '../../asyncActions/pet/getPets'

const initialState = {
    petsData: [],
    status: 'loading',
    error: ''
}

const petSlice = createSlice({
    name: 'pet', // name of the state
    initialState,
    reducers: {
        cleanPetDetail: (state) => {
            state.petsData = {}
            state.status = 'loading'
        },},
    extraReducers: {
        ...extraCreatePet,
        ...extraGetPets
    },
})

export {createPet, getPets}

export const {} = petSlice.actions
export default petSlice.reducer
