import {
  LOAD_USER_FULFILLED,
  LOAD_USER_REJECTED,
  LOAD_USER_PENDING
} from '../constants'

const initialState = {
  isFetching: false,
  error: null,
  user: {}
}

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_USER_FULFILLED:
      return {
        isFetching: false,
        err: null,
        user: action.payload.data.results[0]
      }
    case LOAD_USER_PENDING:
      return {
        isFetching: true,
        err: null,
        user: {}
      }
    case LOAD_USER_REJECTED:
      return {
        isFetching: false,
        err: action.payload.response.data,
        user: {}
      }
    default:
      return state
  }
}

export default user
