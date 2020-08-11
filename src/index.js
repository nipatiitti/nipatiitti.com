import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Config'

import App from './Routes'
import { getProjects } from './Config/Database'

const theme = {
    colors: {
        main: '#edf0ef',
        background: '#262829',
        highlight: '#7adecd',
    },
}

// Get projects first time and make sure the database module is included in the bundle
getProjects()

const MainComponent = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </PersistGate>
    </Provider>
)

ReactDOM.render(<MainComponent />, document.getElementById('app'))

module.hot.accept()
