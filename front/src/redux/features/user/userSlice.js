import { createSlice } from '@reduxjs/toolkit'
import { createUser, extraCreateUser } from '../../asyncActions/user/createUser'
import {
    getUserData,
    extraGetUserData,
} from '../../asyncActions/user/getUserData'
import { login, extraLogin } from '../../asyncActions/user/login'
import {
    loginGoogle,
    extraLoginGoogle,
} from '../../asyncActions/user/loginGoogle'

import { googleLogout } from '@react-oauth/google'

const initialState = {
    userData: undefined,
    userInfo: { token: '', id: '', isLogged: false, isAdmin: false },
    status: 'loading',
    createUserStatus: 'loading',
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

            googleLogout()

            window.localStorage.removeItem('user')
            state.userData = undefined
        },
    },
    extraReducers: {
        ...extraCreateUser,
        ...extraLogin,
        ...extraGetUserData,
        ...extraLoginGoogle,
    },
})

export { createUser, login, getUserData, loginGoogle }

export const { userIsLogged, logout } = userSlice.actions

export default userSlice.reducer
