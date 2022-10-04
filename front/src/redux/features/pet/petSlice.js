import { createSlice } from '@reduxjs/toolkit'
import { createPet, extraCreatePet } from '../../asyncActions/pet/createPet'
import { editPet, extraEditPet } from '../../asyncActions/pet/editPet'
import { getPetById, extraGetPetById } from '../../asyncActions/pet/getPetById'
import { getPets, extraGetPets } from '../../asyncActions/pet/getPets'

const initialState = {
    LostPetsData: [],
    FoundPetsData: [],
    petDetail: undefined,
    status: 'loading',
    error: ''
}

const petSlice = createSlice({
    name: 'pet', // name of the state
    initialState,
    reducers: {
        cleanPetData: (state) => {
            state.petsData = {}
            state.status = 'loading'
        },},
    extraReducers: {
        ...extraCreatePet,
        ...extraGetPets,
        ...extraGetPetById,
        ...extraEditPet
    },
})

export {createPet, getPets, getPetById, editPet}

export const {cleanPetData} = petSlice.actions
export default petSlice.reducer
