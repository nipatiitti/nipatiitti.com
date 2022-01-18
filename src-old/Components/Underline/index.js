import styled from 'styled-components'

const Underline = styled.div`
    background-color: ${({ theme }) => theme.colors.highlight};
    height: 3px;
    right: 0;
    width: 0;
    position: absolute;
    z-index: 1;
    top: 3.5em;
    will-change: transform, background-color;
    transform: translateX(0);
    transform: translateZ(0);
    transition: transform 0.2s ease-in, background-color 0.2s ease-in;
`

export default Underline
