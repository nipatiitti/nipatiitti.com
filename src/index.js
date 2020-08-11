import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './Config'

import App from './Routes'

const theme = {
    colors: {
        main: '#edf0ef',
        background: '#262829',
        highlight: '#7adecd',
    },
}

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
