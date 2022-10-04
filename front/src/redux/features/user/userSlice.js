import { createSlice } from '@reduxjs/toolkit'
import {
    extraGetUserInfo,
    getUserInfo,
} from '../../asyncActions/user/getUserInfo'

import {
    extraPutEditUser,
    putEditUser,
} from '../../asyncActions/user/putEditUser'

import { postUser, extraPostUser } from '../../asyncActions/user/postUser'

import {
    extraPostAuthLoginPassword,
    postAuthLoginPassword,
} from '../../asyncActions/user/postAuthLoginPassword'
import { postLogout, extraPostLogout } from '../../asyncActions/user/postLogout'

const initialState = {
    userInfo: undefined,
    isLogged: false,
    isAdmin: false,
    status: 'loading',
    error: '',
}

const userSlice = createSlice({
    name: 'user', // name of the state
    initialState,
    reducers: {},
    extraReducers: {
        ...extraGetUserInfo,
        ...extraPostUser,
        ...extraPutEditUser,
        ...extraPostAuthLoginPassword,
        ...extraPostLogout,
    },
})

export { getUserInfo, postUser, putEditUser, postAuthLoginPassword, postLogout }

export default userSlice.reducer
