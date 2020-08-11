import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import styled from 'styled-components'

import Project from './Project'
import Grid from '../../Components/Grid'
import BaseContainer from '../../Components/Container'
import { P } from '../../Components/Text'

const Container = styled(BaseContainer)`
    width: calc(100% - 4em);
    max-width: 81em;
    height: 100%;
    overflow-y: auto;
    padding: 0 2em 2em 2em;
`

const WrapperContainer = styled(BaseContainer)`
    padding-top: 2em;
    width: 100%;
    height: calc(100% - 7em);
`

const Main = styled(Grid)`
    grid-gap: 1em;

    grid-template-columns: 20em, 2em, 20em;

    @supports (grid-template-columns: repeat(var(--repeat, auto-fit), minmax(20em, 1fr))) {
        grid-template-columns: repeat(var(--repeat, auto-fit), minmax(25em, 1fr));
    }

    @media screen and (min-width: 81em) {
        --repeat: 3;
    }
`

const Portfolio = ({ projects }) => (
    <WrapperContainer content="flex-start">
        <P>
            Here are some of my own hobby projects which can also be found from my
            <a href="https://github.com/nipatiitti" target="_" style={{ marginLeft: '0.5em' }}>
                github
            </a>
            .
        </P>
        <Container content="flex-start" items="stretch">
            <Main>
                {projects.map(({ name, description, src, href, id }) => (
                    <Project key={id} name={name} description={description} src={src} href={href} />
                ))}
            </Main>
        </Container>
    </WrapperContainer>
)

Portfolio.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = ({ projects }) => ({
    projects,
})

export default connect(mapStateToProps)(Portfolio)
