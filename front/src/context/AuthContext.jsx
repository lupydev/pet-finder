import React, { createContext, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const loginUser = (value) => {
        setUser(value)
    }

    const registerUser = (values) => {
        const { nickname, password, email } = values
        try {
            const response = axios.post('http://localhost:PORT/users/create', {
                password,
                email,
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider
            value={{ user, setUser, loginUser, registerUser }}
        >
            {children}
        </AuthContext.Provider>
    )
}
