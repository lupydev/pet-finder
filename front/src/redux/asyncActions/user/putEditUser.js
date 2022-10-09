import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
export const API_ROUTE = import.meta.env.VITE_APP_API_ROUTE

export const putEditUser = createAsyncThunk(
    'users/putEditUser',
    async ({ id, newData }) => {
        try {
            return await axios.put(`${API_ROUTE}/users/update/${id}`, newData)
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
        state.userInfo = action.payload.data
    },
    [putEditUser.rejected]: (state, action) => {
        state.status = 'failed'
    },
}
