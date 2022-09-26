import { useState } from 'react'
import { Button } from '@mui/material'
import Home from './pages/home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Found from './pages/found/Found'
import Form from './components/form/Form'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/found" element={<Found />} />
                <Route path="/form" element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
