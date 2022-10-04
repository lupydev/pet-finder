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
        userIsLogged: (state) => {state.isLogged = true}
    },
    extraReducers: {
        ...extraCreateUser,
        ...extraLogin,
        ...extraGetUserInfo
    },
})

export { createUser, login ,getUserInfo, }

export const {userIsLogged}= userSlice.actions

export default userSlice.reducer
