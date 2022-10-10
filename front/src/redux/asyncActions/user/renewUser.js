import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const login = createAsyncThunk('renew/', async ({ id, admin }) => {
    try {
        return await axios.post(`${API_ROUTE}/renew`, {
            id,
            admin,
        })
    } catch (err) {
        console.log(err)
    }
})

export const extraLogin = {
    [login.pending]: (state) => {
        state.status = 'loading'
    },
    [login.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            state.status = 'success'

            const user = {
                token: action.payload.data.token,
                id: action.payload.data.id,
                isLogged: true,
                admin: action.payload.data.admin,
                isGoogle: false,
            }

            state.userInfo = user

            window.localStorage.setItem('user', JSON.stringify(user))

        } else {
            Toast.fire({
                icon: 'error',
                title: action.payload.data.msg,
            })
        }
    },
    [login.rejected]: (state) => {
        state.status = 'failed'
        state.isLogged = false
    },
}
