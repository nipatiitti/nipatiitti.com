import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'

import Container from '../../Components/Container'
import { Span, H1 } from '../../Components/Text'
import Grid from '../../Components/Grid'

import Picture from '../../Assets/profile_picture.png'

const Main = styled(Grid)`
    height: calc(100% - 5em);
    width: 100%;
`

const ImgContainer = styled(Container)`
    align-items: flex-end;

    @media screen and (max-width: 56em) {
        align-items: center;
    }
`

const Img = styled.img`
    width: 100%;
    max-width: 28em;
    height: auto;
`

const Home = () => (
    <Main template="1fr / repeat(auto-fit, minmax(28em, 1fr))">
        <Container>
            <Fade right>
                <H1>Developer</H1>
                <Span>&amp; University student from Finland</Span>
            </Fade>
        </Container>
        <ImgContainer content="flex-end">
            <Fade left>
                <Img alt="My face" src={Picture} />
            </Fade>
        </ImgContainer>
    </Main>
)

export default Home
