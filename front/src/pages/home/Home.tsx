import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            Home
            <Link to="/found">Testeando router</Link>
            <Link to="/form">Testeando form</Link>
        </div>
    )
}

export default Home
