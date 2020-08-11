import React, { useState } from 'react'

import styled from 'styled-components'

import BaseIcon from '../Icon'
import { Phone, Computer } from '../MediaQuery'
import MenuItem from './MenuItem'
import Underline from '../Underline'
import PhoneMenu from './PhoneMenu'

const Icon = styled(BaseIcon)`
    padding: 0.5em;
    font-size: 2em;
    position: inherit;
    z-index: 2;
`

const Menu = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Phone>
                {open ? (
                    <Icon onClick={() => setOpen(false)} pointer>
                        close
                    </Icon>
                ) : (
                    <Icon onClick={() => setOpen(true)} pointer>
                        menu
                    </Icon>
                )}
                <PhoneMenu open={open} />
            </Phone>
            <Computer direction="row">
                <MenuItem to="/portfolio">portfolio</MenuItem>
                <MenuItem to="/contact">contact</MenuItem>
                <MenuItem to="/about">about</MenuItem>
                <Underline />
            </Computer>
        </>
    )
}

export default Menu
