import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'

export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const createUser = createAsyncThunk('users/create', async (user) => {
    try {
        return await axios.post(`${API_ROUTE}/users/create`, user)
    } catch (err) {
        console.log(err)
    }
})

export const extraCreateUser = {
    [createUser.pending]: (state, action) => {
        state.createUserStatus = 'loading'
    },
    [createUser.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {

            let user = {
                token: action.payload.data.token,
                id: action.payload.data.id,
                isLogged: true,
            }
            state.userInfo = user

            window.localStorage.setItem('user', JSON.stringify(user))

            Toast.fire({
                icon: 'success',
                title: `${action.payload.data.msg} and signed in successfully`,
            })
        } else if (!action.payload.data.ok) {
            Toast.fire({
                icon: 'error',
                title: `${action.payload.data.msg}`,
            })
        }
        state.createUserStatus = 'success'

    },
    [createUser.rejected]: (state, action) => {
        state.createUserStatus = 'failed'
    },
}
