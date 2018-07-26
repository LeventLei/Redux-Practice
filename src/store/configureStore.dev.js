import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducers from '../reducers/index'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducers,
    {},
    composeWithDevTools(applyMiddleware(logger, thunk, promise()))
  )

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('../reducers', () => {
        store.replaceReducer(rootReducers)
      })
    }
  }

  return store
}

export default configureStore
