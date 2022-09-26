import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Home
            <Link to="/found">Testeando router</Link>
            <Link to="/form">Testeando form</Link>
            <img src='https://res.cloudinary.com/diyk4to11/image/upload/v1664207629/Imagenes%20Dise%C3%B1o%20UX/Logo/Pet_qcvo4b.png' />
        </div>
    )
}

export default Home
