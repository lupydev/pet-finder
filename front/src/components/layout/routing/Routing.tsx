import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Found from '../../../pages/found/Found'
import Home from '../../../pages/home/Home'
import Form from '../../form/Form'
const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/found" element={<Found />} />
            <Route path="/form" element={<Form />} />
        </Routes>
    )
}

export default Routing
