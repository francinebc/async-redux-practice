import {
  SHOW_ERROR,
  REQUEST_POSTS,
  RECEIVE_POSTS,
  RECEIVE_DOG,
  REQUEST_DOG} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQUEST_POSTS:
      return true

    case RECEIVE_POSTS:
      return false

    case REQUEST_DOG:
      return true

    case RECEIVE_DOG:
      return false

    case SHOW_ERROR:
      return false

    default:
      return state
  }
}

export default waiting
