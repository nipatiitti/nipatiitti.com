import React, { Component } from 'react'

import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link, withRouter } from 'react-router-dom'

import Underline from '../Underline'

const Item = styled(Link)`
    color: ${({ theme }) => theme.colors.main};
    text-decoration: none;
    font-size: 1.2em;
    font-weight: 300;
    padding: 0 1em;
    text-align: left;

    ${({ active }) =>
        // Must use string, otherwise will get annoying errors in console
        active === 'true' &&
        css`
            color: ${({ theme }) => theme.colors.highlight};
            font-weight: bold;

            & ~ ${Underline} {
                width: ${({ width }) => `${width}px`};
                transform: ${({ right, width }) => `translateX(-${right - width}px)`};
            }
        `}

    &:hover ~${Underline} {
        width: ${({ width }) => `calc(${width}px - 2em)`};
        transform: ${({ right, width }) => `translateX(calc(-${right - width}px - 1em))`};
        background-color: ${({ theme }) => theme.colors.main};
    }
`

class MenuItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 200,
            right: 0,
        }

        this.ref = React.createRef()
        this.resize = null
    }

    setWidth = () => {
        this.setState({
            width: this.ref.current.offsetWidth,
            right: window.innerWidth - this.ref.current.offsetLeft,
        })
    }

    componentDidMount = () => {
        this.resize = window.addEventListener('resize', this.setWidth)
        this.setWidth()
    }

    componentWillUnmount = () => {
        window.removeEventListener(this.resize)
    }

    componentDidUpdate = () => {
        const { width, right } = this.state

        if (
            this.ref.current.offsetWidth !== width ||
            window.innerWidth - this.ref.current.offsetLeft !== right
        ) {
            this.setWidth()
        }
    }

    render = () => {
        const {
            children,
            to,
            location: { pathname },
            index,
        } = this.props

        const { width, right } = this.state

        return (
            <Item
                ref={this.ref}
                to={to}
                active={(pathname === to).toString()}
                index={index}
                width={width}
                right={right}
            >
                {children.toUpperCase()}
            </Item>
        )
    }
}

MenuItem.propTypes = {
    index: PropTypes.number,
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
    children: PropTypes.string,
    to: PropTypes.string,
}

MenuItem.defaultProps = {
    index: 0,
    children: 'route',
    to: '/',
}

export default withRouter(MenuItem)
