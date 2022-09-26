import { useState } from 'react'
import { Button } from '@mui/material'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Found from './pages/found/Found'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/found" element={<Found />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
