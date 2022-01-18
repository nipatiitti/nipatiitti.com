import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import BaseContainer from '../../Components/Container'
import { H1 as BaseH1, Span as BaseSpan } from '../../Components/Text'

const Container = styled(BaseContainer)`
    position: relative;
    height: 15em;
    padding: 0 2em;
`

const Img = styled.img`
    height: calc(15em - 2px);
    position: absolute;
    z-index: 0;
    width: auto;
    max-width: 24em;
    border-radius: 4px;
`

const H1 = styled(BaseH1)`
    position: relative;
    z-index: 1;
    font-size: 3.2em;
`

const Span = styled(BaseSpan)`
    position: relative;
    z-index: 1;
    margin-bottom: 1em;
    text-align: center;
`

const Background = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: calc(100% - 2px);
    height: 100%;
    background-color: ${({ theme }) => `${theme.colors.background}c7`};
    border: 1px solid ${({ theme }) => theme.colors.main};
    border-radius: 4px;
`

const renderContent = (name, description, src) => (
    <Container content="flex-end">
        {src && <Img src={src} alt="Project preview" />}
        <Background />
        <H1>{name}</H1>
        <Span>{description}</Span>
    </Container>
)

const Project = ({ name, description, src, href }) =>
    href ? (
        <a target="_" href={href}>
            {renderContent(name, description, src)}
        </a>
    ) : (
        renderContent(name, description, src)
    )

Project.propTypes = {
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    name: PropTypes.string,
    description: PropTypes.string,
    src: PropTypes.string,
}

Project.defaultProps = {
    href: false,
    src: '',
    name: 'Project name',
    description: 'Project description',
}

export default Project
