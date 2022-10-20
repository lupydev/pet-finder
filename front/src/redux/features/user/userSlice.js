import { createSlice } from '@reduxjs/toolkit'
import { createUser, extraCreateUser } from '../../asyncActions/user/createUser'
import {
    getUserData,
    extraGetUserData,
} from '../../asyncActions/user/getUserData'
import {
    getUserById,
    extraGetUserById,
} from '../../asyncActions/user/getUserById'
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
import {
    toggleUserAdmin,
    extraToggleUserAdmin,
} from '../../asyncActions/user/toggleUserAdmin'
import {
    getAllUsers,
    extraGetAllUsers,
} from '../../asyncActions/user/getAllUsers'
import {
    deleteUserData,
    extraDeleteUserData,
} from '../../asyncActions/user/deleteUserData'
import {
    forgotPassword,
    extraForgotPassword,
} from '../../asyncActions/user/forgotPassword'
import {
    resetPassword,
    extraResetPassword,
} from '../../asyncActions/user/resetPassword'

const initialState = {
    userData: undefined,
    selectedUser: undefined,
    allUsers: [],
    userInfo: { token: '', id: '', isLogged: false, isAdmin: false },
    status: 'loading',
    statusUsers: 'loading',
    createUserStatus: 'loading',
    statusDelete: 'loading',
    statusUpdate: 'loading',
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
            state.statusUsers = 'loading'
            state.createUserStatus = 'loading'
            state.statusDelete = 'loading'
            state.statusUpdate = 'loading'

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
        ...extraPutEditUser,
        ...extraToggleUserAdmin,
        ...extraRenewToken,
        ...extraGetAllUsers,
        ...extraDeleteUserData,
        ...extraGetUserById,
        ...extraForgotPassword,
        ...extraResetPassword,
    },
})

export {
    createUser,
    login,
    getUserData,
    getUserById,
    getAllUsers,
    loginGoogle,
    putEditUser,
    toggleUserAdmin,
    renewToken,
    deleteUserData,
    forgotPassword,
    resetPassword,
}

export const { userIsLogged, logout, cleanPetsData } = userSlice.actions

export default userSlice.reducer
