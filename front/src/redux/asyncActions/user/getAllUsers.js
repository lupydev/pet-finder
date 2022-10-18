import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getAllUsers = createAsyncThunk('users/getAll', async () => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { token: user.token } }

    try {
        return await axios.get(`${API_ROUTE}/users`, config)
    } catch (err) {
        console.log(err);
    }
})

export const extraGetAllUsers = {
    [getAllUsers.pending]: (state, action) => {
        state.statusUsers = 'loading'
    },
    [getAllUsers.fulfilled]: (state, action) => {
        if (action.payload?.data.ok) {
            state.allUsers = action.payload.data.allUsers
        } else {
            state.allUsers = []
        }
        state.statusUsers = 'success'
    },
    [getAllUsers.rejected]: (state, action) => {
        state.statusUsers = 'failed'
        console.log('falied')
    },
}
