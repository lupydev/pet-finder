import React, { createContext, ReactNode, useState } from 'react'

interface Props {
    children?: JSX.Element
}

export const AuthContext = createContext({})

export const AuthProvider: React.FC = ({ children }: Props) => {
    const [user, setUser] = useState({})

    console.log(user)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
