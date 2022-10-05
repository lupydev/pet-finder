import { createSlice } from '@reduxjs/toolkit'
import { createUser, extraCreateUser } from '../../asyncActions/user/createUser'
import {
    getUserInfo,
    extraGetUserInfo,
} from '../../asyncActions/user/getUserInfo'
import { login, extraLogin } from '../../asyncActions/user/login'

const initialState = {
    userData: undefined,
    userInfo: { token: '', id: '', isLogged: false, isAdmin: false },
    status: 'loading',
    error: '',
}

const userSlice = createSlice({
    name: 'user', // name of the state
    initialState,
    reducers: {
        userIsLogged: (state) => {
            state.userInfo.isLogged = true
        },
        logout: (state) => {
            state.userInfo = {
                token: '',
                id: '',
                isLogged: false,
                isAdmin: false,
            }
            state.status = 'loading'

            window.localStorage.removeItem('user')
        },
    },
    extraReducers: {
        ...extraCreateUser,
        ...extraLogin,
        ...extraGetUserInfo,
    },
})

export { createUser, login, getUserInfo }

export const { userIsLogged, logout } = userSlice.actions

export default userSlice.reducer
