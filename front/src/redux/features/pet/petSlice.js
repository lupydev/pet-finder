import { createSlice } from '@reduxjs/toolkit'
import { createPet, extraCreatePet } from '../../asyncActions/pet/createPet'
import { editPet, extraEditPet } from '../../asyncActions/pet/editPet'
import { getPetById, extraGetPetById } from '../../asyncActions/pet/getPetById'
import { getPets, extraGetPets } from '../../asyncActions/pet/getPets'
import {
    getPetsBrowser,
    extraGetPetsBrowser,
} from '../../asyncActions/pet/getPetsBrowser'
import { getSpecies, extraGetSpecies } from '../../asyncActions/pet/getSpecies'
import { getBreeds, extraGetBreeds } from '../../asyncActions/pet/getBreeds'
import {
    deletePetPost,
    extraDeletePetPost,
} from '../../asyncActions/pet/deletePetPost'

const initialState = {
    LostPetsData: [],
    FoundPetsData: [],
    MeetPetsData: [],
    petDetail: undefined,
    petsDetails: [],
    species: [],
    breeds: [],
    status: 'loading',
    statusCreate: 'loading',
    statusSpecies: 'loading',
    statusUpdate: 'loading',
    statusDelete: 'loading',
    error: '',
}

const petSlice = createSlice({
    name: 'pet', // name of the state
    initialState,
    reducers: {
        cleanPetData: (state) => {
            state.LostPetsData = {}
            state.FoundPetsData = {}
            state.MeetPetsData = {}
            state.petDetail = undefined
            state.status = 'loading'
            state.statusCreate = 'loading'
            state.statusDelete = 'loading'
            state.statusSpecies = 'loading'
            state.statusUpdate = 'loading'
        },
        cleanBreeds: (state) => {
            state.breeds = []
        },
    },
    extraReducers: {
        ...extraCreatePet,
        ...extraGetPets,
        ...extraGetPetsBrowser,
        ...extraGetPetById,
        ...extraEditPet,
        ...extraGetSpecies,
        ...extraGetBreeds,
        ...extraDeletePetPost,
    },
})

export {
    createPet,
    getPets,
    getPetsBrowser,
    getPetById,
    editPet,
    getSpecies,
    getBreeds,
    deletePetPost,
}

export const { cleanPetData, cleanBreeds } = petSlice.actions
export default petSlice.reducer
