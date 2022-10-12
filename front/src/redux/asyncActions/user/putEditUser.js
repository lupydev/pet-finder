import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const putEditUser = createAsyncThunk(
    'users/putEditUser',
    async ({ id, newData }) => {
        const user = JSON.parse(window.localStorage.getItem('user'))

        const config = { headers: { token: user.token } }
        try {
            return await axios.put(
                `${API_ROUTE}/users/update/${id}`,
                newData,
                config
            )
        } catch (err) {
            console.log(err)
        }
    }
)

export const extraPutEditUser = {
    [putEditUser.pending]: (state, action) => {
        state.status = 'loading'
    },
    [putEditUser.fulfilled]: (state, action) => {
        state.status = 'success'
        console.log(action.payload.data)
        state.userData = action.payload.data.userUpdated
    },
    [putEditUser.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
