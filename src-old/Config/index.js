/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'

import firebase from 'firebase'
import 'firebase/firestore'

import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

import rootReducer from '../Reducers'

// Create client alias
// Used in action creators
const client = axios.create({
    baseURL: process.env.TEST_API || 'http://localhost:3000',
    responseType: 'json',
})

// Config redux-persist
const persistConfig = {
    key: 'nipatiitti-dot-com',
    storage,
    blacklist: [],
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const firebaseConfig = {
    apiKey: 'AIzaSyD5FMhzh9Kigkh72fRaQ_fHW_D7L6De_G4',
    authDomain: 'nipatiittidotcom.firebaseapp.com',
    databaseURL: 'https://nipatiittidotcom.firebaseio.com',
    projectId: 'nipatiittidotcom',
    storageBucket: 'nipatiittidotcom.appspot.com',
    messagingSenderId: '715492646399',
    appId: '1:715492646399:web:815e0548a1264a10979bca',
    measurementId: 'G-NDWNQ53GE2',
}

firebase.initializeApp(firebaseConfig)
firebase.analytics()

// Define redux middleware to use
const tools = [applyMiddleware(thunk, axiosMiddleware(client))]

// If user has redux dev tools installed and we are using development build allow usage of dev tools
if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__)
    tools.push(window.__REDUX_DEVTOOLS_EXTENSION__())

// Create redux store
const store = createStore(persistedReducer, compose(...tools))
const persistor = persistStore(store)

export { store, persistor, firebase }
