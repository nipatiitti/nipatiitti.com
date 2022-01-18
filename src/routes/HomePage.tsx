import { Center, Heading, HStack, Text as ChakraText, TextProps, VStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import { Highlight } from '../components/CustomTexts'

const Background = styled(Center)`
    height: 100vh;
    width: 100vw;
    position: relative;
    overflow: hidden;
    flex-direction: column;

    scroll-snap-align: center;
`

const BaseGradient = styled.div`
    height: 200vh;
    width: 200vw;
    position: absolute;
`

const Text = (props: TextProps) => (
    <ChakraText as="text" color="gray.800" {...props}>
        {props.children}
    </ChakraText>
)

const MovingGradient1 = styled(BaseGradient)`
    background: radial-gradient(ellipse at top, ${({ theme }) => theme.colors.highlight_50}, transparent 37%),
        radial-gradient(ellipse at bottom, ${({ theme }) => theme.colors.primary_light_50}, transparent 37%);

    background-size: 300% 300%;
    animation: gradient linear 30s infinite;

    @keyframes gradient {
        0% {
            background-position: 20% 50%;
            transform: rotate(0deg);
        }
        50% {
            background-position: 80% 50%;
        }
        100% {
            background-position: 20% 50%;
            transform: rotate(720deg);
        }
    }
`

const MovingGradient2 = styled(BaseGradient)`
    background: radial-gradient(ellipse at top, ${({ theme }) => theme.colors.secondary_50}, transparent 37%),
        radial-gradient(ellipse at bottom, ${({ theme }) => theme.colors.primary_50}, transparent 37%);

    background-size: 300% 300%;
    animation: gradient2 linear 30s infinite;
    transform: rotate(180deg);

    @keyframes gradient2 {
        0% {
            background-position: 20% 50%;
            transform: rotate(0deg);
        }
        25% {
            background-position: 80% 50%;
        }
        50% {
            background-position: 20% 50%;
        }
        75% {
            background-position: 80% 50%;
        }
        100% {
            background-position: 20% 50%;
            transform: rotate(-360deg);
        }
    }
`

const HomePage: FC = () => {
    return (
        <Background id="home-page">
            <MovingGradient1 />
            <MovingGradient2 />
            <VStack alignItems="flex-start" pos="relative">
                <Heading as="h1">
                    <Highlight>Developer</Highlight>
                </Heading>
                <Heading as="h2">
                    <Text>and</Text> <Text color="secondary">University</Text> <Text>student from</Text>{' '}
                    <Text color="primary_light">Finland</Text>
                </Heading>
                <HStack>
                    <Button as="a" href="#about-page">
                        About me
                    </Button>
                </HStack>
            </VStack>
        </Background>
    )
}

export default HomePage
