import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const loginUser = (value) => {
        setUser(value)
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loginUser }}>
            {children}
        </AuthContext.Provider>
    )
}
