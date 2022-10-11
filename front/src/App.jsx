import React from 'react';
import Layout from './layout/Layout'
import Routing from './routing/Routing'
import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routing />
            </Layout>
        </BrowserRouter>
    )
}

export default App
