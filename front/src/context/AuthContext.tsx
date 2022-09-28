import React, { createContext, ReactNode, useState } from 'react'

interface Props {
    children?: JSX.Element
}

export const AuthContext = createContext({})

export const AuthProvider: React.FC = ({ children }: Props) => {
    const [test, setTest] = useState('Hola')
    console.log(test)
    return (
        <AuthContext.Provider value={{ test, setTest }}>
            {children}
        </AuthContext.Provider>
    )
}
