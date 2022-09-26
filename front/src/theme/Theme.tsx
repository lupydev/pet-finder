import { createContext, useContext, useMemo, useState } from 'react'
import {
    ThemeProvider,
    StyledEngineProvider,
    CssBaseline,
    createTheme,
} from '@mui/material'
import React, { ReactNode, FC } from "react";
// import { createTheme } from '@mui/material/styles'

export const useThemeContext = () => useContext(ThemeContext)

const ThemeContext = createContext({})

interface Props {
    children?: ReactNode
    // any props that come into the component
}

 const Theme: FC<Props> = ( {children} ) => {
    const [mode, setMode] = useState('light')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        []
    )

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    primary: {
                        main: '#357ABD',
                        dark:'#194067'
                    },
                    secondary: {
                        main: '#F16C1F',
                        dark:'#DD6F10',
                        light:'#FEF0E9',
                    },
                },
            }),
        [mode]
    )

    return (
        <StyledEngineProvider injectFirst>
            <ThemeContext.Provider value={{ colorMode, theme }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </StyledEngineProvider>
    )
}

export default Theme;