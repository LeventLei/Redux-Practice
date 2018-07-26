import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import rootReducers from '../reducers/index'

const configureStore = preloadedState => {
  const store = createStore(rootReducers, {}, applyMiddleware(thunk, promise()))
  return store
}

export default configureStore
