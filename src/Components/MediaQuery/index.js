import styled from 'styled-components'
import Container from '../Container'

const Phone = styled(Container)`
    display: none;

    @media screen and (max-width: 56em) {
        display: flex;
    }
`

const Computer = styled(Container)`
    @media screen and (max-width: 56em) {
        display: none;
    }
`

export { Phone, Computer }
