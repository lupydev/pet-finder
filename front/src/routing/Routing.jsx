import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import ContactForm from '../components/contact-form/ContactForm'
import RegisterForm from '../components/auth/RegisterForm'
import Login from '../components/auth/Login'
import PetBrowserContainer from '../pages/petBrowser/petBrowserContainer' 
import About from '../pages/AboutUs/About'

const Routing = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/foundPets" element={<PetBrowserContainer title='Found' color='primary' />} />
            <Route path="/lostPets" element={<PetBrowserContainer title='Lost' color='secondary'  />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/signin" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutUs" element={<About />} />
        </Routes>
    )
}

export default Routing
