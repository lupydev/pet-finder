import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { Toast } from '../../../utils/swalToasts'
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
        state.statusUpdate = 'loading'
    },
    [putEditUser.fulfilled]: (state, action) => {
        if (action.payload.data.ok) {
            Toast.fire({
                icon: 'success',
                title: 'User updated successfully',
            })
            state.userData = action.payload.data.userUpdated
        }else{
            Toast.fire({
                icon: 'error',
                title: 'Can not update the user',
            })
        }
        state.statusUpdate = 'success'
    },
    [putEditUser.rejected]: (state, action) => {
        state.statusUpdate = 'failed'
    },
}
