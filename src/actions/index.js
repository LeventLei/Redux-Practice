import axios from 'axios'
import {
  INCREMENT,
  DECREMENT,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  LOAD_USER
} from '../constants'
export const increment = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 2000)
  }
}

export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const get_user = () => {
  // return dispatch => {
  //   dispatch(fetch_user_request())
  //   axios.get('https://randomuser.me/ai/')
  //     .then(res => {
  //       dispatch(fetch_user(res.data.results[0]))
  //     })
  //     .catch(error => {
  //       dispatch(fetch_user_failure(error.response.data))
  //     })
  // }
  return {
    type: LOAD_USER,
    // payload: axios.get('https://randomuser.me/api/')
    payload: {
      promise: axios.get('https://randomuser.me/api/')
    }
  }
}

export const fetch_user = user => {
  return {
    type: FETCH_USER_SUCCESS,
    user
  }
}

export const fetch_user_request = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}

export const fetch_user_failure = err => {
  return {
    type: FETCH_USER_FAILURE,
    err
  }
}
