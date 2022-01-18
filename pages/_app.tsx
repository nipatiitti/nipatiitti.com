import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import theme, { customTheme } from '../src/config/theme'

function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <ThemeProvider theme={customTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </ChakraProvider>
    )
}

export default App
