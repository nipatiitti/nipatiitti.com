import { extendTheme, theme as baseTheme, withDefaultColorScheme, withDefaultVariant } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

export const customTheme = {
    config: {
        initialColorMode: 'dark',
        useSystemColorMode: false,
    },
    styles: {
        global: {
            'html, body': {
                margin: 0,
                padding: 0,
                minHeight: '100vh',
                minWidth: '100vw',
                backgroundColor: '#020314',
                fontFamily: '"Roboto", sans-serif',
                overflowX: 'hidden',
                fontSize: ['0.6em', 'sm', 'md', 'lg', 'xl'],
            },
        },
    },
    colors: {
        background: '#020314',

        highlight: '#E032E6',
        highlight_50: 'rgba(224, 50, 230, 0.5)',
        highlight_20: 'rgba(224, 50, 230, 0.2)',

        primary: '#087CA7',
        primary_50: 'rgba(8, 125, 167, 0.5)',
        primary_20: 'rgba(8, 125, 167, 0.2)',

        primary_light: '#05B2DC',
        primary_light_50: 'rgba(5, 177, 220, 0.5)',

        secondary: '#E6C229',
        secondary_50: 'rgba(230, 195, 41, 0.5)',
        secondary_20: 'rgba(230, 195, 41, 0.2)',

        white_5: 'rgba(255, 255, 255, 0.05)',
    },
    breakpoints: createBreakpoints({
        sm: '30em',
        md: '48em',
        lg: '62em',
        xl: '80em',
        '2xl': '96em',
    }),
}
export type CustomTheme = typeof customTheme

const theme = extendTheme(
    customTheme,
    withDefaultColorScheme({ colorScheme: 'teal' }),
    withDefaultVariant({ variant: 'outline' }),
    baseTheme
)

export default theme
