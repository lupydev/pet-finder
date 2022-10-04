import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const createUser = createAsyncThunk('users/create', async (user) => {
    try {
        return await axios.post(`${API_ROUTE}/users/create`, user)
    } catch (err) {
        console.log(err)
    }
})

export const extraCreateUser = {
    [createUser.pending]: (state, action) => {
        state.status = 'loading'
    },
    [createUser.fulfilled]: (state, action) => {
        state.status = 'success'
        state.userInfo = action.payload.data.newUser
    },
    [createUser.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
