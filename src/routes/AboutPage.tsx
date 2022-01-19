import { Center, Flex, Heading, Text, TextProps, VStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import { FaGithubAlt, FaLinkedinIn } from 'react-icons/fa'
import styled, { useTheme } from 'styled-components'
import BuzzwordBingo from '../components/BuzzwordBingo'
import LinkBox from '../components/LinkBox'

const Background = styled(Center)`
    height: 100vh;
    width: 100vw;
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 0 2rem;

    scroll-snap-align: start;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: column;
    }
`

const Highlight: FC<TextProps> = ({ children, ...props }) => (
    <Text as="span" fontWeight="bold" {...props}>
        {children}
    </Text>
)

const Spacer = styled.hr`
    width: 100%;
    border: 1px solid gray;
    border-image: linear-gradient(
            to right,
            ${({ theme }) => theme.colors.primary_light_50},
            ${({ theme }) => theme.colors.secondary_50}
        )
        1;
`

const AboutPage: FC = () => {
    const { colors } = useTheme()

    return (
        <Background id="about-page">
            <VStack flex={2} alignItems="start">
                <Flex as="section" mr="1rem" justifyContent="flex-end" flex={1} flexDir="column">
                    <Heading as="h3">Did I catch your attention?</Heading>
                    <Text color="whiteAlpha.600" mt="5px">
                        That&apos;s good!
                    </Text>
                    <Text color="whiteAlpha.600" mt="5px">
                        Let me introduce myself: I&apos;m <Highlight color="primary_light">Niilo</Highlight>, a third
                        year engineering student at the{' '}
                        <Highlight color="primary_light">University of Tampere</Highlight>. I study{' '}
                        <Highlight color="whiteAlpha.800">Information Technology</Highlight> with my major being in{' '}
                        <Highlight color="secondary">Electronics and Embedded Systems</Highlight>.
                    </Text>
                    <Text color="whiteAlpha.600" mt="5px">
                        Despite my major, my roots are in the <Highlight color="highlight">Full Stack Web</Highlight>{' '}
                        while leaning a bit more to the front end side of the diagram. Occasionally I also dapple in the{' '}
                        <Highlight color="whiteAlpha.800">AI</Highlight> and{' '}
                        <Highlight color="whiteAlpha.800">DevOps</Highlight> domains with technologies like{' '}
                        <Highlight color="whiteAlpha.800">Tensorflow</Highlight> and{' '}
                        <Highlight color="whiteAlpha.800">AWS-CDK</Highlight>. I can write many languages but my
                        favorites and most fluents are <Highlight color="primary_light">TypeScript</Highlight>,{' '}
                        <Highlight color="secondary">C/C++</Highlight> and{' '}
                        <Highlight color="highlight">Python</Highlight>.
                    </Text>
                </Flex>
                <Spacer />
                <BuzzwordBingo />
            </VStack>
            <Flex flex={1} flexDir={['row', 'row', 'row', 'column']} alignItems="center" justifyContent="center">
                <LinkBox href="https://github.com/nipatiitti" aria-label="Check out my GitHub">
                    <FaGithubAlt color={colors.primary} fontSize="3rem" />
                </LinkBox>
                <LinkBox href="https://www.linkedin.com/in/nipatiitti/" aria-label="Check out my LinkedIn">
                    <FaLinkedinIn color={colors.primary} fontSize="3rem" />
                </LinkBox>
            </Flex>
        </Background>
    )
}

export default AboutPage
