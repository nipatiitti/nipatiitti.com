import { Center } from '@chakra-ui/react'
import React, { FC, useState } from 'react'
import styled from 'styled-components'
import LinkBox from '../components/LinkBox'

const Background = styled(Center)`
    height: 100vh;
    width: 100vw;
    position: relative;
    flex-direction: column;

    scroll-snap-align: center;
`

const AboutPage: FC = () => {
    const [alpha, setAlpha] = useState(1)

    return (
        <Background id="about-page">
            <LinkBox href="https://github.com/nipatiitti">testi testi</LinkBox>
            Jei
        </Background>
    )
}

export default AboutPage
