import React, { createContext, useState } from 'react'

interface Users {
    name: string
    password: string
}
interface Props {
    children: JSX.Element
    userProps: Users
}

export const AuthContext = createContext<Users>({} as Users)

export const AuthProvider = ({ children }: Props) => {
    const [user, setUser] = useState<Users>()

    console.log(user)

    const loginUser = (value: Users) => {
        setUser(value)
    }

    return (
        <AuthContext.Provider value={{ user, setUser, loginUser }}>
            {children}
        </AuthContext.Provider>
    )
}
