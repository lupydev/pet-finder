import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
import Theme from './theme/Theme'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Theme>
            <App />
        </Theme>
    </Provider>
)
