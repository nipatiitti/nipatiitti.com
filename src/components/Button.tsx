import { ButtonProps, forwardRef } from '@chakra-ui/react'
import styled from 'styled-components'

const BaseButton = forwardRef<ButtonProps, 'div'>((props, ref) => <Button ref={ref} {...props} />)

const Button = styled(BaseButton)`
    padding: 0.5rem 1rem;
    margin: 0;
    position: relative;
    background-color: transparent;
    z-index: 1;
    font-size: 1rem;
    font-weight: bold;

    /* border: 7px solid ${({ theme }) => theme.colors.primary};
    border-image-slice: 1;
    border-image-source: linear-gradient(
        -45deg,
        ${({ theme }) => theme.colors.secondary} 10%,
        transparent 11%,
        transparent 89%,
        ${({ theme }) => theme.colors.primary} 90%
    );

    transition: all 1s ease-in-out; */

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        height: calc(100% + 10px);
        width: calc(100% + 10px);

        transition: all 0.2s ease-in-out;
        will-change: clip-path, top, left, height, width;

        background: linear-gradient(
            -45deg,
            ${({ theme }) => theme.colors.secondary} 0%,
            ${({ theme }) => theme.colors.primary} 100%
        );
    }

    &:hover::before,
    &:hover::after {
        top: -3px;
        left: -3px;
        height: calc(100% + 6px);
        width: calc(100% + 6px);
    }

    &::before {
        clip-path: polygon(0% 20px, 5px 20px, 5px 5px, 20px 5px, 20px 0%, 0% 0%);
    }

    &::after {
        clip-path: polygon(
            100% 100%,
            100% calc(100% - 20px),
            calc(100% - 5px) calc(100% - 20px),
            calc(100% - 5px) calc(100% - 5px),
            calc(100% - 20px) calc(100% - 5px),
            calc(100% - 20px) 100%
        );
    }

    &:hover::before {
        clip-path: polygon(0% 100%, 2px 100%, 2px 2px, 100% 2px, 100% 0%, 0% 0%);
    }

    &:hover::after {
        clip-path: polygon(
            100% 100%,
            100% 0%,
            calc(100% - 2px) 0%,
            calc(100% - 2px) calc(100% - 2px),
            0% calc(100% - 2px),
            0% 100%
        );
    }
`

export default Button
