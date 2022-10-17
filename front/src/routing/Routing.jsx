import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/home/Home'
import ContactForm from '../components/contact-form/ContactForm'
import RegisterForm from '../components/auth/RegisterForm'
import Login from '../components/auth/Login'
import PetBrowserContainer from '../pages/petBrowser/petBrowserContainer'
import About from '../pages/AboutUs/About'
import PetDetails from '../pages/petDetails/PetDetails'
import Profile from '../pages/profile/Profile'
import { useDispatch, useSelector } from 'react-redux'
import isUserLogged from '../utils/isUserLogged'
import { getUserData } from '../redux/asyncActions/user/getUserData'
import { renewToken } from '../redux/asyncActions/user/renewToken'
import React, { useEffect } from 'react'
import { userIsLogged } from '../redux/features/user/userSlice'
import PrivateRoute from './privateRoute/PrivateRoute'
import { PublicationForm } from '../components/formPost/PublicationForm'
import Admin from '../pages/admin/Admin'

const Routing = () => {
    const dispatch = useDispatch()
    const { userInfo } = useSelector((state) => state.user)
    let location = useLocation()

    useEffect(() => {
        if (isUserLogged()) {
            dispatch(getUserData())
            dispatch(userIsLogged())
        }
    }, [])

    useEffect(() => {
        userInfo.isLogged && dispatch(renewToken())
    }, [location])

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
            <Route
                element={
                    <PrivateRoute
                        redirectPath={'/profile'}
                        isAllowed={!isUserLogged()}
                    />
                }
            >
                <Route path="/login" element={<Login />} />
            </Route>
            <Route path="/aboutUs" element={<About />} />
            <Route element={<PrivateRoute isAllowed={isUserLogged()} />}>
                <Route path="/profile" element={<Profile />} />
            </Route>
            <Route element={<PrivateRoute isAllowed={isUserLogged()} />}>
                <Route path="/createPost" element={<PublicationForm />} />
            </Route>
            <Route
                element={
                    <PrivateRoute
                        isAllowed={(isUserLogged() && userInfo.isAdmin) ? true : false}
                    />
                }
            >
                <Route path="/admin" element={<Admin />} />
            </Route>
            {/* <Route
                element={
                    <PrivateRoute
                        isAllowed={isUserLogged() && userInfo.isAdmin}
                    />
                }
            > */}
                <Route path="/admin" element={<Admin />} />
            {/* </Route> */}
        </Routes>
    )
}

export default Routing
