import PropTypes from 'prop-types'

import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction || 'column'};
    justify-content: ${({ content }) => content || 'center'};
    align-items: ${({ items }) => items || 'center'};
    background-color: ${({ theme, color }) => color || theme.colors.background};
`

Container.propTypes = {
    direction: PropTypes.string,
    content: PropTypes.string,
    items: PropTypes.string,
    color: PropTypes.string,
}

Container.defaultProps = {
    direction: 'column',
    content: 'center',
    items: 'center',
}

export default Container
