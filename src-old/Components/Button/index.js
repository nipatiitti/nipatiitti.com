import styled from 'styled-components'

const Button = styled.button`
    /* Normalizing code starts */
    display: block;
    z-index: 2;
    position: relative;
    appearance: none;
    margin: 0;
    padding: 0px;
    font-weight: normal;
    font-size: 1em;
    text-decoration: none;
    line-height: 2em;
    border: none;
    cursor: pointer;

    will-change: color, border-color;
    transition: color 0.2s ease-in, border-color 0.2s ease-in;

    &:focus {
        outline: none;
    }
    /* Normalizing code ends */

    background-color: transparent;
    color: ${({ theme }) => theme.colors.main};
    padding: 0.7em 2em;
    margin: 2em 1em;

    border: 2px solid ${({ theme }) => theme.colors.highlight};
    border-radius: 2em;

    ::after {
        content: '';
        z-index: -1;
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        border-radius: 2em;
        bottom: 0;
        background-color: ${({ theme }) => theme.colors.main};

        will-change: transform;
        transition: transform 0.1s linear;
        transform-origin: bottom center;
        transform: scaleY(0) scaleX(0.8);
    }

    &:hover,
    &:focus {
        border-color: ${({ theme }) => theme.colors.main};
        color: ${({ theme }) => theme.colors.background};

        ::after {
            transform: scaleY(1) scaleX(1);
        }
    }
`

const GhostButton = styled(Button)`
    border: none;
    border-radius: 0;
    padding: 0.2em 0.5em;
    color: ${({ theme }) => theme.colors.highlight};

    ::after {
        width: calc(100% - 1em);
        left: 0.5em;
        border-radius: 0;

        transition: transform 0.2s linear;
        transform: scaleY(0.05) scaleX(1);
    }

    &:hover,
    &:focus {
        color: ${({ theme }) => theme.colors.background};

        ::after {
            transform: scaleY(1) scaleX(1.2);
        }
    }
`

export { GhostButton }
export default Button
