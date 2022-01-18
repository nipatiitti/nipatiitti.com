/**
 * Root reducer
 */

import { combineReducers } from 'redux'

// login reducer
import projects from './projects'

// export root reducer
export default combineReducers({
    projects,
})
