import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getUserInfo = createAsyncThunk('auth/getUserInfo', async () => {
    const token = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { Authorization: `Bearer ${token}` } }
    try {
        return await axios.get(`${API_ROUTE}/auth/userInfo`, config)
    } catch (err) {
        console.log(err)
    }
})

export const extraGetUserInfo = {
    [getUserInfo.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getUserInfo.fulfilled]: (state, action) => {
        state.status = 'success'
        state.userInfo = action.payload.data
        state.isAdmin = action.payload.data.isAdmin
        state.isLogged = true
    },
    [getUserInfo.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
