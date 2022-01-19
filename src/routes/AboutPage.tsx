import { Center, Flex, ListItem, UnorderedList, VStack } from '@chakra-ui/react'
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

const AboutPage: FC = () => {
    const { colors } = useTheme()

    return (
        <Background id="about-page">
            <VStack flex={2} alignItems="start">
                <Flex mr="1rem" alignItems="flex-end" flex={1}>
                    <UnorderedList fontWeight="light">
                        <ListItem>🎓 Studying engineering in Tampere University</ListItem>
                        <ListItem>⚙️ Majoring in embedded and SoC</ListItem>
                        <ListItem>🏭 I&apos;m Fullstack leaning to the front</ListItem>
                        <ListItem>⌨️ Favorite languages are JS/TS, C/C++, python</ListItem>
                        <ListItem>🔮 Devops with AWS-CDK and Docker</ListItem>
                        <ListItem>🌱 Constantly learning and growing</ListItem>
                    </UnorderedList>
                </Flex>
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
