import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '../layout/theme'

import App from './App'

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    )
}
