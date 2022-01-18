import { Box, BoxProps, forwardRef } from '@chakra-ui/react'
import styled from 'styled-components'

const BaseButton = forwardRef<BoxProps, 'div'>((props, ref) => <Box ref={ref} {...props} />)

const Button = styled(BaseButton)`
    color: ${({ theme }) => theme.colors.highlight};
`

export default Button
