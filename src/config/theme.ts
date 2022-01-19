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
                fontSize: ['sm', 'md', 'lg', 'xl'],
            },
        },
    },
    colors: {
        background: '#020314',

        highlight: '#E032E6',
        highlight_50: 'rgba(224, 50, 230, 0.5)',
        highlight_20: 'rgba(224, 50, 230, 0.2)',
        highlight_transparent: 'rgba(224, 50, 230, 0)', // Fix for safari
        // See https://stackoverflow.com/a/56548711/6378341

        primary: '#087CA7',
        primary_50: 'rgba(8, 125, 167, 0.5)',
        primary_20: 'rgba(8, 125, 167, 0.2)',
        primary_transparent: 'rgba(8, 125, 167, 0)', // Fix for safari

        primary_light: '#05B2DC',
        primary_light_50: 'rgba(5, 177, 220, 0.5)',
        primary_light_20: 'rgba(5, 177, 220, 0.2)',
        primary_light_transparent: 'rgba(5, 177, 220, 0)', // Fix for safari

        secondary: '#E6C229',
        secondary_50: 'rgba(230, 195, 41, 0.5)',
        secondary_20: 'rgba(230, 195, 41, 0.2)',
        secondary_transparent: 'rgba(230, 195, 41, 0)', // Fix for safari

        white_2: 'rgba(255, 255, 255, 0.02)',
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
