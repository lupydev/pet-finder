import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { googleLogout } from '@react-oauth/google'
// import { useNavigate } from 'react-router-dom'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const getUserData = createAsyncThunk('users/', async () => {
    const user = JSON.parse(window.localStorage.getItem('user'))

    const config = { headers: { token: user.token } }

    try {
        return await axios.get(`${API_ROUTE}/users/${user.id}`, config)
    } catch (err) {
        if (err.response.data.msg === 'Token not valid') {
            googleLogout()
            window.localStorage.removeItem('user')
        }
    }
})

export const extraGetUserData = {
    [getUserData.pending]: (state, action) => {
        state.status = 'loading'
    },
    [getUserData.fulfilled]: (state, action) => {
        if (action.payload?.data.ok) {
            state.userInfo = {
                ...state.userInfo,
                id: action.payload.data.user._id,
                isLogged:true,
                isAdmin:  action.payload.data.user.admin
            }
            state.userData = action.payload.data.user
        } else {
            state.userInfo.isLogged = false
            googleLogout()
            window.localStorage.removeItem('user')
        }
        state.status = 'success'
    },
    [getUserData.rejected]: (state, action) => {
        state.status = 'failed'
        console.log('falied')
    },
}
