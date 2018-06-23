import { INCREMENT, DECREMENT } from '../constants'
export const increment = name => {
  return {
    type: INCREMENT,
    name
  }
}

export const decrement = name => {
  return {
    type: DECREMENT,
    name
  }
}
