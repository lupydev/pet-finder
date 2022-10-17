import { createContext, useContext, useMemo, useState } from 'react'
import {
    ThemeProvider,
    StyledEngineProvider,
    CssBaseline,
    createTheme,
} from '@mui/material'
import React, { ReactNode, FC } from 'react'
// import { createTheme } from '@mui/material/styles'

export const useThemeContext = () => useContext(ThemeContext)

const ThemeContext = createContext({})

const Theme = ({ children }) => {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#357ABD',
                dark: '#194067',
                light: '#9CC0DF',
            },
            secondary: {
                main: '#F16C1F',
                dark: '#DD6F10',
                light: '#FEF0E9',
            },
            terciary: {
                main: '#2eaa2a',
                dark: '#197003',
                light: '#b6eeba',
            },
        },
        typography: {
            htmlFontSize: 10,
            fontSize: 10,
            fontFamily: ['Roboto', 'Merriweather'].join(','),
        },
    })

    return (
        <StyledEngineProvider injectFirst>
            <ThemeContext.Provider value={{ theme }}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </ThemeContext.Provider>
        </StyledEngineProvider>
    )
}

export default Theme
