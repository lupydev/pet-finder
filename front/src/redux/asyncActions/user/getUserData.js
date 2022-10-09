import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getUserData = createAsyncThunk('users/', async () => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { token: user.token } }
    try {
        return await axios.get(`${API_ROUTE}/users/${user.id}`, config)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetUserData = {
    [getUserData.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getUserData.fulfilled]: (state, action) => {
        state.userData = action.payload.data.user
        state.status = 'success'
    },
    [getUserData.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
