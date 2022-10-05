import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import ContactForm from '../components/contact-form/ContactForm'
import RegisterForm from '../components/auth/RegisterForm'
import Login from '../components/auth/Login'
import PetBrowserContainer from '../pages/petBrowser/petBrowserContainer'
import About from '../pages/AboutUs/About'
import PetDetails from '../pages/petDetails/PetDetails'
import User from '../pages/user/User'
import Profile from '../pages/profile/Profile'
import { useDispatch, useSelector } from 'react-redux'
import isUserLogged from '../utils/isUserLogged'
import { getUserInfo } from '../redux/asyncActions/user/getUserInfo'
import { useEffect } from 'react'
import { userIsLogged } from '../redux/features/user/userSlice'
import PrivateRoute from './privateRoute/PrivateRoute'

const Routing = () => {
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.user)

    useEffect(() => {
        if (isUserLogged()) {
            // dispatch(getUserInfo())
            dispatch(userIsLogged())
        }
    }, [])

    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route
                path="/foundPets"
                element={<PetBrowserContainer title="Found" color="primary" />}
            />
            <Route path="/foundPets/:id" element={<PetDetails />} />
            <Route
                path="/lostPets"
                element={<PetBrowserContainer title="Lost" color="secondary" />}
            />
            <Route path="/lostPets/:id" element={<PetDetails />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/signin" element={<RegisterForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/aboutUs" element={<About />} />
            <Route element={<PrivateRoute isAllowed={userInfo.isLogged} />}>
                <Route path="/user" element={<User />} />
            </Route>
            <Route element={<PrivateRoute isAllowed={userInfo.isLogged} />}>
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    )
}

export default Routing
