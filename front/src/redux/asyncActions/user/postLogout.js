import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const postLogout = createAsyncThunk('login/postLogout', async () => {
    try {
        return await axios.post(`${API_ROUTE}/auth/logout`)
    } catch (err) {
        console.log(err)
    }
})

export const extraPostLogout = {
    [postLogout.pending]: (state) => {
        state.status = 'loading'
    },
    [postLogout.fulfilled]: (state, action) => {
        state.status = 'success'
        state.isLogged = false
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('isAdmin')
        state.userInfo = undefined
    },
    [postLogout.rejected]: (state) => {
        state.status = 'failed'
        state.isLogged = true
    },
}
