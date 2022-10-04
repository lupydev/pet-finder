import { createSlice } from '@reduxjs/toolkit'
import { createUser, extraCreateUser } from '../../asyncActions/user/createUser'
import { getUserInfo, extraGetUserInfo } from '../../asyncActions/user/getUserInfo'
import { login, extraLogin } from '../../asyncActions/user/login'

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
    reducers: {
        userIsLogged: (state) => {state.isLogged = true},
        logout: (state) => {
            state.userInfo = undefined
            state.isLogged = false
            state.isAdmin = false
            state.status = 'loading'

            window.localStorage.removeItem('user')
            window.localStorage.removeItem('isAdmin')

        }
    },
    extraReducers: {
        ...extraCreateUser,
        ...extraLogin,
        ...extraGetUserInfo
    },
})

export { createUser, login ,getUserInfo, }

export const {userIsLogged,logout}= userSlice.actions

export default userSlice.reducer
