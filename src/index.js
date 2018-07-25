import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import rootReducers from './reducers/index'
import { Provider } from 'react-redux'

// const logger = store => next => action => {
//   console.log('dispatching', action)
//   let result = next(action)
//   console.log('next state', store.getState())
//   return result
// }

// const error = store => next => action => {
//   try {
//     next(action)
//   } catch (error) {
//     console.log('error' + error)
//   }
// }

// const logger = function(store) {
//   return function(next) {
//     return function(action) {
//       console.log('dispatching', action)
//       let result = next(action)
//       console.log('next state', store.getState())
//       return result
//     }
//   }
// }

// const store = createStore(rootReducers, {}, applyMiddleware(logger, error))
const store = createStore(
  rootReducers,
  {},
  applyMiddleware(logger, thunk, promise())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
