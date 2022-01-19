import { Center, Flex, Heading, Text as ChakraText, TextProps } from '@chakra-ui/react'
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
    padding: 0 2rem;

    scroll-snap-align: center;
`

/*

Example of GPU and paint optimizing these,
but they don't look quite as good as the background-position versions.

const BaseGradient = styled.div`
height: 400vh;
width: 400vw;
position: absolute;
z-index: 0;
will-change: transform;
`

const MovingGradient1 = styled(BaseGradient)`
background: radial-gradient(
    ellipse at top,
    ${({ theme }) => theme.colors.highlight_50},
    ${({ theme }) => theme.colors.highlight_transparent} 37%
    ),
    radial-gradient(
        ellipse at bottom,
        ${({ theme }) => theme.colors.primary_light_50},
        ${({ theme }) => theme.colors.primary_light_transparent} 37%
        );
        
        animation: gradient linear 30s infinite;
        
        @keyframes gradient {
            0% {
                transform: rotate(0deg) translateX(-40%);
            }
            50% {
                transform: rotate(360deg) translateX(40%);
            }
            100% {
                transform: rotate(720deg) translateX(-40%);
            }
        }
        `
        
        const MovingGradient2 = styled(BaseGradient)`
        background: radial-gradient(
            ellipse at top,
            ${({ theme }) => theme.colors.secondary_50},
            ${({ theme }) => theme.colors.secondary_transparent} 37%
            ),
            radial-gradient(
                ellipse at bottom,
                ${({ theme }) => theme.colors.primary_50},
                ${({ theme }) => theme.colors.primary_transparent} 37%
                );
                
                animation: gradient2 linear 30s infinite;
                
                @keyframes gradient2 {
                    0% {
                        transform: rotate(0deg) translateX(-40%);
                    }
                    25% {
                        transform: rotate(-90deg) translateX(40%);
                    }
                    50% {
                        transform: rotate(-180deg) translateX(-40%);
                    }
                    75% {
                        transform: rotate(-270deg) translateX(40%);
                    }
                    100% {
                        transform: rotate(-360deg) translateX(-40%);
                    }
                }
                `
                
                */
const BaseGradient = styled.div`
    --rectangle-side: calc(100vh + 100vw);
    height: var(--rectangle-side);
    width: var(--rectangle-side);
    position: absolute;
`

const MovingGradient1 = styled(BaseGradient)`
    background: radial-gradient(
            ellipse at top,
            ${({ theme }) => theme.colors.highlight_50},
            ${({ theme }) => theme.colors.highlight_transparent} 37%
        ),
        radial-gradient(
            ellipse at bottom,
            ${({ theme }) => theme.colors.primary_light_50},
            ${({ theme }) => theme.colors.primary_light_transparent} 37%
        );

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
    background: radial-gradient(
            ellipse at top,
            ${({ theme }) => theme.colors.secondary_50},
            ${({ theme }) => theme.colors.secondary_transparent} 37%
        ),
        radial-gradient(
            ellipse at bottom,
            ${({ theme }) => theme.colors.primary_50},
            ${({ theme }) => theme.colors.primary_transparent} 37%
        );

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

const Text = (props: TextProps) => (
    <ChakraText as="span" color="gray.700" {...props}>
        {props.children}
    </ChakraText>
)

const HomePage: FC = () => {
    return (
        <Background id="home-page">
            <MovingGradient1 />
            <MovingGradient2 />
            <Flex direction="column" alignItems="flex-start" pos="relative">
                <Heading as="h1">
                    <Text color="highlight">Hi! </Text>
                    <Text>I&apos;m a </Text>
                    <Highlight>Developer</Highlight>
                </Heading>
                <Heading as="h2">
                    <Text>and</Text> <Text color="secondary">University</Text> <Text>student from</Text>{' '}
                    <Text color="primary_light">Finland</Text>
                </Heading>
                <Center mt="3rem" width="full">
                    <Button as="a" href="#about-page">
                        About me
                    </Button>
                </Center>
            </Flex>
        </Background>
    )
}

export default HomePage
