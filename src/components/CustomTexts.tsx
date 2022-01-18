import { chakra } from '@chakra-ui/react'
import styled from 'styled-components'

export const Highlight = chakra(styled.span`
    color: ${({ theme }) => theme.colors.highlight};

    @supports (-webkit-text-stroke: 1px black) {
        font-family: Arial, Helvetica, sans-serif;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${({ theme }) => theme.colors.highlight};
    }

    font-size: 2.5em;
`)
