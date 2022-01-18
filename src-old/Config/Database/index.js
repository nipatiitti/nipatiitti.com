/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */
import firebase from 'firebase'

import { projectsUpdate } from '../../Actions/projectsActions'
import { store } from '..'

const database = firebase.firestore()

database.enablePersistence().catch(err => {
    if (err.code === 'failed-precondition') {
        console.warn('Multiple tabs open')
    } else if (err.code === 'unimplemented') {
        console.warn("Broswer doesn't support offline data caching")
    }
})

const projRef = database.collection('projects')

projRef.orderBy('priority').onSnapshot(querySnapshot => {
    const projects = []
    querySnapshot.forEach(doc => {
        projects.push({ ...doc.data(), id: doc.id })
    })
    store.dispatch(projectsUpdate(projects))
})

const getProjects = () => {
    projRef
        .orderBy('priority')
        .get()
        .then(querySnapshot => {
            const projects = []
            querySnapshot.forEach(doc => {
                projects.push({ ...doc.data(), id: doc.id })
            })
            store.dispatch(projectsUpdate(projects))
        })
}

export { getProjects }
