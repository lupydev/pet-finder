import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { googleLogout } from '@react-oauth/google'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getUserById = createAsyncThunk('users/getUserById', async (id) => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { token: user.token } }

    try {
        return await axios.get(`${API_ROUTE}/users/${id}`, config)
    } catch (err) {
        console.log(err);
    }
})

export const extraGetUserById = {
    [getUserById.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getUserById.fulfilled]: (state, action) => {
        if (action.payload?.data.ok) {
            state.selectedUser = action.payload.data.user
        } else {
            console.log(action.payload?.data.errors)
        }
        state.status = 'success'
    },
    [getUserById.rejected]: (state, action) => {
        state.status = 'failed'
        console.log('falied')
    },
}
