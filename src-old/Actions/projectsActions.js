/* eslint-disable import/prefer-default-export */
import { PROJECTS_UPDATED } from './Types/projectsTypes'

const projectsUpdate = projects => ({
    type: PROJECTS_UPDATED,
    projects,
})

export { projectsUpdate }
