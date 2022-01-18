import { projects } from '../Actions/Types'

const initialState = []

const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case projects.PROJECTS_UPDATED:
            return action.projects

        default:
            return state
    }
}

export default projectsReducer
