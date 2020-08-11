import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledIcon = styled.i`
    cursor: ${({ pointer }) => (pointer ? 'pointer' : 'inherit')};
    color: ${({ theme, color }) => color || theme.colors.highlight};
    font-size: ${({ size }) => size};
`

const Icon = ({ children, size, color, onClick, className, pointer }) => (
    <StyledIcon
        pointer={pointer}
        className={`${className} material-icons`}
        onClick={onClick}
        size={size}
        color={color || undefined}
    >
        {children}
    </StyledIcon>
)

Icon.propTypes = {
    children: PropTypes.string.isRequired,
    size: PropTypes.string,
    pointer: PropTypes.bool,
    className: PropTypes.string,
    color: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onClick: PropTypes.func,
}

Icon.defaultProps = {
    className: '',
    size: '1.5em',
    color: false,
    pointer: false,
    onClick: () => {},
}

export default Icon
