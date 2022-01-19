import { Flex, Text } from '@chakra-ui/react'
import React, { FC, Fragment, useMemo } from 'react'
import { useTheme } from 'styled-components'

const words = [
    'JavaScript',
    'React',
    'TypeScript',
    'VHDL',
    'HTML',
    'CSS',
    'C/C++',
    'Python',
    'Docker',
    'AWS-CDK',
    'AWS',
    'Git',
    'Arduino',
    'Linux',
    'Next.js',
    'Nest.js',
    'Node',
    'Express',
    'Redux',
    'GraphQL',
    'MongoDB',
    'NoSQL',
    'SQL',
    'Blockchain',
    'Solidity',
    'Tensorflow',
    'Keras',
    'Rust',
    'Java',
    'C#',
    'SoC',
    'Embedded',
    'WebAssembly',
    'WebGL',
    'socket.io',
    'firebase',
    'react-native',
    'API',
    'REST',
]

const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[array[i], array[j]] = [array[j], array[i]]
    }
}

shuffleArray(words)

const BuzzText: FC = ({ children }) => {
    const { colors } = useTheme()
    const colorsToPickFrom = useMemo(() => [colors.highlight, colors.secondary, colors.primary_light], [colors])

    const color = colorsToPickFrom[Math.floor(Math.random() * colorsToPickFrom.length)]

    return (
        <Text as="span" color={color} _hover={{}} m="2px">
            {children}
        </Text>
    )
}

const BuzzwordBingo: FC = () => {
    return (
        <Flex flexWrap="wrap">
            {words.map((word, index) => (
                <Fragment key={index}>
                    <BuzzText>{word}</BuzzText>
                    {index !== words.length - 1 && (
                        <Text m="2px" color="gray.600">
                            {'|'}
                        </Text>
                    )}
                </Fragment>
            ))}
        </Flex>
    )
}

export default BuzzwordBingo
