import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

export default(initialState) => {
  return createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
  )
}
