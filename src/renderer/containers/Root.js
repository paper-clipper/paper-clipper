import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import store from '@paper/store'
import theme from '@paper-ui/theme'

import App from './App'

export default () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    )
}
