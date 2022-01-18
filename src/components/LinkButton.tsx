import { Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import React, { FC } from 'react'

const LinkButton: FC<{ href: string }> = ({ href, children }) => {
    return (
        <Link href={href} passHref>
            <ChakraLink>{children}</ChakraLink>
        </Link>
    )
}

export default LinkButton
