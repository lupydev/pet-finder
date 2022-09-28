import { ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Found from '../pages/found/Found'
import Home from '../pages/home/Home'
import ContactForm from '../components/contact-form/ContactForm'
import RegisterForm from '../components/auth/RegisterForm'
import Login from '../components/auth/Login'

const Routing = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/found" element={<Found />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/signin" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}

export default Routing
