import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const forgotPassword = createAsyncThunk('forgot-password/token', async (newPassword, token) => {

    const config = { headers: { token: token } }

    try {
        return await axios.put(`${API_ROUTE}/forgot-password`, newPassword, config)
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
