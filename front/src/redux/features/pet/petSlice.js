import { createSlice } from '@reduxjs/toolkit'
import { createPet, extraCreatePet } from '../../asyncActions/pet/createPet'
import { editPet, extraEditPet } from '../../asyncActions/pet/editPet'
import { getPetById, extraGetPetById } from '../../asyncActions/pet/getPetById'
import { getPets, extraGetPets } from '../../asyncActions/pet/getPets'
import { getSpecies, extraGetSpecies } from '../../asyncActions/pet/getSpecies'
import { getBreeds, extraGetBreeds } from '../../asyncActions/pet/getBreeds'

const initialState = {
    LostPetsData: {},
    FoundPetsData: {},
    petDetail: undefined,
    species: [],
    breeds: [],
    status: 'loading',
    statusBreeds: 'loading',
    error: '',
}

const petSlice = createSlice({
    name: 'pet', // name of the state
    initialState,
    reducers: {
        cleanPetData: (state) => {
            state.LostPetsData= {}
            state.FoundPetsData= {}
            state.petDetail = undefined
            state.status = 'loading'
            state.statusBreeds = 'loading'
        },
    },
    extraReducers: {
        ...extraCreatePet,
        ...extraGetPets,
        ...extraGetPetById,
        ...extraEditPet,
        ...extraGetSpecies,
        ...extraGetBreeds,
    },
})

export { createPet, getPets, getPetById, editPet, getSpecies, getBreeds }

export const { cleanPetData } = petSlice.actions
export default petSlice.reducer
