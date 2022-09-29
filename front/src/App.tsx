import Layout from './components/layout/Layout'
import Routing from './routing/Routing'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Layout>
                    <Routing />
                </Layout>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
