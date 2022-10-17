import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const renewToken = createAsyncThunk('renew/', async () => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { token: user.token } }

    try {
        return await axios.post(`${API_ROUTE}/renew/`, {}, config)
    } catch (err) {
        console.log(err)
    }
})

export const extraRenewToken = {
    [renewToken.pending]: (state) => {
        state.status = 'loading'
    },
    [renewToken.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            state.status = 'success'

            const user = {
                token: action.payload.data.token,
                id: action.payload.data.id,
                isLogged: true,
                isAdmin: action.payload.data.admin
                    ? action.payload.data.admin
                    : false,
            }

            state.userInfo = { ...state.userInfo, ...user }

            window.localStorage.setItem('user', JSON.stringify(user))
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Error',
            })
        }
    },
    [renewToken.rejected]: (state) => {
        state.status = 'failed'
        state.isLogged = false
    },
}
