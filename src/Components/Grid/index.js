import PropTypes from 'prop-types'

import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-template: ${({ template }) => template || '1fr / 1fr'};
    background-color: ${({ theme, color }) => color || theme.colors.background};
`

Grid.propTypes = {
    template: PropTypes.string,
    color: PropTypes.string,
}

Grid.defaultProps = {
    template: '1fr / 1fr',
}

export default Grid
