import Layout from './components/layout/Layout'
import Routing from './components/layout/routing/Routing'
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
