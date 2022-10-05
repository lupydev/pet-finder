import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import Theme from './theme/Theme'
import { GoogleOAuthProvider } from '@react-oauth/google'

export const ID_CLIENT_GOOGLE = import.meta.env.VITE_APP_ID_CLIENT_GOOGLE

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Theme>
            <GoogleOAuthProvider clientId={ID_CLIENT_GOOGLE}>
                <App />
            </GoogleOAuthProvider>
        </Theme>
    </Provider>
)
