import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const forgotPassword = createAsyncThunk('forgot-password/token', async (token) => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { token: user.token } }


    try {
        return await axios.put(`${API_ROUTE}/forgot-password`, email, config)
    } catch (err) {
        console.log(err)
    }
})

export const extraForgotPassword = {
    [forgotPassword.pending]: (state, action) => {
        state.status = 'loading'
    },
    [forgotPassword.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            
            console.log(action.payload.data)
            
            Toast.fire({
                icon: 'success',
                title: `${action.payload.data.msg}`,
            })
        } else if (!action.payload.data.ok) {
            Toast.fire({
                icon: 'error',
                title: `${action.payload.data.msg}`,
            })
        }
        state.status = 'success'
    },
    [forgotPassword.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
