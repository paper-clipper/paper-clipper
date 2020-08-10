import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './layout/theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div>
                <h1>Hello, electron!</h1>
            </div>
        </ThemeProvider>
    )
}

export default App