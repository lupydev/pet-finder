import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getUserData = createAsyncThunk('users/', async () => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    try {
        return await axios.get(`${API_ROUTE}/users/?id:${user.id}&token:${user.token}`)
    } catch (err) {
        console.log(err)
    }

    const token = JSON.parse(window.localStorage.getItem('user'))

    // -------- CON CONFIG --------
    // const config = { headers: { Authorization: `Bearer ${user.token}` } }
    // try {
    //     return await axios.get(`${API_ROUTE}/users/${user.id}`, config)
    // } catch (err) {
    //     console.log(err)
    // }
    // ---------------------------
})

export const extraGetUserData = {
    [getUserData.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getUserData.fulfilled]: (state, action) => {
        state.status = 'success'
        state.userData = action.payload.data

    },
    [getUserData.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
