import { applyMiddleware, createStore } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducer from './reducers'

const middleware = [
    thunk,
    process.env.NODE_ENV !== 'production' && logger,
]

export default createStore(reducer, applyMiddleware(...middleware))
