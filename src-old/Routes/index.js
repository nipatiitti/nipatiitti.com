/**
 * The Main class for this application. Includes different routes and routing rules
 * Author: Niilo Jaakkola <niilo.jaakkola@icloud.fi>
 */

import React from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'

import Portfolio from './Portfolio'
import Home from './Home'
import Container from '../Components/Container'

import Icon from '../Assets/icon.png'
import Menu from '../Components/Menu'

const Header = styled(Container)`
    height: 5em;
    width: 100%;
`

const CustomNavLink = styled(NavLink)`
    &:focus {
        border-bottom: 2px solid ${({ theme }) => theme.colors.highlight};
    }
`

const Img = styled.img`
    height: 4em;
    width: auto;
    margin: 0.5em;
`

const Main = () => (
    <Router>
        <Header direction="row" content="space-between">
            <CustomNavLink to="/">
                <Img src={Icon} alt="icon" />
            </CustomNavLink>
            <Menu />
        </Header>
        <Switch>
            <Route path="/portfolio" exact>
                <Portfolio />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    </Router>
)

const mapStateToProps = () => ({})

export default connect(mapStateToProps)(Main)
