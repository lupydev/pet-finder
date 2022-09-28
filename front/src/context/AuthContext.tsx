import React, { createContext, ReactNode, useState } from 'react'

interface Users {
    name: string
    password: string
}

interface State {
    user: Array<Users>
}
interface Props {
    children?: JSX.Element
}

export const AuthContext = createContext({})

export const AuthProvider: React.FC = ({ children }: Props) => {
    const [user, setUser] = useState<State['user']>([])

    console.log(user)

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}
