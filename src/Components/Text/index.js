import styled from 'styled-components'

const Span = styled.span`
    color: ${({ theme }) => theme.colors.main};
    font-size: 1.2em;
`

const P = styled.p`
    color: ${({ theme }) => theme.colors.main};
`
const H1 = styled.h1`
    color: ${({ theme }) => theme.colors.highlight};

    @supports (-webkit-text-stroke: 1px black) {
        font-family: Arial, Helvetica, sans-serif;
        -webkit-text-fill-color: ${({ theme }) => theme.colors.background};
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: ${({ theme }) => theme.colors.highlight};
    }

    font-size: 4em;
    margin: 0.1em;
`

export { Span, P, H1 }
