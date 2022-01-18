import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import Container from '../Container'

const Main = styled(Container)`
    position: absolute;
    z-index: 1;

    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateX(100%);

    will-change: transform;
    transition: transform 0.3s ease-in;

    ${({ open }) => open && 'transform: translateX(0);'}
`

const Item = styled(Link)`
    color: ${({ theme }) => theme.colors.highlight};
    text-decoration: none;
    font-size: 2em;
    font-weight: 300;
    margin: 1em 0;
    text-align: left;
`

const PhoneMenu = ({ open }) => (
    <Main open={open}>
        <Item to="/portfolio">PORTFOLIO</Item>
        <Item to="/contact">CONTACT</Item>
        <Item to="/about">ABOUT</Item>
    </Main>
)

PhoneMenu.propTypes = {
    open: PropTypes.bool.isRequired,
}

export default PhoneMenu
