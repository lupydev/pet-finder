import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Found from '../pages/found/Found'
import Home from '../pages/home/Home'
import Form from '../components/form/Form'
import PetBrowser from '../components/petBrowser/PetBrowser'
const Routing = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/foundPets" element={<PetBrowser title='Found' color='primary' />} />
            <Route path="/lostPets" element={<PetBrowser title='Lost' color='secondary'  />} />
            <Route path="/form" element={<Form />} />
        </Routes>
    )
}

export default Routing
