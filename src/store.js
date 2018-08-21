import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import artists from './reducers/artists'


export default () => createStore(
  combineReducers({ artists }), 
  applyMiddleware(logger, thunk)
)