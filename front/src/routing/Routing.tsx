import { ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Found from '../pages/found/Found'
import Home from '../pages/home/Home'
import ContactForm from '../components/contact-form/ContactForm'
import RegisterForm from '../components/auth/RegisterForm'
import Login from '../components/auth/Login'
import PetBrowser from '../components/petBrowser/PetBrowser'
import About from '../pages/AboutUs/About'

const Routing = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/foundPets" element={<PetBrowser title='Found' color='primary' />} />
            <Route path="/lostPets" element={<PetBrowser title='Lost' color='secondary'  />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/signin" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default Routing
