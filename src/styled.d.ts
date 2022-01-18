import { CustomTheme } from './config/theme'

declare module 'styled-components' {
    export interface DefaultTheme extends CustomTheme {}
}
