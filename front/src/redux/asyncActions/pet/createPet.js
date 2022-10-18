import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const createPet = createAsyncThunk('pet/newPet', async (pet) => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { token: user.token } }
    try {
        return await axios.post(`${API_ROUTE}/pets/newPet`, pet, config)
    } catch (err) {
        console.log(err)
    }
})

export const extraCreatePet = {
    [createPet.pending]: (state) => {
        state.statusCreate = 'loading'
    },
    [createPet.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            Toast.fire({
                icon: 'success',
                title: 'Pet created successfully',
            })
        } else {
            Toast.fire({
                icon: 'error',
                title: action.payload.data.msg,
            })
        }
        state.statusCreate = 'success'
    },
    [createPet.rejected]: (state) => {
        state.statusCreate = 'failed'
    },
}
