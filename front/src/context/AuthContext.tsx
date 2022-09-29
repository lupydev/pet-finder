import React, { createContext, ReactNode, useState } from 'react'

interface Users {
    name: string
    password: string
}
interface Props {
    children: JSX.Element
}

export const AuthContext = createContext({})

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<Users>()

    const loginUser = (value: Users) => {
        setUser(value)
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loginUser }}>
            {children}
        </AuthContext.Provider>
    )
}
