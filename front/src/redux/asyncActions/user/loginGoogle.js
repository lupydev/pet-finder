import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const loginGoogle = createAsyncThunk('/loginGoogle', async (data) => {
    try {
        return await axios.post(`${API_ROUTE}/loginGoogle`, data)
    } catch (err) {
        console.log(err)
    }
})

export const extraLoginGoogle = {
    [loginGoogle.pending]: (state) => {
        state.status = 'loading'
    },
    [loginGoogle.fulfilled]: (state, action) => {
        state.status = 'success'
        console.log(action.payload.data)
        if (action.payload.data.ok) {
            let user = {
                token: action.payload.data.token,
                id: action.payload.data.id,
                isLogged: true,
                isAdmin: action.payload.data.admin,
                isGoogle: action.payload.data.google,
            }

            state.userInfo = user

            window.localStorage.setItem('user', JSON.stringify(user))
        } else {
            console.log(action.payload.data.msg)
        }
    },
    [loginGoogle.rejected]: (state) => {
        state.status = 'failed'
        state.isLogged = false
    },
}
