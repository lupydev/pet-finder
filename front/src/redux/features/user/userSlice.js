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
import { renewToken, extraRenewToken } from '../../asyncActions/user/renewToken'

import { googleLogout } from '@react-oauth/google'
import {
    putEditUser,
    extraPutEditUser,
} from '../../asyncActions/user/putEditUser'
import {getUserPets, extraGetUserPets} from '../../asyncActions/user/getUserPets'

const initialState = {
    userData: undefined,
    userPets: [],
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
        cleanPetsData: (state) => {
            state.userPets = []
        }
    },
    extraReducers: {
        ...extraCreateUser,
        ...extraLogin,
        ...extraGetUserData,
        ...extraGetUserPets,
        ...extraLoginGoogle,
        ...extraPutEditUser,
        ...extraRenewToken
    },
})

export { createUser, login, getUserData, getUserPets, loginGoogle, putEditUser, renewToken }

export const { userIsLogged, logout, cleanPetsData } = userSlice.actions

export default userSlice.reducer
